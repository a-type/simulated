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
import { StorageMatcher, StorageResponse, StorageTrigger } from './types';

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
  },
});
const db = lowdb(adapter);

export default class Storage {
  /**
   * Lists all scenarios in the system. 'first' is optional, pass 'null' to get the
   * full list.
   */
  async getScenarios({
    first = 10,
    after,
  }: {
    first?: number | null;
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
    const slice =
      first !== null
        ? allScenarios.slice(startIndex, startIndex + first)
        : allScenarios;
    return {
      scenarios: slice,
      hasPreviousPage: first !== null ? startIndex !== 0 : false,
      hasNextPage:
        first !== null ? allScenarios.length > startIndex + first : false,
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
    const scenarioId = createId('Scenario');

    const scenario = {
      id: scenarioId,
      createdAt: timestamp(),
      updatedAt: timestamp(),
      expirationDurationSeconds: 600,
      possibleStates: [],
      defaultState: null,
      currentState: null,
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
      defaultState?: string | null;
      currentState?: string | null;
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

  /**
   * Adds a new state to a scenario. If the scenario doesn't currently
   * have a default state, the new state will be assigned. If the scenario
   * doesn't currently have a current state, the new state will be assigned.
   */
  async addScenarioState({
    scenarioId: id,
    stateId,
  }: {
    scenarioId: string;
    stateId: string;
  }) {
    const scenario = await (await db)
      .get('scenarios', [])
      .find(s => s.id === id)
      .update('possibleStates', states =>
        states.filter((i: string) => i !== stateId).push(stateId),
      )
      .update('defaultState', currentDefault => currentDefault || stateId)
      .update('currentState', currentCurrent => currentCurrent || stateId)
      .assign({
        updatedAt: timestamp(),
      })
      .write();

    return scenario;
  }

  async removeScenarioState({
    scenarioId,
    stateId,
  }: {
    scenarioId: string;
    stateId: string;
  }): Promise<StorageScenario> {
    const scenario = await (await db)
      .get('scenarios', [])
      .find(s => s.id === scenarioId)
      .value();

    scenario.possibleStates = scenario.possibleStates.filter(
      i => i !== stateId,
    );
    scenario.defaultState =
      scenario.defaultState === stateId
        ? scenario.possibleStates.length
          ? scenario.possibleStates[0]
          : null
        : scenario.defaultState;
    scenario.currentState =
      scenario.currentState === stateId
        ? scenario.defaultState
        : scenario.currentState;

    return await (await db)
      .get('scenarios', [])
      .find(s => s.id === scenarioId)
      .assign(scenario)
      .write();
  }

  async deleteScenario({ scenarioId: id }: { scenarioId: string }) {
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

  async createState({
    scenarioId: parentId,
    data,
  }: {
    scenarioId: string;
    data: { name: string };
  }) {
    const state: StorageState = {
      id: createId('State'),
      parentId,
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

  async getState({ stateId: id }: { stateId: string }) {
    const state = (await db)
      .get('states', [])
      .find(s => s.id === id)
      .value();
    return state;
  }

  async deleteState({ stateId }: { stateId: string }) {
    const state = (await db)
      .get('states', [])
      .find(m => m.id === stateId)
      .value();

    await (await db)
      .get('states', [])
      .filter(s => s.id !== stateId)
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

  /**
   * Lists mappings in the system. 'first' is optional, passing null will
   * return all mappings.
   */
  async getMappings({
    first = 10,
    after,
  }: {
    first?: number | null;
    after?: string | null;
  }) {
    const mappings = (await db).get('mappings', []).value();

    const startIndex = after
      ? mappings.findIndex(m => m.id === fromCursor(after))
      : 0;
    const slice = first
      ? mappings.slice(startIndex, startIndex + first)
      : mappings;

    return {
      mappings: slice,
      hasNextPage:
        first !== null ? startIndex + first < mappings.length : false,
      hasPreviousPage: first !== null ? startIndex > 0 : false,
    };
  }

  async getMapping({ mappingId: id }: { mappingId: string }) {
    const mapping = (await db)
      .get('mappings', [])
      .find(m => m.id === id)
      .value();
    return mapping;
  }

  async createMapping({
    stateId: parentId,
    data: { pathMatcher = null, response = null, trigger = null },
  }: {
    stateId: string;
    data: {
      pathMatcher?: StorageMatcher | null;
      response?: StorageResponse | null;
      trigger?: StorageTrigger | null;
    };
  }) {
    const mapping: StorageMapping = {
      id: createId('Mapping'),
      parentId,
      createdAt: timestamp(),
      updatedAt: timestamp(),
      pathMatcher,
      response,
      trigger,
    };

    await (await db)
      .get('mappings', [])
      .push(mapping)
      .write();

    return mapping;
  }

  async addStateMapping({
    stateId,
    mappingId,
  }: {
    stateId: string;
    mappingId: string;
  }) {
    const state = await (await db)
      .get('states', [])
      .find(s => s.id === stateId)
      .update('mappings', mappings =>
        mappings.filter((i: string) => i !== mappingId).push(mappingId),
      )
      .assign({
        updatedAt: timestamp(),
      })
      .write();

    return state as StorageState;
  }

  async removeStateMapping({
    stateId,
    mappingId,
  }: {
    stateId: string;
    mappingId: string;
  }): Promise<StorageState> {
    const state = await (await db)
      .get('states', [])
      .find(s => s.id === stateId)
      .value();

    state.mappings = state.mappings.filter(i => i !== mappingId);

    return await (await db)
      .get('states', [])
      .find(s => s.id === stateId)
      .assign(state)
      .write();
  }

  async updateMapping({
    id,
    data: { pathMatcher = null, response = null, trigger = null },
  }: {
    id: string;
    data: {
      pathMatcher?: StorageMatcher | null;
      response?: StorageResponse | null;
      trigger?: StorageTrigger | null;
    };
  }) {
    const mapping = (await db)
      .get('mappings', [])
      .find(m => m.id === id)
      .assign({
        ...{
          pathMatcher,
          response,
          trigger,
        },
        updatedAt: timestamp(),
      })
      .write();

    return mapping as StorageMapping;
  }

  async deleteMapping({ mappingId: id }: { mappingId: string }) {
    const mapping = (await db)
      .get('mappings', [])
      .find(m => m.id === id)
      .value();
    return mapping;
  }
}
