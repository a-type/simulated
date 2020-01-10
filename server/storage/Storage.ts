import lowdb from 'lowdb';
import FileAsync from 'lowdb/adapters/FileAsync';
import * as fs from 'fs';
import * as path from 'path';
import { toCursor } from './cursors';
import { StorageSchema, StorageScenario } from './types';
import { createId } from './ids';
import { timestamp } from './dates';

const databaseFilePath =
  process.env.JSON_DB_FILE_PATH || path.join(process.cwd(), './data/db.json');

// ensure existence of containing directory
if (!fs.existsSync(databaseFilePath)) {
  fs.mkdirSync(
    databaseFilePath
      .split(/\/|\\/)
      .slice(0, -1)
      .join(path.sep),
  );
}

const adapter = new FileAsync<StorageSchema>(databaseFilePath);
const db = lowdb(adapter);

export default class Storage {
  async getScenarios({
    first = 10,
    after,
  }: {
    first: number;
    after?: string | null;
  }) {
    const allScenarios = (await db)
      .get('scenarios', [])
      .sortBy(s => s.createdAt)
      .value();
    // slice from cursor
    const startIndex = after
      ? allScenarios.findIndex(s => s.id === toCursor(after))
      : 0;
    const slice = allScenarios.slice(startIndex, startIndex + first);
    return {
      scenarios: slice,
      hasPreviousPage: startIndex !== 0,
      hasNextPage: allScenarios.length > startIndex + first,
    };
  }

  /**
   * Creates a new scenario with a default state
   */
  async createScenario({
    data,
  }: {
    data: {
      name?: string;
      expirationDurationSeconds?: number;
      disabled?: boolean;
    };
  }) {
    const defaultStateId = createId('State');
    await (await db)
      .get('states', [])
      .push({
        id: defaultStateId,
        name: 'Default',
        createdAt: timestamp(),
        updatedAt: timestamp(),
        mappings: [],
      })
      .write();

    const scenario = {
      id: createId('Scenario'),
      name: 'New Scenario',
      createdAt: timestamp(),
      updatedAt: timestamp(),
      expirationDurationSeconds: 600,
      possibleStates: [defaultStateId],
      defaultState: defaultStateId,
      currentState: defaultStateId,
      disabled: false,
      ...data,
    };

    await (await db)
      .get('scenarios', [])
      .push(scenario)
      .write();

    return scenario;
  }

  async updateScenario({
    id,
    data,
  }: {
    id: string;
    data: {
      name?: string;
      expirationDurationSeconds?: number;
      disabled?: boolean;
      defaultState?: string;
      currentState?: string;
    };
  }) {
    const scenario = await (await db)
      .get('scenarios', [])
      .find(s => s.id === id)
      .assign(data)
      .write();

    return scenario;
  }

  async deleteScenario({ id }: { id: string }) {
    const scenario = (await db)
      .get('scenarios', [])
      .find(s => s.id === id)
      .value();

    if (!scenario) return scenario;

    await (await db)
      .get('scenarios', [])
      .filter(s => s.id !== id)
      .write();

    return scenario;
  }
}
