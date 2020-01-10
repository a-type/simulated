import { Resolvers } from '../generated/graphql';
import { toCursor } from '../../../storage/cursors';

const resolvers: Resolvers = {
  Query: {
    scenarios: async (parent, { first, after }, ctx) => {
      const {
        scenarios,
        hasNextPage,
        hasPreviousPage,
      } = await ctx.storage.getScenarios({ first, after });
      const startCursor = toCursor(scenarios[0].id);
      const endCursor = toCursor(scenarios.pop()?.id || '');

      return {
        edges: scenarios.map(scenario => ({
          node: scenario,
          cursor: toCursor(scenario.id),
        })),
        pageInfo: {
          startCursor,
          endCursor,
          hasNextPage,
          hasPreviousPage,
        },
      };
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
};

export default resolvers;
