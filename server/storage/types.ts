import { Normalized } from '../utils/utilityTypes';
import {
  Scenario,
  State,
  Mapping,
  Response,
  Trigger,
  Matcher,
} from '../admin/schema/generated/graphql';

// for storage, replace child references with normalized ids
export type StorageScenario = Normalized<Scenario>;
// patching out the connection field
export type StorageState = Omit<Normalized<State>, 'mappings'> & {
  mappings: string[];
};
export type StorageMapping = Normalized<Mapping>;
export type StorageResponse = Normalized<Response>;
export type StorageTrigger = Normalized<Trigger>;
export type StorageMatcher = Normalized<Matcher>;

export type StorageSchema = {
  scenarios: StorageScenario[];
  states: StorageState[];
  mappings: StorageMapping[];
  responses: StorageResponse[];
  triggers: StorageTrigger[];
  matchers: StorageMatcher[];
};
