import { Normalized } from '../utils/utilityTypes';
import { Scenario, State, Mapping } from '../admin/schema/generated/graphql';

// for storage, replace child references with normalized ids
export type StorageScenario = Normalized<Scenario>;
// patching out the connection field
export type StorageState = Omit<Normalized<State>, 'mappings'> & {
  mappings: string[];
};
// mappings are denormalized for quicker access to common related data
export type StorageMapping = Mapping;

export type StorageSchema = {
  scenarios: StorageScenario[];
  states: StorageState[];
  mappings: StorageMapping[];
};
