import {
  BodyMatcher,
  HeadersMatcher,
  Scenario,
  State,
  Mapping,
  PathMatcher,
  MethodsMatcher,
  Response,
  Trigger,
} from '../admin/schema/generated/graphql';

// for storage, replace child references with normalized ids
export type StorageScenario = Omit<
  Scenario,
  'defaultState' | 'currentState' | 'possibleStates'
> & {
  defaultState: string | null;
  currentState: string | null;
  possibleStates: string[];
};
// patching out the connection field
export type StorageState = Omit<State, 'mappings'> & {
  mappings: string[];
  parentId: string;
};
// mappings are denormalized for quicker access to common related data
export type StorageMapping = Omit<
  Mapping,
  'trigger' | 'pathMatcher' | 'response'
> & {
  parentId: string;
  trigger: StorageTrigger | null;
  matchers: StorageMatcher[] | [];
  response: StorageResponse | null;
};
// re-exporting some raw data types
export type StorageMatcher =
  | MethodsMatcher
  | PathMatcher
  | BodyMatcher
  | HeadersMatcher;
export type StorageResponse = Response;
export type StorageTrigger = Omit<Trigger, 'targetState'> & {
  targetState: string | null;
};

export type StorageSchema = {
  scenarios: StorageScenario[];
  states: StorageState[];
  mappings: StorageMapping[];
};
