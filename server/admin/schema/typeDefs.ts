import { gql } from 'apollo-server-express';

export default gql`
  interface Node {
    id: ID!
  }

  type Query {
    scenarios(first: Int = 10, after: String): ScenarioConnection!
  }

  type ScenarioConnection {
    edges: [ScenarioEdge!]!
    pageInfo: ScenarioPageInfo!
  }

  type ScenarioEdge {
    node: Scenario!
    cursor: String!
  }

  type ScenarioPageInfo {
    hasNextPage: Boolean!
    hasPreviousPage: Boolean!
    startCursor: String
    endCursor: String
  }

  type Scenario implements Node {
    id: ID!
    """
    Friendly name to quickly identify the purpose of the scenario
    """
    name: String!
    """
    List of possible states the scenario can be in. States are exclusive.
    """
    possibleStates: [State!]!
    """
    The currently valid state of this scenario.
    """
    currentState: State!
    """
    The default state is selected on simulator startup and will be reverted to
    automatically if expirationDurationSeconds is used.
    """
    defaultState: State!
    """
    After the specified number of seconds, the scenario will revert to the default
    state. If 0, the scenario will never revert. For 0 expiration values, ensure
    your state machine is cyclical so that the scenario does not enter an irreversible
    state, if so desired.
    """
    expirationDurationSeconds: Float!
    """
    If disabled, no mappings related to scenario states will be tested for any incoming
    requests.
    """
    disabled: Boolean!
    """
    UTC formatted string
    """
    createdAt: String!
    """
    UTC formatted string
    """
    updatedAt: String!
  }

  type ScenarioStateConnection {
    edges: [ScenarioStateEdge!]!
    pageInfo: ScenarioStatePageInfo!
  }

  type ScenarioStateEdge {
    node: State!
    cursor: String!
  }

  type ScenarioStatePageInfo {
    hasNextPage: Boolean!
    hasPreviousPage: Boolean!
    startCursor: String
    endCursor: String
  }

  type State implements Node {
    id: ID!
    name: String!
    mappings: StateMappingConnection!
    """
    UTC formatted string
    """
    createdAt: String!
    """
    UTC formatted string
    """
    updatedAt: String!
  }

  type StateMappingConnection {
    edges: [StateMappingEdge!]!
    pageInfo: StateMappingPageInfo!
  }

  type StateMappingEdge {
    node: Mapping!
    cursor: String!
  }

  type StateMappingPageInfo {
    hasNextPage: Boolean!
    hasPreviousPage: Boolean!
    startCursor: String
    endCursor: String
  }

  type Mapping implements Node {
    id: ID!
    pathMatch: Matcher
    response: Response
    trigger: Trigger
    """
    UTC formatted string
    """
    createdAt: String!
    """
    UTC formatted string
    """
    updatedAt: String!
  }

  interface Matcher {
    id: ID!
  }

  type LiteralMatcher implements Node & Matcher {
    id: ID!
    value: String!
  }

  type Response implements Node {
    id: ID!
    body: String
    """
    UTC formatted string
    """
    createdAt: String!
    """
    UTC formatted string
    """
    updatedAt: String!
  }

  type Trigger implements Node {
    id: ID!
    targetState: ID!
    """
    UTC formatted string
    """
    createdAt: String!
    """
    UTC formatted string
    """
    updatedAt: String!
  }

  type Mutation {
    """
    Creates a new, empty scenario
    """
    createScenario(input: CreateScenarioInput!): CreateScenarioResult!
    """
    Changes the default state of a scenario, which it will return to
    upon expiration or when the service initializes on startup
    """
    setScenarioDefaultState(
      input: SetScenarioDefaultStateInput!
    ): SetScenarioDefaultStateResult!
    """
    Changes the expiration time of a scenario, at which point it will
    reset back to its default state
    """
    setScenarioExpiration(
      input: SetScenarioExpirationInput!
    ): SetScenarioExpirationResult!
    """
    Removes the scenario from consideration for future simulated requests. Idempotent.
    """
    disableScenario(input: DisableScenarioInput!): DisableScenarioResult!
    """
    Enables the scenario for consideration for future simulated requests. Idempotent.
    """
    enableScenario(input: EnableScenarioInput!): EnableScenarioResult!
    """
    Deletes a particular scenario
    """
    deleteScenario(input: DeleteScenarioInput!): DeleteScenarioResult!
    """
    Adds a state to a scenario. Every scenario has a default "Initial" state
    """
    createScenarioState(
      input: CreateScenarioStateInput!
    ): CreateScenarioStateResult!
    """
    Adds a request mapping to a scenario state
    """
    createStateMapping(
      input: CreateStateMappingInput!
    ): CreateStateMappingResult!
    """
    Configures a mapping with a simulated response to send back to the client
    """
    setMappingResponse(
      input: SetMappingResponseInput!
    ): SetMappingResponseResult!
    """
    Sets a trigger to change scenario state on a particular request mapping. When
    the request mapping is executed, the trigger will transition the parent scenario
    into the target state
    """
    setMappingTrigger(input: SetMappingTriggerInput!): SetMappingTriggerResult!
  }

  input CreateScenarioInput {
    name: String!
  }

  type CreateScenarioResult {
    scenario: Scenario!
    scenarioEdge: ScenarioEdge!
  }

  input SetScenarioDefaultStateInput {
    scenarioId: ID!
    stateId: ID!
  }

  type SetScenarioDefaultStateResult {
    scenario: Scenario!
  }

  input SetScenarioExpirationInput {
    scenarioId: ID!
    expirationDurationSeconds: Float!
  }

  type SetScenarioExpirationResult {
    scenario: Scenario!
  }

  input DisableScenarioInput {
    scenarioId: ID!
  }

  type DisableScenarioResult {
    scenario: Scenario!
  }

  input EnableScenarioInput {
    scenarioId: ID!
  }

  type EnableScenarioResult {
    scenario: Scenario!
  }

  input DeleteScenarioInput {
    scenarioId: ID!
  }

  type DeleteScenarioResult {
    scenario: Scenario!
    scenarioEdge: ScenarioEdge!
  }

  input CreateScenarioStateInput {
    scenarioId: ID!
    state: CreateStateInput!
  }

  input CreateStateInput {
    name: String!
  }

  type CreateScenarioStateResult {
    scenario: Scenario!
    state: State!
    stateEdge: ScenarioStateEdge!
  }

  input CreateStateMappingInput {
    stateId: ID!
    mapping: CreateMappingInput!
  }

  input CreateMappingInput {
    pathMatch: CreateMatcherInput
  }

  """
  All fields are exclusive; choose one
  """
  input CreateMatcherInput {
    literal: CreateLiteralMatcherInput
  }

  input CreateLiteralMatcherInput {
    value: String!
  }

  type CreateStateMappingResult {
    state: State!
    mapping: Mapping!
    mappingEdge: StateMappingEdge!
  }

  input SetMappingResponseInput {
    mappingId: ID!
    response: CreateResponseInput!
  }

  input CreateResponseInput {
    body: String!
  }

  type SetMappingResponseResult {
    mapping: Mapping!
  }

  input SetMappingTriggerInput {
    mappingId: ID!
    trigger: CreateTriggerInput!
  }

  input CreateTriggerInput {
    targetState: ID!
  }

  type SetMappingTriggerResult {
    mapping: Mapping!
  }
`;
