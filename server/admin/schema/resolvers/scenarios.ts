import { Resolvers } from '../generated/graphql';
import { toCursor } from '../../../storage/cursors';
import { relayConnection } from './relay';

const resolvers: Resolvers = {
  Query: {
    scenarios: async (parent, { first, after }, ctx) => {
      const {
        scenarios,
        hasNextPage,
        hasPreviousPage,
      } = await ctx.storage.getScenarios({ first, after });

      const data = relayConnection(scenarios, hasNextPage, hasPreviousPage);
      return data;
    },
  },
  Mutation: {
    createScenario: async (parent, { input }, ctx) => {
      const scenario = await ctx.storage.createScenario({ data: input });

      return {
        scenario,
        scenarioEdge: {
          node: scenario,
          cursor: toCursor(scenario.id),
        },
      };
    },
    setScenarioDetails: async (parent, { input }, ctx) => {
      const scenario = await ctx.storage.updateScenario({
        id: input.scenarioId,
        data: {
          name: input.name,
        },
      });

      return {
        scenario,
      };
    },
    setScenarioDefaultState: async (
      parent,
      { input: { scenarioId, stateId } },
      ctx,
    ) => {
      const scenario = await ctx.storage.updateScenario({
        id: scenarioId,
        data: {
          defaultState: stateId,
        },
      });

      return {
        scenario,
      };
    },
    setScenarioExpiration: async (
      parent,
      { input: { scenarioId, expirationDurationSeconds } },
      ctx,
    ) => {
      const scenario = await ctx.storage.updateScenario({
        id: scenarioId,
        data: {
          expirationDurationSeconds,
        },
      });

      return {
        scenario,
      };
    },
    disableScenario: async (parent, { input: { scenarioId } }, ctx) => {
      const scenario = await ctx.storage.updateScenario({
        id: scenarioId,
        data: {
          disabled: true,
        },
      });

      return {
        scenario,
      };
    },
    enableScenario: async (parent, { input: { scenarioId } }, ctx) => {
      const scenario = await ctx.storage.updateScenario({
        id: scenarioId,
        data: {
          disabled: false,
        },
      });

      return {
        scenario,
      };
    },
    deleteScenario: async (parent, { input: { scenarioId } }, ctx) => {
      const scenario = await ctx.storage.deleteScenario({
        id: scenarioId,
      });

      return {
        scenario,
        scenarioEdge: {
          node: scenario,
          cursor: toCursor(scenario.id),
        },
      };
    },
  },
  Scenario: {
    possibleStates: async (parent, { first, after }, ctx) => {
      const {
        states,
        hasNextPage,
        hasPreviousPage,
      } = await ctx.storage.getScenarioPossibleStates({
        id: parent.id,
        first,
        after,
      });

      return relayConnection(states, hasNextPage, hasPreviousPage);
    },
  },
};

export default resolvers;
