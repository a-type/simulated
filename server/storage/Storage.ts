import lowdb from 'lowdb';
import FileAsync from 'lowdb/adapters/FileAsync';
import * as fs from 'fs';
import * as path from 'path';
import { toCursor, fromCursor } from './cursors';
import {
  StorageSchema,
  StorageScenario,
  StorageState,
  StorageMapping,
} from './types';
import { createId } from './ids';
import { timestamp } from './dates';

const databaseFilePath =
  process.env.JSON_DB_FILE_PATH || path.join(process.cwd(), './data/db.json');

// ensure existence of containing directory
if (!fs.existsSync(databaseFilePath)) {
  try {
    fs.mkdirSync(
      databaseFilePath
        .split(/\/|\\/)
        .slice(0, -1)
        .join(path.sep),
    );
  } catch (err) {
    // idk.
  }
}

const adapter = new FileAsync<StorageSchema>(databaseFilePath, {
  defaultValue: {
    scenarios: [],
    states: [],
    mappings: [],
    matchers: [],
    responses: [],
    triggers: [],
  },
});
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

  async getScenario({ id }: { id: string }) {
    const scenario = (await db)
      .get('scenarios', [])
      .find(s => s.id === id)
      .value();
    return scenario;
  }

  /**
   * Creates a new scenario with a default state
   */
  async createScenario({
    data,
  }: {
    data: {
      name?: string | null;
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
      createdAt: timestamp(),
      updatedAt: timestamp(),
      expirationDurationSeconds: 600,
      possibleStates: [defaultStateId],
      defaultState: defaultStateId,
      currentState: defaultStateId,
      disabled: false,
      ...data,
      name: data.name || 'New Scenario',
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
      name?: string | null;
      expirationDurationSeconds?: number;
      disabled?: boolean;
      defaultState?: string;
      currentState?: string;
    };
  }) {
    const scenario = await (await db)
      .get('scenarios', [])
      .find(s => s.id === id)
      .assign({
        ...data,
        updatedAt: timestamp(),
      })
      .write();

    return scenario;
  }

  async addScenarioState({ id, stateId }: { id: string; stateId: string }) {
    const scenario = await (await db)
      .get('scenarios', [])
      .find(s => s.id === id)
      .update('possibleStates', states =>
        states.filter((i: string) => i !== stateId).push(stateId),
      )
      .assign({
        updatedAt: timestamp(),
      })
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

  async getScenarioPossibleStates({
    id,
    first = 10,
    after,
  }: {
    id: string;
    first?: number;
    after?: string | null;
  }) {
    const scenario = (await db)
      .get('scenarios', [])
      .find(s => s.id === id)
      .value();

    const states = (await db).get('states', []).value();

    const startIndex = after
      ? scenario.possibleStates.indexOf(fromCursor(after))
      : 0;
    const slice = scenario.possibleStates
      .slice(startIndex, startIndex + first)
      .map((stateId: string) => states.find(s => s.id === stateId))
      .filter(Boolean) as StorageState[];

    return {
      states: slice,
      hasNextPage: startIndex + first < scenario.possibleStates.length,
      hasPreviousPage: startIndex > 0,
    };
  }

  async createState({ data }: { data: { name: string } }) {
    const state: StorageState = {
      id: createId('State'),
      name: data.name,
      createdAt: timestamp(),
      updatedAt: timestamp(),
      mappings: [],
    };

    await (await db)
      .get('states', [])
      .push(state)
      .write();

    return state;
  }

  async getStateMappings({
    id,
    first = 10,
    after,
  }: {
    id: string;
    first?: number;
    after?: string | null;
  }) {
    const state = (await db)
      .get('states', [])
      .find(s => s.id === id)
      .value();
    const mappings = (await db).get('mappings', []).value();

    const startIndex = after ? state.mappings.indexOf(fromCursor(after)) : 0;
    const slice = state.mappings
      .slice(startIndex, startIndex + first)
      .map(mappingId => mappings.find(m => m.id === mappingId))
      .filter(Boolean) as StorageMapping[];

    return {
      mappings: slice,
      hasNextPage: startIndex + first < state.mappings.length,
      hasPreviousPage: startIndex > 0,
    };
  }
}
