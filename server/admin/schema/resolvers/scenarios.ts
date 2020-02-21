import { Resolvers } from '../generated/graphql';
import { toCursor } from '../../../storage/cursors';
import { relayConnection } from './relay';

const resolvers: Resolvers = {
  Viewer: {
    scenarios: async (parent, { first, after }, ctx) => {
      const {
        scenarios,
        hasNextPage,
        hasPreviousPage,
      } = await ctx.storage.getScenarios({ first, after });

      const data = relayConnection(scenarios, hasNextPage, hasPreviousPage);
      return data;
    },
    scenario: async (parent, { id }, ctx) => {
      return ctx.storage.getScenario({ scenarioId: id });
    },
  },
  Mutation: {
    addScenario: async (parent, { input }, ctx) => {
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
        scenarioId: input.scenarioId,
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
        scenarioId: scenarioId,
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
        scenarioId: scenarioId,
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
        scenarioId: scenarioId,
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
        scenarioId: scenarioId,
        data: {
          disabled: false,
        },
      });

      return {
        scenario,
      };
    },
    deleteScenario: async (parent, { input: { scenarioId } }, ctx) => {
      const scenario = await ctx.storage.getScenario({
        scenarioId: scenarioId,
      });

      // clean it all up
      await Promise.all(
        scenario.possibleStates.map(async stateId => {
          const state = await ctx.storage.getState({ stateId });
          await Promise.all(
            state.mappings.map(async mappingId => {
              await ctx.storage.deleteMapping({ mappingId });
            }),
          );
          await ctx.storage.deleteState({ stateId });
        }),
      );

      await ctx.storage.deleteScenario({
        scenarioId: scenarioId,
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
    defaultState: async (parent, args, ctx) => {
      const state = await ctx.storage.getState({
        stateId: parent.defaultState,
      });
      return state;
    },
    currentState: async (parent, args, ctx) => {
      const state = await ctx.storage.getState({
        stateId: parent.currentState,
      });
      return state;
    },
  },
};

export default resolvers;
