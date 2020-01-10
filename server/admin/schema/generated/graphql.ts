import { GraphQLResolveInfo, GraphQLScalarType, GraphQLScalarTypeConfig } from 'graphql';
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
  Upload: any,
};


export enum CacheControlScope {
  Public = 'PUBLIC',
  Private = 'PRIVATE'
}

export type CreateLiteralMatcherInput = {
  value: Scalars['String'],
};

export type CreateMappingInput = {
  pathMatch?: Maybe<CreateMatcherInput>,
};

export type CreateMatcherInput = {
  literal?: Maybe<CreateLiteralMatcherInput>,
};

export type CreateResponseInput = {
  body: Scalars['String'],
};

export type CreateScenarioInput = {
  name: Scalars['String'],
};

export type CreateScenarioResult = {
   __typename?: 'CreateScenarioResult',
  scenario: Scenario,
  scenarioEdge: ScenarioEdge,
};

export type CreateScenarioStateInput = {
  scenarioId: Scalars['ID'],
  state: CreateStateInput,
};

export type CreateScenarioStateResult = {
   __typename?: 'CreateScenarioStateResult',
  scenario: Scenario,
  state: State,
  stateEdge: ScenarioStateEdge,
};

export type CreateStateInput = {
  name: Scalars['String'],
};

export type CreateStateMappingInput = {
  stateId: Scalars['ID'],
  mapping: CreateMappingInput,
};

export type CreateStateMappingResult = {
   __typename?: 'CreateStateMappingResult',
  state: State,
  mapping: Mapping,
  mappingEdge: StateMappingEdge,
};

export type CreateTriggerInput = {
  targetState: Scalars['ID'],
};

export type DeleteScenarioInput = {
  scenarioId: Scalars['ID'],
};

export type DeleteScenarioResult = {
   __typename?: 'DeleteScenarioResult',
  scenario: Scenario,
  scenarioEdge: ScenarioEdge,
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

export type LiteralMatcher = Node & Matcher & {
   __typename?: 'LiteralMatcher',
  id: Scalars['ID'],
  value: Scalars['String'],
};

export type Mapping = Node & {
   __typename?: 'Mapping',
  id: Scalars['ID'],
  pathMatch?: Maybe<Matcher>,
  response?: Maybe<Response>,
  trigger?: Maybe<Trigger>,
  createdAt: Scalars['String'],
  updatedAt: Scalars['String'],
};

export type Matcher = {
  id: Scalars['ID'],
};

export type Mutation = {
   __typename?: 'Mutation',
  createScenario: CreateScenarioResult,
  setScenarioDefaultState: SetScenarioDefaultStateResult,
  setScenarioExpiration: SetScenarioExpirationResult,
  disableScenario: DisableScenarioResult,
  enableScenario: EnableScenarioResult,
  deleteScenario: DeleteScenarioResult,
  createScenarioState: CreateScenarioStateResult,
  createStateMapping: CreateStateMappingResult,
  setMappingResponse: SetMappingResponseResult,
  setMappingTrigger: SetMappingTriggerResult,
};


export type MutationCreateScenarioArgs = {
  input: CreateScenarioInput
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


export type MutationCreateScenarioStateArgs = {
  input: CreateScenarioStateInput
};


export type MutationCreateStateMappingArgs = {
  input: CreateStateMappingInput
};


export type MutationSetMappingResponseArgs = {
  input: SetMappingResponseInput
};


export type MutationSetMappingTriggerArgs = {
  input: SetMappingTriggerInput
};

export type Node = {
  id: Scalars['ID'],
};

export type Query = {
   __typename?: 'Query',
  scenarios: ScenarioConnection,
};


export type QueryScenariosArgs = {
  first?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>
};

export type Response = Node & {
   __typename?: 'Response',
  id: Scalars['ID'],
  body?: Maybe<Scalars['String']>,
  createdAt: Scalars['String'],
  updatedAt: Scalars['String'],
};

export type Scenario = Node & {
   __typename?: 'Scenario',
  id: Scalars['ID'],
  name: Scalars['String'],
  possibleStates: Array<State>,
  currentState: State,
  defaultState: State,
  expirationDurationSeconds: Scalars['Float'],
  disabled: Scalars['Boolean'],
  createdAt: Scalars['String'],
  updatedAt: Scalars['String'],
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

export type SetMappingResponseInput = {
  mappingId: Scalars['ID'],
  response: CreateResponseInput,
};

export type SetMappingResponseResult = {
   __typename?: 'SetMappingResponseResult',
  mapping: Mapping,
};

export type SetMappingTriggerInput = {
  mappingId: Scalars['ID'],
  trigger: CreateTriggerInput,
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

export type SetScenarioExpirationInput = {
  scenarioId: Scalars['ID'],
  expirationDurationSeconds: Scalars['Float'],
};

export type SetScenarioExpirationResult = {
   __typename?: 'SetScenarioExpirationResult',
  scenario: Scenario,
};

export type State = Node & {
   __typename?: 'State',
  id: Scalars['ID'],
  name: Scalars['String'],
  mappings: StateMappingConnection,
  createdAt: Scalars['String'],
  updatedAt: Scalars['String'],
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

export type Trigger = Node & {
   __typename?: 'Trigger',
  id: Scalars['ID'],
  targetState: Scalars['ID'],
  createdAt: Scalars['String'],
  updatedAt: Scalars['String'],
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
  Int: ResolverTypeWrapper<Normalized<Scalars['Int']>>,
  String: ResolverTypeWrapper<Normalized<Scalars['String']>>,
  ScenarioConnection: ResolverTypeWrapper<Normalized<ScenarioConnection>>,
  ScenarioEdge: ResolverTypeWrapper<Normalized<ScenarioEdge>>,
  Scenario: ResolverTypeWrapper<Normalized<Scenario>>,
  Node: ResolverTypeWrapper<Normalized<Node>>,
  ID: ResolverTypeWrapper<Normalized<Scalars['ID']>>,
  State: ResolverTypeWrapper<Normalized<State>>,
  StateMappingConnection: ResolverTypeWrapper<Normalized<StateMappingConnection>>,
  StateMappingEdge: ResolverTypeWrapper<Normalized<StateMappingEdge>>,
  Mapping: ResolverTypeWrapper<Normalized<Mapping>>,
  Matcher: ResolverTypeWrapper<Normalized<Matcher>>,
  Response: ResolverTypeWrapper<Normalized<Response>>,
  Trigger: ResolverTypeWrapper<Normalized<Trigger>>,
  StateMappingPageInfo: ResolverTypeWrapper<Normalized<StateMappingPageInfo>>,
  Boolean: ResolverTypeWrapper<Normalized<Scalars['Boolean']>>,
  Float: ResolverTypeWrapper<Normalized<Scalars['Float']>>,
  ScenarioPageInfo: ResolverTypeWrapper<Normalized<ScenarioPageInfo>>,
  Mutation: ResolverTypeWrapper<{}>,
  CreateScenarioInput: ResolverTypeWrapper<Normalized<CreateScenarioInput>>,
  CreateScenarioResult: ResolverTypeWrapper<Normalized<CreateScenarioResult>>,
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
  CreateScenarioStateInput: ResolverTypeWrapper<Normalized<CreateScenarioStateInput>>,
  CreateStateInput: ResolverTypeWrapper<Normalized<CreateStateInput>>,
  CreateScenarioStateResult: ResolverTypeWrapper<Normalized<CreateScenarioStateResult>>,
  ScenarioStateEdge: ResolverTypeWrapper<Normalized<ScenarioStateEdge>>,
  CreateStateMappingInput: ResolverTypeWrapper<Normalized<CreateStateMappingInput>>,
  CreateMappingInput: ResolverTypeWrapper<Normalized<CreateMappingInput>>,
  CreateMatcherInput: ResolverTypeWrapper<Normalized<CreateMatcherInput>>,
  CreateLiteralMatcherInput: ResolverTypeWrapper<Normalized<CreateLiteralMatcherInput>>,
  CreateStateMappingResult: ResolverTypeWrapper<Normalized<CreateStateMappingResult>>,
  SetMappingResponseInput: ResolverTypeWrapper<Normalized<SetMappingResponseInput>>,
  CreateResponseInput: ResolverTypeWrapper<Normalized<CreateResponseInput>>,
  SetMappingResponseResult: ResolverTypeWrapper<Normalized<SetMappingResponseResult>>,
  SetMappingTriggerInput: ResolverTypeWrapper<Normalized<SetMappingTriggerInput>>,
  CreateTriggerInput: ResolverTypeWrapper<Normalized<CreateTriggerInput>>,
  SetMappingTriggerResult: ResolverTypeWrapper<Normalized<SetMappingTriggerResult>>,
  CacheControlScope: ResolverTypeWrapper<Normalized<CacheControlScope>>,
  LiteralMatcher: ResolverTypeWrapper<Normalized<LiteralMatcher>>,
  ScenarioStateConnection: ResolverTypeWrapper<Normalized<ScenarioStateConnection>>,
  ScenarioStatePageInfo: ResolverTypeWrapper<Normalized<ScenarioStatePageInfo>>,
  Upload: ResolverTypeWrapper<Normalized<Scalars['Upload']>>,
}>;

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = ResolversObject<{
  Query: {},
  Int: Normalized<Scalars['Int']>,
  String: Normalized<Scalars['String']>,
  ScenarioConnection: Normalized<ScenarioConnection>,
  ScenarioEdge: Normalized<ScenarioEdge>,
  Scenario: Normalized<Scenario>,
  Node: Normalized<Node>,
  ID: Normalized<Scalars['ID']>,
  State: Normalized<State>,
  StateMappingConnection: Normalized<StateMappingConnection>,
  StateMappingEdge: Normalized<StateMappingEdge>,
  Mapping: Normalized<Mapping>,
  Matcher: Normalized<Matcher>,
  Response: Normalized<Response>,
  Trigger: Normalized<Trigger>,
  StateMappingPageInfo: Normalized<StateMappingPageInfo>,
  Boolean: Normalized<Scalars['Boolean']>,
  Float: Normalized<Scalars['Float']>,
  ScenarioPageInfo: Normalized<ScenarioPageInfo>,
  Mutation: {},
  CreateScenarioInput: Normalized<CreateScenarioInput>,
  CreateScenarioResult: Normalized<CreateScenarioResult>,
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
  CreateScenarioStateInput: Normalized<CreateScenarioStateInput>,
  CreateStateInput: Normalized<CreateStateInput>,
  CreateScenarioStateResult: Normalized<CreateScenarioStateResult>,
  ScenarioStateEdge: Normalized<ScenarioStateEdge>,
  CreateStateMappingInput: Normalized<CreateStateMappingInput>,
  CreateMappingInput: Normalized<CreateMappingInput>,
  CreateMatcherInput: Normalized<CreateMatcherInput>,
  CreateLiteralMatcherInput: Normalized<CreateLiteralMatcherInput>,
  CreateStateMappingResult: Normalized<CreateStateMappingResult>,
  SetMappingResponseInput: Normalized<SetMappingResponseInput>,
  CreateResponseInput: Normalized<CreateResponseInput>,
  SetMappingResponseResult: Normalized<SetMappingResponseResult>,
  SetMappingTriggerInput: Normalized<SetMappingTriggerInput>,
  CreateTriggerInput: Normalized<CreateTriggerInput>,
  SetMappingTriggerResult: Normalized<SetMappingTriggerResult>,
  CacheControlScope: Normalized<CacheControlScope>,
  LiteralMatcher: Normalized<LiteralMatcher>,
  ScenarioStateConnection: Normalized<ScenarioStateConnection>,
  ScenarioStatePageInfo: Normalized<ScenarioStatePageInfo>,
  Upload: Normalized<Scalars['Upload']>,
}>;

export type CacheControlDirectiveResolver<Result, Parent, ContextType = Context, Args = {   maxAge?: Maybe<Maybe<Scalars['Int']>>,
  scope?: Maybe<Maybe<CacheControlScope>> }> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export type CreateScenarioResultResolvers<ContextType = Context, ParentType extends ResolversParentTypes['CreateScenarioResult'] = ResolversParentTypes['CreateScenarioResult']> = ResolversObject<{
  scenario?: Resolver<ResolversTypes['Scenario'], ParentType, ContextType>,
  scenarioEdge?: Resolver<ResolversTypes['ScenarioEdge'], ParentType, ContextType>,
}>;

export type CreateScenarioStateResultResolvers<ContextType = Context, ParentType extends ResolversParentTypes['CreateScenarioStateResult'] = ResolversParentTypes['CreateScenarioStateResult']> = ResolversObject<{
  scenario?: Resolver<ResolversTypes['Scenario'], ParentType, ContextType>,
  state?: Resolver<ResolversTypes['State'], ParentType, ContextType>,
  stateEdge?: Resolver<ResolversTypes['ScenarioStateEdge'], ParentType, ContextType>,
}>;

export type CreateStateMappingResultResolvers<ContextType = Context, ParentType extends ResolversParentTypes['CreateStateMappingResult'] = ResolversParentTypes['CreateStateMappingResult']> = ResolversObject<{
  state?: Resolver<ResolversTypes['State'], ParentType, ContextType>,
  mapping?: Resolver<ResolversTypes['Mapping'], ParentType, ContextType>,
  mappingEdge?: Resolver<ResolversTypes['StateMappingEdge'], ParentType, ContextType>,
}>;

export type DeleteScenarioResultResolvers<ContextType = Context, ParentType extends ResolversParentTypes['DeleteScenarioResult'] = ResolversParentTypes['DeleteScenarioResult']> = ResolversObject<{
  scenario?: Resolver<ResolversTypes['Scenario'], ParentType, ContextType>,
  scenarioEdge?: Resolver<ResolversTypes['ScenarioEdge'], ParentType, ContextType>,
}>;

export type DisableScenarioResultResolvers<ContextType = Context, ParentType extends ResolversParentTypes['DisableScenarioResult'] = ResolversParentTypes['DisableScenarioResult']> = ResolversObject<{
  scenario?: Resolver<ResolversTypes['Scenario'], ParentType, ContextType>,
}>;

export type EnableScenarioResultResolvers<ContextType = Context, ParentType extends ResolversParentTypes['EnableScenarioResult'] = ResolversParentTypes['EnableScenarioResult']> = ResolversObject<{
  scenario?: Resolver<ResolversTypes['Scenario'], ParentType, ContextType>,
}>;

export type LiteralMatcherResolvers<ContextType = Context, ParentType extends ResolversParentTypes['LiteralMatcher'] = ResolversParentTypes['LiteralMatcher']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>,
  value?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
}>;

export type MappingResolvers<ContextType = Context, ParentType extends ResolversParentTypes['Mapping'] = ResolversParentTypes['Mapping']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>,
  pathMatch?: Resolver<Maybe<ResolversTypes['Matcher']>, ParentType, ContextType>,
  response?: Resolver<Maybe<ResolversTypes['Response']>, ParentType, ContextType>,
  trigger?: Resolver<Maybe<ResolversTypes['Trigger']>, ParentType, ContextType>,
  createdAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  updatedAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
}>;

export type MatcherResolvers<ContextType = Context, ParentType extends ResolversParentTypes['Matcher'] = ResolversParentTypes['Matcher']> = ResolversObject<{
  __resolveType: TypeResolveFn<'LiteralMatcher', ParentType, ContextType>,
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>,
}>;

export type MutationResolvers<ContextType = Context, ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']> = ResolversObject<{
  createScenario?: Resolver<ResolversTypes['CreateScenarioResult'], ParentType, ContextType, RequireFields<MutationCreateScenarioArgs, 'input'>>,
  setScenarioDefaultState?: Resolver<ResolversTypes['SetScenarioDefaultStateResult'], ParentType, ContextType, RequireFields<MutationSetScenarioDefaultStateArgs, 'input'>>,
  setScenarioExpiration?: Resolver<ResolversTypes['SetScenarioExpirationResult'], ParentType, ContextType, RequireFields<MutationSetScenarioExpirationArgs, 'input'>>,
  disableScenario?: Resolver<ResolversTypes['DisableScenarioResult'], ParentType, ContextType, RequireFields<MutationDisableScenarioArgs, 'input'>>,
  enableScenario?: Resolver<ResolversTypes['EnableScenarioResult'], ParentType, ContextType, RequireFields<MutationEnableScenarioArgs, 'input'>>,
  deleteScenario?: Resolver<ResolversTypes['DeleteScenarioResult'], ParentType, ContextType, RequireFields<MutationDeleteScenarioArgs, 'input'>>,
  createScenarioState?: Resolver<ResolversTypes['CreateScenarioStateResult'], ParentType, ContextType, RequireFields<MutationCreateScenarioStateArgs, 'input'>>,
  createStateMapping?: Resolver<ResolversTypes['CreateStateMappingResult'], ParentType, ContextType, RequireFields<MutationCreateStateMappingArgs, 'input'>>,
  setMappingResponse?: Resolver<ResolversTypes['SetMappingResponseResult'], ParentType, ContextType, RequireFields<MutationSetMappingResponseArgs, 'input'>>,
  setMappingTrigger?: Resolver<ResolversTypes['SetMappingTriggerResult'], ParentType, ContextType, RequireFields<MutationSetMappingTriggerArgs, 'input'>>,
}>;

export type NodeResolvers<ContextType = Context, ParentType extends ResolversParentTypes['Node'] = ResolversParentTypes['Node']> = ResolversObject<{
  __resolveType: TypeResolveFn<'Scenario' | 'State' | 'Mapping' | 'Response' | 'Trigger' | 'LiteralMatcher', ParentType, ContextType>,
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>,
}>;

export type QueryResolvers<ContextType = Context, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = ResolversObject<{
  scenarios?: Resolver<ResolversTypes['ScenarioConnection'], ParentType, ContextType, RequireFields<QueryScenariosArgs, 'first'>>,
}>;

export type ResponseResolvers<ContextType = Context, ParentType extends ResolversParentTypes['Response'] = ResolversParentTypes['Response']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>,
  body?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  createdAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  updatedAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
}>;

export type ScenarioResolvers<ContextType = Context, ParentType extends ResolversParentTypes['Scenario'] = ResolversParentTypes['Scenario']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>,
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  possibleStates?: Resolver<Array<ResolversTypes['State']>, ParentType, ContextType>,
  currentState?: Resolver<ResolversTypes['State'], ParentType, ContextType>,
  defaultState?: Resolver<ResolversTypes['State'], ParentType, ContextType>,
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

export type SetMappingResponseResultResolvers<ContextType = Context, ParentType extends ResolversParentTypes['SetMappingResponseResult'] = ResolversParentTypes['SetMappingResponseResult']> = ResolversObject<{
  mapping?: Resolver<ResolversTypes['Mapping'], ParentType, ContextType>,
}>;

export type SetMappingTriggerResultResolvers<ContextType = Context, ParentType extends ResolversParentTypes['SetMappingTriggerResult'] = ResolversParentTypes['SetMappingTriggerResult']> = ResolversObject<{
  mapping?: Resolver<ResolversTypes['Mapping'], ParentType, ContextType>,
}>;

export type SetScenarioDefaultStateResultResolvers<ContextType = Context, ParentType extends ResolversParentTypes['SetScenarioDefaultStateResult'] = ResolversParentTypes['SetScenarioDefaultStateResult']> = ResolversObject<{
  scenario?: Resolver<ResolversTypes['Scenario'], ParentType, ContextType>,
}>;

export type SetScenarioExpirationResultResolvers<ContextType = Context, ParentType extends ResolversParentTypes['SetScenarioExpirationResult'] = ResolversParentTypes['SetScenarioExpirationResult']> = ResolversObject<{
  scenario?: Resolver<ResolversTypes['Scenario'], ParentType, ContextType>,
}>;

export type StateResolvers<ContextType = Context, ParentType extends ResolversParentTypes['State'] = ResolversParentTypes['State']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>,
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  mappings?: Resolver<ResolversTypes['StateMappingConnection'], ParentType, ContextType>,
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

export type TriggerResolvers<ContextType = Context, ParentType extends ResolversParentTypes['Trigger'] = ResolversParentTypes['Trigger']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>,
  targetState?: Resolver<ResolversTypes['ID'], ParentType, ContextType>,
  createdAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  updatedAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
}>;

export interface UploadScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['Upload'], any> {
  name: 'Upload'
}

export type Resolvers<ContextType = Context> = ResolversObject<{
  CreateScenarioResult?: CreateScenarioResultResolvers<ContextType>,
  CreateScenarioStateResult?: CreateScenarioStateResultResolvers<ContextType>,
  CreateStateMappingResult?: CreateStateMappingResultResolvers<ContextType>,
  DeleteScenarioResult?: DeleteScenarioResultResolvers<ContextType>,
  DisableScenarioResult?: DisableScenarioResultResolvers<ContextType>,
  EnableScenarioResult?: EnableScenarioResultResolvers<ContextType>,
  LiteralMatcher?: LiteralMatcherResolvers<ContextType>,
  Mapping?: MappingResolvers<ContextType>,
  Matcher?: MatcherResolvers,
  Mutation?: MutationResolvers<ContextType>,
  Node?: NodeResolvers,
  Query?: QueryResolvers<ContextType>,
  Response?: ResponseResolvers<ContextType>,
  Scenario?: ScenarioResolvers<ContextType>,
  ScenarioConnection?: ScenarioConnectionResolvers<ContextType>,
  ScenarioEdge?: ScenarioEdgeResolvers<ContextType>,
  ScenarioPageInfo?: ScenarioPageInfoResolvers<ContextType>,
  ScenarioStateConnection?: ScenarioStateConnectionResolvers<ContextType>,
  ScenarioStateEdge?: ScenarioStateEdgeResolvers<ContextType>,
  ScenarioStatePageInfo?: ScenarioStatePageInfoResolvers<ContextType>,
  SetMappingResponseResult?: SetMappingResponseResultResolvers<ContextType>,
  SetMappingTriggerResult?: SetMappingTriggerResultResolvers<ContextType>,
  SetScenarioDefaultStateResult?: SetScenarioDefaultStateResultResolvers<ContextType>,
  SetScenarioExpirationResult?: SetScenarioExpirationResultResolvers<ContextType>,
  State?: StateResolvers<ContextType>,
  StateMappingConnection?: StateMappingConnectionResolvers<ContextType>,
  StateMappingEdge?: StateMappingEdgeResolvers<ContextType>,
  StateMappingPageInfo?: StateMappingPageInfoResolvers<ContextType>,
  Trigger?: TriggerResolvers<ContextType>,
  Upload?: GraphQLScalarType,
}>;


/**
 * @deprecated
 * Use "Resolvers" root object instead. If you wish to get "IResolvers", add "typesPrefix: I" to your config.
*/
export type IResolvers<ContextType = Context> = Resolvers<ContextType>;
export type DirectiveResolvers<ContextType = Context> = ResolversObject<{
  cacheControl?: CacheControlDirectiveResolver<any, any, ContextType>,
}>;


/**
* @deprecated
* Use "DirectiveResolvers" root object instead. If you wish to get "IDirectiveResolvers", add "typesPrefix: I" to your config.
*/
export type IDirectiveResolvers<ContextType = Context> = DirectiveResolvers<ContextType>;