import { GraphQLResolveInfo } from 'graphql';
import { Context } from '../../context';
import { Normalized } from '../../../utils/utilityTypes';
export type Maybe<T> = T | null;
export type RequireFields<T, K extends keyof T> = { [X in Exclude<keyof T, K>]?: T[X] } & { [P in K]-?: NonNullable<T[P]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string,
  String: string,
  Boolean: boolean,
  Int: number,
  Float: number,
};

export type AddBodyMatcherInput = {
  body: Scalars['String'],
  ignoreWhitespace?: Maybe<Scalars['Boolean']>,
  regex?: Maybe<Scalars['Boolean']>,
};

export type AddHeaderNameValuePairInput = {
  name: Scalars['String'],
  value?: Maybe<Scalars['String']>,
};

export type AddHeadersMatcherInput = {
  headers: Array<AddHeaderNameValuePairInput>,
};

export type AddMappingInput = {
  priority: Scalars['Int'],
};

export type AddMappingMatcherInput = {
  mappingId: Scalars['ID'],
  matcher: AddMatcherInput,
};

export type AddMappingMatcherResult = {
   __typename?: 'AddMappingMatcherResult',
  mapping: Mapping,
};

/** 
 * These options are exclusive; provide exactly one to indicate what kind
 * of matcher you are adding.
 */
export type AddMatcherInput = {
  methods?: Maybe<AddMethodsMatcherInput>,
  path?: Maybe<AddPathMatcherInput>,
  body?: Maybe<AddBodyMatcherInput>,
  headers?: Maybe<AddHeadersMatcherInput>,
};

export type AddMethodsMatcherInput = {
  methods: Array<Scalars['String']>,
};

export type AddPathMatcherInput = {
  path: Scalars['String'],
  regex?: Maybe<Scalars['Boolean']>,
};

export type AddResponseBodyInput = {
  template?: Maybe<AddTemplateResponseBodyInput>,
};

export type AddResponseInput = {
  body: AddResponseBodyInput,
};

export type AddScenarioInput = {
  name?: Maybe<Scalars['String']>,
};

export type AddScenarioResult = {
   __typename?: 'AddScenarioResult',
  scenario: Scenario,
  scenarioEdge: ScenarioEdge,
};

export type AddScenarioStateInput = {
  scenarioId: Scalars['ID'],
  state: AddStateInput,
};

export type AddScenarioStateResult = {
   __typename?: 'AddScenarioStateResult',
  scenario: Scenario,
  state: State,
  stateEdge: ScenarioStateEdge,
};

export type AddStateInput = {
  name: Scalars['String'],
};

export type AddStateMappingInput = {
  stateId: Scalars['ID'],
  mapping: AddMappingInput,
};

export type AddStateMappingResult = {
   __typename?: 'AddStateMappingResult',
  state: State,
  mapping: Mapping,
  mappingEdge: StateMappingEdge,
};

export type AddTemplateResponseBodyInput = {
  value: Scalars['String'],
};

export type AddTriggerInput = {
  targetState: Scalars['ID'],
};

export type BodyMatcher = Matcher & {
   __typename?: 'BodyMatcher',
  kind: MatcherKind,
  body: Scalars['String'],
  ignoreWhitespace: Scalars['Boolean'],
  regex: Scalars['Boolean'],
};

export type DeleteMappingInput = {
  mappingId: Scalars['ID'],
};

export type DeleteMappingResult = {
   __typename?: 'DeleteMappingResult',
  mapping: Mapping,
  mappingEdge: StateMappingEdge,
  state: State,
};

export type DeleteScenarioInput = {
  scenarioId: Scalars['ID'],
};

export type DeleteScenarioResult = {
   __typename?: 'DeleteScenarioResult',
  scenario: Scenario,
  scenarioEdge: ScenarioEdge,
};

export type DeleteStateInput = {
  stateId: Scalars['ID'],
};

export type DeleteStateResult = {
   __typename?: 'DeleteStateResult',
  state: State,
  stateEdge: ScenarioStateEdge,
  scenario: Scenario,
};

export type DisableScenarioInput = {
  scenarioId: Scalars['ID'],
};

export type DisableScenarioResult = {
   __typename?: 'DisableScenarioResult',
  scenario: Scenario,
};

export type EnableScenarioInput = {
  scenarioId: Scalars['ID'],
};

export type EnableScenarioResult = {
   __typename?: 'EnableScenarioResult',
  scenario: Scenario,
};

export type HeaderKeyValuePair = {
   __typename?: 'HeaderKeyValuePair',
  name: Scalars['String'],
  value?: Maybe<Scalars['String']>,
};

export type HeadersMatcher = Matcher & {
   __typename?: 'HeadersMatcher',
  kind: MatcherKind,
  headers: Array<HeaderKeyValuePair>,
};

export type Mapping = Node & {
   __typename?: 'Mapping',
  id: Scalars['ID'],
  matchers: Array<Matcher>,
  response?: Maybe<Response>,
  trigger?: Maybe<Trigger>,
  priority: Scalars['Int'],
  /** UTC formatted string */
  createdAt: Scalars['String'],
  /** UTC formatted string */
  updatedAt: Scalars['String'],
};

export type Matcher = {
  kind: MatcherKind,
};

export enum MatcherKind {
  Methods = 'methods',
  Path = 'path',
  Body = 'body',
  Headers = 'headers'
}

export type MethodsMatcher = Matcher & {
   __typename?: 'MethodsMatcher',
  kind: MatcherKind,
  methods: Array<Scalars['String']>,
};

export type Mutation = {
   __typename?: 'Mutation',
  /** Adds a new, empty scenario */
  addScenario: AddScenarioResult,
  /** Updates the basic information of a scenario */
  setScenarioDetails: SetScenarioDetailsResult,
  /** 
 * Changes the default state of a scenario, which it will return to
   * upon expiration or when the service initializes on startup
 */
  setScenarioDefaultState: SetScenarioDefaultStateResult,
  /** 
 * Changes the expiration time of a scenario, at which point it will
   * reset back to its default state
 */
  setScenarioExpiration: SetScenarioExpirationResult,
  /** Removes the scenario from consideration for future simulated requests. Idempotent. */
  disableScenario: DisableScenarioResult,
  /** Enables the scenario for consideration for future simulated requests. Idempotent. */
  enableScenario: EnableScenarioResult,
  /** Deletes a particular scenario */
  deleteScenario: DeleteScenarioResult,
  /** Adds a state to a scenario. Every scenario has a default "Initial" state */
  addScenarioState: AddScenarioStateResult,
  /** Updates the basic information of a state */
  setStateDetails: SetStateDetailsResult,
  /** Deletes a particular state, removing it from its parent scenario */
  deleteState: DeleteStateResult,
  /** Adds a request mapping to a scenario state */
  addStateMapping: AddStateMappingResult,
  /** 
 * Configures a new rule for how a mapping matches against a request. Rules are
   * additive; all rules must match for a mapping to be a valid match for a request. You
   * may only have one matcher per MatcherKind. Adding a matcher which has the same
   * MatcherKind as another existing Matcher will overwrite the previous one.
 */
  addMappingMatcher: AddMappingMatcherResult,
  /** 
 * Deletes a rule for how a mapping matches against a request, by MatcherKind value.
   * Because Matchers are exclusive per MatcherKind for each Mapping, you can expect
   * that at most one Matcher will be deleted for any MatcherKind supplied.
 */
  removeMappingMatcher: RemoveMappingMatcherResult,
  /** Configures a mapping with a simulated response to send back to the client */
  setMappingResponse: SetMappingResponseResult,
  /** 
 * Sets a trigger to change scenario state on a particular request mapping. When
   * the request mapping is executed, the trigger will transition the parent scenario
   * into the target state
 */
  setMappingTrigger: SetMappingTriggerResult,
  /** Updates the priority level of a mapping */
  setMappingPriority: SetMappingPriorityResult,
  /** Deletes a particular mapping, removing it from its parent state */
  deleteMapping: DeleteMappingResult,
};


export type MutationAddScenarioArgs = {
  input: AddScenarioInput
};


export type MutationSetScenarioDetailsArgs = {
  input: SetScenarioDetailsInput
};


export type MutationSetScenarioDefaultStateArgs = {
  input: SetScenarioDefaultStateInput
};


export type MutationSetScenarioExpirationArgs = {
  input: SetScenarioExpirationInput
};


export type MutationDisableScenarioArgs = {
  input: DisableScenarioInput
};


export type MutationEnableScenarioArgs = {
  input: EnableScenarioInput
};


export type MutationDeleteScenarioArgs = {
  input: DeleteScenarioInput
};


export type MutationAddScenarioStateArgs = {
  input: AddScenarioStateInput
};


export type MutationSetStateDetailsArgs = {
  input: SetStateDetailsInput
};


export type MutationDeleteStateArgs = {
  input: DeleteStateInput
};


export type MutationAddStateMappingArgs = {
  input: AddStateMappingInput
};


export type MutationAddMappingMatcherArgs = {
  input: AddMappingMatcherInput
};


export type MutationRemoveMappingMatcherArgs = {
  input: RemoveMappingMatcherInput
};


export type MutationSetMappingResponseArgs = {
  input: SetMappingResponseInput
};


export type MutationSetMappingTriggerArgs = {
  input: SetMappingTriggerInput
};


export type MutationSetMappingPriorityArgs = {
  input: SetMappingPriorityInput
};


export type MutationDeleteMappingArgs = {
  input: DeleteMappingInput
};

export type Node = {
  id: Scalars['ID'],
};

export type PathMatcher = Matcher & {
   __typename?: 'PathMatcher',
  kind: MatcherKind,
  path: Scalars['String'],
  regex: Scalars['Boolean'],
};

export type Query = {
   __typename?: 'Query',
  viewer: Viewer,
  node?: Maybe<Node>,
};


export type QueryNodeArgs = {
  id: Scalars['ID']
};

export type RemoveMappingMatcherInput = {
  mappingId: Scalars['ID'],
  matcherKind: MatcherKind,
};

export type RemoveMappingMatcherResult = {
   __typename?: 'RemoveMappingMatcherResult',
  mapping: Mapping,
};

export type Response = {
   __typename?: 'Response',
  body: ResponseBody,
};

export type ResponseBody = {
  kind: ResponseBodyKind,
};

export enum ResponseBodyKind {
  Template = 'template'
}

export type Scenario = Node & {
   __typename?: 'Scenario',
  id: Scalars['ID'],
  /** Friendly name to quickly identify the purpose of the scenario */
  name: Scalars['String'],
  /** List of possible states the scenario can be in. States are exclusive. */
  possibleStates: ScenarioStateConnection,
  /** The currently valid state of this scenario. */
  currentState?: Maybe<State>,
  /** 
 * The default state is selected on simulator startup and will be reverted to
   * automatically if expirationDurationSeconds is used.
 */
  defaultState?: Maybe<State>,
  /** 
 * After the specified number of seconds, the scenario will revert to the default
   * state. If 0, the scenario will never revert. For 0 expiration values, ensure
   * your state machine is cyclical so that the scenario does not enter an irreversible
   * state, if so desired.
 */
  expirationDurationSeconds: Scalars['Float'],
  /** 
 * If disabled, no mappings related to scenario states will be tested for any incoming
   * requests.
 */
  disabled: Scalars['Boolean'],
  /** UTC formatted string */
  createdAt: Scalars['String'],
  /** UTC formatted string */
  updatedAt: Scalars['String'],
};


export type ScenarioPossibleStatesArgs = {
  first?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>
};

export type ScenarioConnection = {
   __typename?: 'ScenarioConnection',
  edges: Array<ScenarioEdge>,
  pageInfo: ScenarioPageInfo,
};

export type ScenarioEdge = {
   __typename?: 'ScenarioEdge',
  node: Scenario,
  cursor: Scalars['String'],
};

export type ScenarioPageInfo = {
   __typename?: 'ScenarioPageInfo',
  hasNextPage: Scalars['Boolean'],
  hasPreviousPage: Scalars['Boolean'],
  startCursor?: Maybe<Scalars['String']>,
  endCursor?: Maybe<Scalars['String']>,
};

export type ScenarioStateConnection = {
   __typename?: 'ScenarioStateConnection',
  edges: Array<ScenarioStateEdge>,
  pageInfo: ScenarioStatePageInfo,
};

export type ScenarioStateEdge = {
   __typename?: 'ScenarioStateEdge',
  node: State,
  cursor: Scalars['String'],
};

export type ScenarioStatePageInfo = {
   __typename?: 'ScenarioStatePageInfo',
  hasNextPage: Scalars['Boolean'],
  hasPreviousPage: Scalars['Boolean'],
  startCursor?: Maybe<Scalars['String']>,
  endCursor?: Maybe<Scalars['String']>,
};

export type SetMappingPriorityInput = {
  mappingId: Scalars['ID'],
  priority: Scalars['Int'],
};

export type SetMappingPriorityResult = {
   __typename?: 'SetMappingPriorityResult',
  mapping: Mapping,
};

export type SetMappingResponseInput = {
  mappingId: Scalars['ID'],
  response: AddResponseInput,
};

export type SetMappingResponseResult = {
   __typename?: 'SetMappingResponseResult',
  mapping: Mapping,
};

export type SetMappingTriggerInput = {
  mappingId: Scalars['ID'],
  trigger: AddTriggerInput,
};

export type SetMappingTriggerResult = {
   __typename?: 'SetMappingTriggerResult',
  mapping: Mapping,
};

export type SetScenarioDefaultStateInput = {
  scenarioId: Scalars['ID'],
  stateId: Scalars['ID'],
};

export type SetScenarioDefaultStateResult = {
   __typename?: 'SetScenarioDefaultStateResult',
  scenario: Scenario,
};

export type SetScenarioDetailsInput = {
  scenarioId: Scalars['ID'],
  name?: Maybe<Scalars['String']>,
};

export type SetScenarioDetailsResult = {
   __typename?: 'SetScenarioDetailsResult',
  scenario: Scenario,
};

export type SetScenarioExpirationInput = {
  scenarioId: Scalars['ID'],
  expirationDurationSeconds: Scalars['Float'],
};

export type SetScenarioExpirationResult = {
   __typename?: 'SetScenarioExpirationResult',
  scenario: Scenario,
};

export type SetStateDetailsInput = {
  stateId: Scalars['ID'],
  name?: Maybe<Scalars['String']>,
};

export type SetStateDetailsResult = {
   __typename?: 'SetStateDetailsResult',
  state: State,
};

export type State = Node & {
   __typename?: 'State',
  id: Scalars['ID'],
  name: Scalars['String'],
  mappings: StateMappingConnection,
  /** UTC formatted string */
  createdAt: Scalars['String'],
  /** UTC formatted string */
  updatedAt: Scalars['String'],
};


export type StateMappingsArgs = {
  first?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>
};

export type StateMappingConnection = {
   __typename?: 'StateMappingConnection',
  edges: Array<StateMappingEdge>,
  pageInfo: StateMappingPageInfo,
};

export type StateMappingEdge = {
   __typename?: 'StateMappingEdge',
  node: Mapping,
  cursor: Scalars['String'],
};

export type StateMappingPageInfo = {
   __typename?: 'StateMappingPageInfo',
  hasNextPage: Scalars['Boolean'],
  hasPreviousPage: Scalars['Boolean'],
  startCursor?: Maybe<Scalars['String']>,
  endCursor?: Maybe<Scalars['String']>,
};

export type TemplateResponseBody = ResponseBody & {
   __typename?: 'TemplateResponseBody',
  kind: ResponseBodyKind,
  value: Scalars['String'],
};

export type Trigger = {
   __typename?: 'Trigger',
  targetState: State,
};

export type Viewer = Node & {
   __typename?: 'Viewer',
  id: Scalars['ID'],
  scenarios: ScenarioConnection,
  scenario?: Maybe<Scenario>,
  state?: Maybe<State>,
  mapping?: Maybe<Mapping>,
};


export type ViewerScenariosArgs = {
  first?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>
};


export type ViewerScenarioArgs = {
  id: Scalars['ID']
};


export type ViewerStateArgs = {
  id: Scalars['ID']
};


export type ViewerMappingArgs = {
  id: Scalars['ID']
};

export type WithIndex<TObject> = TObject & Record<string, any>;
export type ResolversObject<TObject> = WithIndex<TObject>;

export type ResolverTypeWrapper<T> = Promise<T> | T;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;


export type StitchingResolver<TResult, TParent, TContext, TArgs> = {
  fragment: string;
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};

export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> =
  | ResolverFn<TResult, TParent, TContext, TArgs>
  | StitchingResolver<TResult, TParent, TContext, TArgs>;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterator<TResult> | Promise<AsyncIterator<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = ResolversObject<{
  Query: ResolverTypeWrapper<{}>,
  Viewer: ResolverTypeWrapper<Normalized<Viewer>>,
  Node: ResolverTypeWrapper<Normalized<Node>>,
  ID: ResolverTypeWrapper<Normalized<Scalars['ID']>>,
  Int: ResolverTypeWrapper<Normalized<Scalars['Int']>>,
  String: ResolverTypeWrapper<Normalized<Scalars['String']>>,
  ScenarioConnection: ResolverTypeWrapper<Normalized<ScenarioConnection>>,
  ScenarioEdge: ResolverTypeWrapper<Normalized<ScenarioEdge>>,
  Scenario: ResolverTypeWrapper<Normalized<Scenario>>,
  ScenarioStateConnection: ResolverTypeWrapper<Normalized<ScenarioStateConnection>>,
  ScenarioStateEdge: ResolverTypeWrapper<Normalized<ScenarioStateEdge>>,
  State: ResolverTypeWrapper<Normalized<State>>,
  StateMappingConnection: ResolverTypeWrapper<Normalized<StateMappingConnection>>,
  StateMappingEdge: ResolverTypeWrapper<Normalized<StateMappingEdge>>,
  Mapping: ResolverTypeWrapper<Normalized<Mapping>>,
  Matcher: ResolverTypeWrapper<Normalized<Matcher>>,
  MatcherKind: ResolverTypeWrapper<Normalized<MatcherKind>>,
  Response: ResolverTypeWrapper<Normalized<Response>>,
  ResponseBody: ResolverTypeWrapper<Normalized<ResponseBody>>,
  ResponseBodyKind: ResolverTypeWrapper<Normalized<ResponseBodyKind>>,
  Trigger: ResolverTypeWrapper<Normalized<Trigger>>,
  StateMappingPageInfo: ResolverTypeWrapper<Normalized<StateMappingPageInfo>>,
  Boolean: ResolverTypeWrapper<Normalized<Scalars['Boolean']>>,
  ScenarioStatePageInfo: ResolverTypeWrapper<Normalized<ScenarioStatePageInfo>>,
  Float: ResolverTypeWrapper<Normalized<Scalars['Float']>>,
  ScenarioPageInfo: ResolverTypeWrapper<Normalized<ScenarioPageInfo>>,
  Mutation: ResolverTypeWrapper<{}>,
  AddScenarioInput: ResolverTypeWrapper<Normalized<AddScenarioInput>>,
  AddScenarioResult: ResolverTypeWrapper<Normalized<AddScenarioResult>>,
  SetScenarioDetailsInput: ResolverTypeWrapper<Normalized<SetScenarioDetailsInput>>,
  SetScenarioDetailsResult: ResolverTypeWrapper<Normalized<SetScenarioDetailsResult>>,
  SetScenarioDefaultStateInput: ResolverTypeWrapper<Normalized<SetScenarioDefaultStateInput>>,
  SetScenarioDefaultStateResult: ResolverTypeWrapper<Normalized<SetScenarioDefaultStateResult>>,
  SetScenarioExpirationInput: ResolverTypeWrapper<Normalized<SetScenarioExpirationInput>>,
  SetScenarioExpirationResult: ResolverTypeWrapper<Normalized<SetScenarioExpirationResult>>,
  DisableScenarioInput: ResolverTypeWrapper<Normalized<DisableScenarioInput>>,
  DisableScenarioResult: ResolverTypeWrapper<Normalized<DisableScenarioResult>>,
  EnableScenarioInput: ResolverTypeWrapper<Normalized<EnableScenarioInput>>,
  EnableScenarioResult: ResolverTypeWrapper<Normalized<EnableScenarioResult>>,
  DeleteScenarioInput: ResolverTypeWrapper<Normalized<DeleteScenarioInput>>,
  DeleteScenarioResult: ResolverTypeWrapper<Normalized<DeleteScenarioResult>>,
  AddScenarioStateInput: ResolverTypeWrapper<Normalized<AddScenarioStateInput>>,
  AddStateInput: ResolverTypeWrapper<Normalized<AddStateInput>>,
  AddScenarioStateResult: ResolverTypeWrapper<Normalized<AddScenarioStateResult>>,
  SetStateDetailsInput: ResolverTypeWrapper<Normalized<SetStateDetailsInput>>,
  SetStateDetailsResult: ResolverTypeWrapper<Normalized<SetStateDetailsResult>>,
  DeleteStateInput: ResolverTypeWrapper<Normalized<DeleteStateInput>>,
  DeleteStateResult: ResolverTypeWrapper<Normalized<DeleteStateResult>>,
  AddStateMappingInput: ResolverTypeWrapper<Normalized<AddStateMappingInput>>,
  AddMappingInput: ResolverTypeWrapper<Normalized<AddMappingInput>>,
  AddStateMappingResult: ResolverTypeWrapper<Normalized<AddStateMappingResult>>,
  AddMappingMatcherInput: ResolverTypeWrapper<Normalized<AddMappingMatcherInput>>,
  AddMatcherInput: ResolverTypeWrapper<Normalized<AddMatcherInput>>,
  AddMethodsMatcherInput: ResolverTypeWrapper<Normalized<AddMethodsMatcherInput>>,
  AddPathMatcherInput: ResolverTypeWrapper<Normalized<AddPathMatcherInput>>,
  AddBodyMatcherInput: ResolverTypeWrapper<Normalized<AddBodyMatcherInput>>,
  AddHeadersMatcherInput: ResolverTypeWrapper<Normalized<AddHeadersMatcherInput>>,
  AddHeaderNameValuePairInput: ResolverTypeWrapper<Normalized<AddHeaderNameValuePairInput>>,
  AddMappingMatcherResult: ResolverTypeWrapper<Normalized<AddMappingMatcherResult>>,
  RemoveMappingMatcherInput: ResolverTypeWrapper<Normalized<RemoveMappingMatcherInput>>,
  RemoveMappingMatcherResult: ResolverTypeWrapper<Normalized<RemoveMappingMatcherResult>>,
  SetMappingResponseInput: ResolverTypeWrapper<Normalized<SetMappingResponseInput>>,
  AddResponseInput: ResolverTypeWrapper<Normalized<AddResponseInput>>,
  AddResponseBodyInput: ResolverTypeWrapper<Normalized<AddResponseBodyInput>>,
  AddTemplateResponseBodyInput: ResolverTypeWrapper<Normalized<AddTemplateResponseBodyInput>>,
  SetMappingResponseResult: ResolverTypeWrapper<Normalized<SetMappingResponseResult>>,
  SetMappingTriggerInput: ResolverTypeWrapper<Normalized<SetMappingTriggerInput>>,
  AddTriggerInput: ResolverTypeWrapper<Normalized<AddTriggerInput>>,
  SetMappingTriggerResult: ResolverTypeWrapper<Normalized<SetMappingTriggerResult>>,
  SetMappingPriorityInput: ResolverTypeWrapper<Normalized<SetMappingPriorityInput>>,
  SetMappingPriorityResult: ResolverTypeWrapper<Normalized<SetMappingPriorityResult>>,
  DeleteMappingInput: ResolverTypeWrapper<Normalized<DeleteMappingInput>>,
  DeleteMappingResult: ResolverTypeWrapper<Normalized<DeleteMappingResult>>,
  MethodsMatcher: ResolverTypeWrapper<Normalized<MethodsMatcher>>,
  PathMatcher: ResolverTypeWrapper<Normalized<PathMatcher>>,
  BodyMatcher: ResolverTypeWrapper<Normalized<BodyMatcher>>,
  HeadersMatcher: ResolverTypeWrapper<Normalized<HeadersMatcher>>,
  HeaderKeyValuePair: ResolverTypeWrapper<Normalized<HeaderKeyValuePair>>,
  TemplateResponseBody: ResolverTypeWrapper<Normalized<TemplateResponseBody>>,
}>;

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = ResolversObject<{
  Query: {},
  Viewer: Normalized<Viewer>,
  Node: Normalized<Node>,
  ID: Normalized<Scalars['ID']>,
  Int: Normalized<Scalars['Int']>,
  String: Normalized<Scalars['String']>,
  ScenarioConnection: Normalized<ScenarioConnection>,
  ScenarioEdge: Normalized<ScenarioEdge>,
  Scenario: Normalized<Scenario>,
  ScenarioStateConnection: Normalized<ScenarioStateConnection>,
  ScenarioStateEdge: Normalized<ScenarioStateEdge>,
  State: Normalized<State>,
  StateMappingConnection: Normalized<StateMappingConnection>,
  StateMappingEdge: Normalized<StateMappingEdge>,
  Mapping: Normalized<Mapping>,
  Matcher: Normalized<Matcher>,
  MatcherKind: Normalized<MatcherKind>,
  Response: Normalized<Response>,
  ResponseBody: Normalized<ResponseBody>,
  ResponseBodyKind: Normalized<ResponseBodyKind>,
  Trigger: Normalized<Trigger>,
  StateMappingPageInfo: Normalized<StateMappingPageInfo>,
  Boolean: Normalized<Scalars['Boolean']>,
  ScenarioStatePageInfo: Normalized<ScenarioStatePageInfo>,
  Float: Normalized<Scalars['Float']>,
  ScenarioPageInfo: Normalized<ScenarioPageInfo>,
  Mutation: {},
  AddScenarioInput: Normalized<AddScenarioInput>,
  AddScenarioResult: Normalized<AddScenarioResult>,
  SetScenarioDetailsInput: Normalized<SetScenarioDetailsInput>,
  SetScenarioDetailsResult: Normalized<SetScenarioDetailsResult>,
  SetScenarioDefaultStateInput: Normalized<SetScenarioDefaultStateInput>,
  SetScenarioDefaultStateResult: Normalized<SetScenarioDefaultStateResult>,
  SetScenarioExpirationInput: Normalized<SetScenarioExpirationInput>,
  SetScenarioExpirationResult: Normalized<SetScenarioExpirationResult>,
  DisableScenarioInput: Normalized<DisableScenarioInput>,
  DisableScenarioResult: Normalized<DisableScenarioResult>,
  EnableScenarioInput: Normalized<EnableScenarioInput>,
  EnableScenarioResult: Normalized<EnableScenarioResult>,
  DeleteScenarioInput: Normalized<DeleteScenarioInput>,
  DeleteScenarioResult: Normalized<DeleteScenarioResult>,
  AddScenarioStateInput: Normalized<AddScenarioStateInput>,
  AddStateInput: Normalized<AddStateInput>,
  AddScenarioStateResult: Normalized<AddScenarioStateResult>,
  SetStateDetailsInput: Normalized<SetStateDetailsInput>,
  SetStateDetailsResult: Normalized<SetStateDetailsResult>,
  DeleteStateInput: Normalized<DeleteStateInput>,
  DeleteStateResult: Normalized<DeleteStateResult>,
  AddStateMappingInput: Normalized<AddStateMappingInput>,
  AddMappingInput: Normalized<AddMappingInput>,
  AddStateMappingResult: Normalized<AddStateMappingResult>,
  AddMappingMatcherInput: Normalized<AddMappingMatcherInput>,
  AddMatcherInput: Normalized<AddMatcherInput>,
  AddMethodsMatcherInput: Normalized<AddMethodsMatcherInput>,
  AddPathMatcherInput: Normalized<AddPathMatcherInput>,
  AddBodyMatcherInput: Normalized<AddBodyMatcherInput>,
  AddHeadersMatcherInput: Normalized<AddHeadersMatcherInput>,
  AddHeaderNameValuePairInput: Normalized<AddHeaderNameValuePairInput>,
  AddMappingMatcherResult: Normalized<AddMappingMatcherResult>,
  RemoveMappingMatcherInput: Normalized<RemoveMappingMatcherInput>,
  RemoveMappingMatcherResult: Normalized<RemoveMappingMatcherResult>,
  SetMappingResponseInput: Normalized<SetMappingResponseInput>,
  AddResponseInput: Normalized<AddResponseInput>,
  AddResponseBodyInput: Normalized<AddResponseBodyInput>,
  AddTemplateResponseBodyInput: Normalized<AddTemplateResponseBodyInput>,
  SetMappingResponseResult: Normalized<SetMappingResponseResult>,
  SetMappingTriggerInput: Normalized<SetMappingTriggerInput>,
  AddTriggerInput: Normalized<AddTriggerInput>,
  SetMappingTriggerResult: Normalized<SetMappingTriggerResult>,
  SetMappingPriorityInput: Normalized<SetMappingPriorityInput>,
  SetMappingPriorityResult: Normalized<SetMappingPriorityResult>,
  DeleteMappingInput: Normalized<DeleteMappingInput>,
  DeleteMappingResult: Normalized<DeleteMappingResult>,
  MethodsMatcher: Normalized<MethodsMatcher>,
  PathMatcher: Normalized<PathMatcher>,
  BodyMatcher: Normalized<BodyMatcher>,
  HeadersMatcher: Normalized<HeadersMatcher>,
  HeaderKeyValuePair: Normalized<HeaderKeyValuePair>,
  TemplateResponseBody: Normalized<TemplateResponseBody>,
}>;

export type AddMappingMatcherResultResolvers<ContextType = Context, ParentType extends ResolversParentTypes['AddMappingMatcherResult'] = ResolversParentTypes['AddMappingMatcherResult']> = ResolversObject<{
  mapping?: Resolver<ResolversTypes['Mapping'], ParentType, ContextType>,
}>;

export type AddScenarioResultResolvers<ContextType = Context, ParentType extends ResolversParentTypes['AddScenarioResult'] = ResolversParentTypes['AddScenarioResult']> = ResolversObject<{
  scenario?: Resolver<ResolversTypes['Scenario'], ParentType, ContextType>,
  scenarioEdge?: Resolver<ResolversTypes['ScenarioEdge'], ParentType, ContextType>,
}>;

export type AddScenarioStateResultResolvers<ContextType = Context, ParentType extends ResolversParentTypes['AddScenarioStateResult'] = ResolversParentTypes['AddScenarioStateResult']> = ResolversObject<{
  scenario?: Resolver<ResolversTypes['Scenario'], ParentType, ContextType>,
  state?: Resolver<ResolversTypes['State'], ParentType, ContextType>,
  stateEdge?: Resolver<ResolversTypes['ScenarioStateEdge'], ParentType, ContextType>,
}>;

export type AddStateMappingResultResolvers<ContextType = Context, ParentType extends ResolversParentTypes['AddStateMappingResult'] = ResolversParentTypes['AddStateMappingResult']> = ResolversObject<{
  state?: Resolver<ResolversTypes['State'], ParentType, ContextType>,
  mapping?: Resolver<ResolversTypes['Mapping'], ParentType, ContextType>,
  mappingEdge?: Resolver<ResolversTypes['StateMappingEdge'], ParentType, ContextType>,
}>;

export type BodyMatcherResolvers<ContextType = Context, ParentType extends ResolversParentTypes['BodyMatcher'] = ResolversParentTypes['BodyMatcher']> = ResolversObject<{
  kind?: Resolver<ResolversTypes['MatcherKind'], ParentType, ContextType>,
  body?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  ignoreWhitespace?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>,
  regex?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>,
}>;

export type DeleteMappingResultResolvers<ContextType = Context, ParentType extends ResolversParentTypes['DeleteMappingResult'] = ResolversParentTypes['DeleteMappingResult']> = ResolversObject<{
  mapping?: Resolver<ResolversTypes['Mapping'], ParentType, ContextType>,
  mappingEdge?: Resolver<ResolversTypes['StateMappingEdge'], ParentType, ContextType>,
  state?: Resolver<ResolversTypes['State'], ParentType, ContextType>,
}>;

export type DeleteScenarioResultResolvers<ContextType = Context, ParentType extends ResolversParentTypes['DeleteScenarioResult'] = ResolversParentTypes['DeleteScenarioResult']> = ResolversObject<{
  scenario?: Resolver<ResolversTypes['Scenario'], ParentType, ContextType>,
  scenarioEdge?: Resolver<ResolversTypes['ScenarioEdge'], ParentType, ContextType>,
}>;

export type DeleteStateResultResolvers<ContextType = Context, ParentType extends ResolversParentTypes['DeleteStateResult'] = ResolversParentTypes['DeleteStateResult']> = ResolversObject<{
  state?: Resolver<ResolversTypes['State'], ParentType, ContextType>,
  stateEdge?: Resolver<ResolversTypes['ScenarioStateEdge'], ParentType, ContextType>,
  scenario?: Resolver<ResolversTypes['Scenario'], ParentType, ContextType>,
}>;

export type DisableScenarioResultResolvers<ContextType = Context, ParentType extends ResolversParentTypes['DisableScenarioResult'] = ResolversParentTypes['DisableScenarioResult']> = ResolversObject<{
  scenario?: Resolver<ResolversTypes['Scenario'], ParentType, ContextType>,
}>;

export type EnableScenarioResultResolvers<ContextType = Context, ParentType extends ResolversParentTypes['EnableScenarioResult'] = ResolversParentTypes['EnableScenarioResult']> = ResolversObject<{
  scenario?: Resolver<ResolversTypes['Scenario'], ParentType, ContextType>,
}>;

export type HeaderKeyValuePairResolvers<ContextType = Context, ParentType extends ResolversParentTypes['HeaderKeyValuePair'] = ResolversParentTypes['HeaderKeyValuePair']> = ResolversObject<{
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  value?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
}>;

export type HeadersMatcherResolvers<ContextType = Context, ParentType extends ResolversParentTypes['HeadersMatcher'] = ResolversParentTypes['HeadersMatcher']> = ResolversObject<{
  kind?: Resolver<ResolversTypes['MatcherKind'], ParentType, ContextType>,
  headers?: Resolver<Array<ResolversTypes['HeaderKeyValuePair']>, ParentType, ContextType>,
}>;

export type MappingResolvers<ContextType = Context, ParentType extends ResolversParentTypes['Mapping'] = ResolversParentTypes['Mapping']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>,
  matchers?: Resolver<Array<ResolversTypes['Matcher']>, ParentType, ContextType>,
  response?: Resolver<Maybe<ResolversTypes['Response']>, ParentType, ContextType>,
  trigger?: Resolver<Maybe<ResolversTypes['Trigger']>, ParentType, ContextType>,
  priority?: Resolver<ResolversTypes['Int'], ParentType, ContextType>,
  createdAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  updatedAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
}>;

export type MatcherResolvers<ContextType = Context, ParentType extends ResolversParentTypes['Matcher'] = ResolversParentTypes['Matcher']> = ResolversObject<{
  __resolveType: TypeResolveFn<'MethodsMatcher' | 'PathMatcher' | 'BodyMatcher' | 'HeadersMatcher', ParentType, ContextType>,
  kind?: Resolver<ResolversTypes['MatcherKind'], ParentType, ContextType>,
}>;

export type MethodsMatcherResolvers<ContextType = Context, ParentType extends ResolversParentTypes['MethodsMatcher'] = ResolversParentTypes['MethodsMatcher']> = ResolversObject<{
  kind?: Resolver<ResolversTypes['MatcherKind'], ParentType, ContextType>,
  methods?: Resolver<Array<ResolversTypes['String']>, ParentType, ContextType>,
}>;

export type MutationResolvers<ContextType = Context, ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']> = ResolversObject<{
  addScenario?: Resolver<ResolversTypes['AddScenarioResult'], ParentType, ContextType, RequireFields<MutationAddScenarioArgs, 'input'>>,
  setScenarioDetails?: Resolver<ResolversTypes['SetScenarioDetailsResult'], ParentType, ContextType, RequireFields<MutationSetScenarioDetailsArgs, 'input'>>,
  setScenarioDefaultState?: Resolver<ResolversTypes['SetScenarioDefaultStateResult'], ParentType, ContextType, RequireFields<MutationSetScenarioDefaultStateArgs, 'input'>>,
  setScenarioExpiration?: Resolver<ResolversTypes['SetScenarioExpirationResult'], ParentType, ContextType, RequireFields<MutationSetScenarioExpirationArgs, 'input'>>,
  disableScenario?: Resolver<ResolversTypes['DisableScenarioResult'], ParentType, ContextType, RequireFields<MutationDisableScenarioArgs, 'input'>>,
  enableScenario?: Resolver<ResolversTypes['EnableScenarioResult'], ParentType, ContextType, RequireFields<MutationEnableScenarioArgs, 'input'>>,
  deleteScenario?: Resolver<ResolversTypes['DeleteScenarioResult'], ParentType, ContextType, RequireFields<MutationDeleteScenarioArgs, 'input'>>,
  addScenarioState?: Resolver<ResolversTypes['AddScenarioStateResult'], ParentType, ContextType, RequireFields<MutationAddScenarioStateArgs, 'input'>>,
  setStateDetails?: Resolver<ResolversTypes['SetStateDetailsResult'], ParentType, ContextType, RequireFields<MutationSetStateDetailsArgs, 'input'>>,
  deleteState?: Resolver<ResolversTypes['DeleteStateResult'], ParentType, ContextType, RequireFields<MutationDeleteStateArgs, 'input'>>,
  addStateMapping?: Resolver<ResolversTypes['AddStateMappingResult'], ParentType, ContextType, RequireFields<MutationAddStateMappingArgs, 'input'>>,
  addMappingMatcher?: Resolver<ResolversTypes['AddMappingMatcherResult'], ParentType, ContextType, RequireFields<MutationAddMappingMatcherArgs, 'input'>>,
  removeMappingMatcher?: Resolver<ResolversTypes['RemoveMappingMatcherResult'], ParentType, ContextType, RequireFields<MutationRemoveMappingMatcherArgs, 'input'>>,
  setMappingResponse?: Resolver<ResolversTypes['SetMappingResponseResult'], ParentType, ContextType, RequireFields<MutationSetMappingResponseArgs, 'input'>>,
  setMappingTrigger?: Resolver<ResolversTypes['SetMappingTriggerResult'], ParentType, ContextType, RequireFields<MutationSetMappingTriggerArgs, 'input'>>,
  setMappingPriority?: Resolver<ResolversTypes['SetMappingPriorityResult'], ParentType, ContextType, RequireFields<MutationSetMappingPriorityArgs, 'input'>>,
  deleteMapping?: Resolver<ResolversTypes['DeleteMappingResult'], ParentType, ContextType, RequireFields<MutationDeleteMappingArgs, 'input'>>,
}>;

export type NodeResolvers<ContextType = Context, ParentType extends ResolversParentTypes['Node'] = ResolversParentTypes['Node']> = ResolversObject<{
  __resolveType: TypeResolveFn<'Viewer' | 'Scenario' | 'State' | 'Mapping', ParentType, ContextType>,
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>,
}>;

export type PathMatcherResolvers<ContextType = Context, ParentType extends ResolversParentTypes['PathMatcher'] = ResolversParentTypes['PathMatcher']> = ResolversObject<{
  kind?: Resolver<ResolversTypes['MatcherKind'], ParentType, ContextType>,
  path?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  regex?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>,
}>;

export type QueryResolvers<ContextType = Context, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = ResolversObject<{
  viewer?: Resolver<ResolversTypes['Viewer'], ParentType, ContextType>,
  node?: Resolver<Maybe<ResolversTypes['Node']>, ParentType, ContextType, RequireFields<QueryNodeArgs, 'id'>>,
}>;

export type RemoveMappingMatcherResultResolvers<ContextType = Context, ParentType extends ResolversParentTypes['RemoveMappingMatcherResult'] = ResolversParentTypes['RemoveMappingMatcherResult']> = ResolversObject<{
  mapping?: Resolver<ResolversTypes['Mapping'], ParentType, ContextType>,
}>;

export type ResponseResolvers<ContextType = Context, ParentType extends ResolversParentTypes['Response'] = ResolversParentTypes['Response']> = ResolversObject<{
  body?: Resolver<ResolversTypes['ResponseBody'], ParentType, ContextType>,
}>;

export type ResponseBodyResolvers<ContextType = Context, ParentType extends ResolversParentTypes['ResponseBody'] = ResolversParentTypes['ResponseBody']> = ResolversObject<{
  __resolveType: TypeResolveFn<'TemplateResponseBody', ParentType, ContextType>,
  kind?: Resolver<ResolversTypes['ResponseBodyKind'], ParentType, ContextType>,
}>;

export type ScenarioResolvers<ContextType = Context, ParentType extends ResolversParentTypes['Scenario'] = ResolversParentTypes['Scenario']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>,
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  possibleStates?: Resolver<ResolversTypes['ScenarioStateConnection'], ParentType, ContextType, RequireFields<ScenarioPossibleStatesArgs, 'first'>>,
  currentState?: Resolver<Maybe<ResolversTypes['State']>, ParentType, ContextType>,
  defaultState?: Resolver<Maybe<ResolversTypes['State']>, ParentType, ContextType>,
  expirationDurationSeconds?: Resolver<ResolversTypes['Float'], ParentType, ContextType>,
  disabled?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>,
  createdAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  updatedAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
}>;

export type ScenarioConnectionResolvers<ContextType = Context, ParentType extends ResolversParentTypes['ScenarioConnection'] = ResolversParentTypes['ScenarioConnection']> = ResolversObject<{
  edges?: Resolver<Array<ResolversTypes['ScenarioEdge']>, ParentType, ContextType>,
  pageInfo?: Resolver<ResolversTypes['ScenarioPageInfo'], ParentType, ContextType>,
}>;

export type ScenarioEdgeResolvers<ContextType = Context, ParentType extends ResolversParentTypes['ScenarioEdge'] = ResolversParentTypes['ScenarioEdge']> = ResolversObject<{
  node?: Resolver<ResolversTypes['Scenario'], ParentType, ContextType>,
  cursor?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
}>;

export type ScenarioPageInfoResolvers<ContextType = Context, ParentType extends ResolversParentTypes['ScenarioPageInfo'] = ResolversParentTypes['ScenarioPageInfo']> = ResolversObject<{
  hasNextPage?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>,
  hasPreviousPage?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>,
  startCursor?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  endCursor?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
}>;

export type ScenarioStateConnectionResolvers<ContextType = Context, ParentType extends ResolversParentTypes['ScenarioStateConnection'] = ResolversParentTypes['ScenarioStateConnection']> = ResolversObject<{
  edges?: Resolver<Array<ResolversTypes['ScenarioStateEdge']>, ParentType, ContextType>,
  pageInfo?: Resolver<ResolversTypes['ScenarioStatePageInfo'], ParentType, ContextType>,
}>;

export type ScenarioStateEdgeResolvers<ContextType = Context, ParentType extends ResolversParentTypes['ScenarioStateEdge'] = ResolversParentTypes['ScenarioStateEdge']> = ResolversObject<{
  node?: Resolver<ResolversTypes['State'], ParentType, ContextType>,
  cursor?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
}>;

export type ScenarioStatePageInfoResolvers<ContextType = Context, ParentType extends ResolversParentTypes['ScenarioStatePageInfo'] = ResolversParentTypes['ScenarioStatePageInfo']> = ResolversObject<{
  hasNextPage?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>,
  hasPreviousPage?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>,
  startCursor?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  endCursor?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
}>;

export type SetMappingPriorityResultResolvers<ContextType = Context, ParentType extends ResolversParentTypes['SetMappingPriorityResult'] = ResolversParentTypes['SetMappingPriorityResult']> = ResolversObject<{
  mapping?: Resolver<ResolversTypes['Mapping'], ParentType, ContextType>,
}>;

export type SetMappingResponseResultResolvers<ContextType = Context, ParentType extends ResolversParentTypes['SetMappingResponseResult'] = ResolversParentTypes['SetMappingResponseResult']> = ResolversObject<{
  mapping?: Resolver<ResolversTypes['Mapping'], ParentType, ContextType>,
}>;

export type SetMappingTriggerResultResolvers<ContextType = Context, ParentType extends ResolversParentTypes['SetMappingTriggerResult'] = ResolversParentTypes['SetMappingTriggerResult']> = ResolversObject<{
  mapping?: Resolver<ResolversTypes['Mapping'], ParentType, ContextType>,
}>;

export type SetScenarioDefaultStateResultResolvers<ContextType = Context, ParentType extends ResolversParentTypes['SetScenarioDefaultStateResult'] = ResolversParentTypes['SetScenarioDefaultStateResult']> = ResolversObject<{
  scenario?: Resolver<ResolversTypes['Scenario'], ParentType, ContextType>,
}>;

export type SetScenarioDetailsResultResolvers<ContextType = Context, ParentType extends ResolversParentTypes['SetScenarioDetailsResult'] = ResolversParentTypes['SetScenarioDetailsResult']> = ResolversObject<{
  scenario?: Resolver<ResolversTypes['Scenario'], ParentType, ContextType>,
}>;

export type SetScenarioExpirationResultResolvers<ContextType = Context, ParentType extends ResolversParentTypes['SetScenarioExpirationResult'] = ResolversParentTypes['SetScenarioExpirationResult']> = ResolversObject<{
  scenario?: Resolver<ResolversTypes['Scenario'], ParentType, ContextType>,
}>;

export type SetStateDetailsResultResolvers<ContextType = Context, ParentType extends ResolversParentTypes['SetStateDetailsResult'] = ResolversParentTypes['SetStateDetailsResult']> = ResolversObject<{
  state?: Resolver<ResolversTypes['State'], ParentType, ContextType>,
}>;

export type StateResolvers<ContextType = Context, ParentType extends ResolversParentTypes['State'] = ResolversParentTypes['State']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>,
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  mappings?: Resolver<ResolversTypes['StateMappingConnection'], ParentType, ContextType, RequireFields<StateMappingsArgs, 'first'>>,
  createdAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  updatedAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
}>;

export type StateMappingConnectionResolvers<ContextType = Context, ParentType extends ResolversParentTypes['StateMappingConnection'] = ResolversParentTypes['StateMappingConnection']> = ResolversObject<{
  edges?: Resolver<Array<ResolversTypes['StateMappingEdge']>, ParentType, ContextType>,
  pageInfo?: Resolver<ResolversTypes['StateMappingPageInfo'], ParentType, ContextType>,
}>;

export type StateMappingEdgeResolvers<ContextType = Context, ParentType extends ResolversParentTypes['StateMappingEdge'] = ResolversParentTypes['StateMappingEdge']> = ResolversObject<{
  node?: Resolver<ResolversTypes['Mapping'], ParentType, ContextType>,
  cursor?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
}>;

export type StateMappingPageInfoResolvers<ContextType = Context, ParentType extends ResolversParentTypes['StateMappingPageInfo'] = ResolversParentTypes['StateMappingPageInfo']> = ResolversObject<{
  hasNextPage?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>,
  hasPreviousPage?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>,
  startCursor?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  endCursor?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
}>;

export type TemplateResponseBodyResolvers<ContextType = Context, ParentType extends ResolversParentTypes['TemplateResponseBody'] = ResolversParentTypes['TemplateResponseBody']> = ResolversObject<{
  kind?: Resolver<ResolversTypes['ResponseBodyKind'], ParentType, ContextType>,
  value?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
}>;

export type TriggerResolvers<ContextType = Context, ParentType extends ResolversParentTypes['Trigger'] = ResolversParentTypes['Trigger']> = ResolversObject<{
  targetState?: Resolver<ResolversTypes['State'], ParentType, ContextType>,
}>;

export type ViewerResolvers<ContextType = Context, ParentType extends ResolversParentTypes['Viewer'] = ResolversParentTypes['Viewer']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>,
  scenarios?: Resolver<ResolversTypes['ScenarioConnection'], ParentType, ContextType, RequireFields<ViewerScenariosArgs, 'first'>>,
  scenario?: Resolver<Maybe<ResolversTypes['Scenario']>, ParentType, ContextType, RequireFields<ViewerScenarioArgs, 'id'>>,
  state?: Resolver<Maybe<ResolversTypes['State']>, ParentType, ContextType, RequireFields<ViewerStateArgs, 'id'>>,
  mapping?: Resolver<Maybe<ResolversTypes['Mapping']>, ParentType, ContextType, RequireFields<ViewerMappingArgs, 'id'>>,
}>;

export type Resolvers<ContextType = Context> = ResolversObject<{
  AddMappingMatcherResult?: AddMappingMatcherResultResolvers<ContextType>,
  AddScenarioResult?: AddScenarioResultResolvers<ContextType>,
  AddScenarioStateResult?: AddScenarioStateResultResolvers<ContextType>,
  AddStateMappingResult?: AddStateMappingResultResolvers<ContextType>,
  BodyMatcher?: BodyMatcherResolvers<ContextType>,
  DeleteMappingResult?: DeleteMappingResultResolvers<ContextType>,
  DeleteScenarioResult?: DeleteScenarioResultResolvers<ContextType>,
  DeleteStateResult?: DeleteStateResultResolvers<ContextType>,
  DisableScenarioResult?: DisableScenarioResultResolvers<ContextType>,
  EnableScenarioResult?: EnableScenarioResultResolvers<ContextType>,
  HeaderKeyValuePair?: HeaderKeyValuePairResolvers<ContextType>,
  HeadersMatcher?: HeadersMatcherResolvers<ContextType>,
  Mapping?: MappingResolvers<ContextType>,
  Matcher?: MatcherResolvers,
  MethodsMatcher?: MethodsMatcherResolvers<ContextType>,
  Mutation?: MutationResolvers<ContextType>,
  Node?: NodeResolvers,
  PathMatcher?: PathMatcherResolvers<ContextType>,
  Query?: QueryResolvers<ContextType>,
  RemoveMappingMatcherResult?: RemoveMappingMatcherResultResolvers<ContextType>,
  Response?: ResponseResolvers<ContextType>,
  ResponseBody?: ResponseBodyResolvers,
  Scenario?: ScenarioResolvers<ContextType>,
  ScenarioConnection?: ScenarioConnectionResolvers<ContextType>,
  ScenarioEdge?: ScenarioEdgeResolvers<ContextType>,
  ScenarioPageInfo?: ScenarioPageInfoResolvers<ContextType>,
  ScenarioStateConnection?: ScenarioStateConnectionResolvers<ContextType>,
  ScenarioStateEdge?: ScenarioStateEdgeResolvers<ContextType>,
  ScenarioStatePageInfo?: ScenarioStatePageInfoResolvers<ContextType>,
  SetMappingPriorityResult?: SetMappingPriorityResultResolvers<ContextType>,
  SetMappingResponseResult?: SetMappingResponseResultResolvers<ContextType>,
  SetMappingTriggerResult?: SetMappingTriggerResultResolvers<ContextType>,
  SetScenarioDefaultStateResult?: SetScenarioDefaultStateResultResolvers<ContextType>,
  SetScenarioDetailsResult?: SetScenarioDetailsResultResolvers<ContextType>,
  SetScenarioExpirationResult?: SetScenarioExpirationResultResolvers<ContextType>,
  SetStateDetailsResult?: SetStateDetailsResultResolvers<ContextType>,
  State?: StateResolvers<ContextType>,
  StateMappingConnection?: StateMappingConnectionResolvers<ContextType>,
  StateMappingEdge?: StateMappingEdgeResolvers<ContextType>,
  StateMappingPageInfo?: StateMappingPageInfoResolvers<ContextType>,
  TemplateResponseBody?: TemplateResponseBodyResolvers<ContextType>,
  Trigger?: TriggerResolvers<ContextType>,
  Viewer?: ViewerResolvers<ContextType>,
}>;


/**
 * @deprecated
 * Use "Resolvers" root object instead. If you wish to get "IResolvers", add "typesPrefix: I" to your config.
*/
export type IResolvers<ContextType = Context> = Resolvers<ContextType>;
