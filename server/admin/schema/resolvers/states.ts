import { Resolvers } from '../generated/graphql';
import { toCursor } from '../../../storage/cursors';
import { relayConnection } from './relay';

const resolvers: Resolvers = {
  Mutation: {
    addScenarioState: async (
      parent,
      { input: { scenarioId, state } },
      ctx,
      info,
    ) => {
      const createdState = await ctx.storage.createState({
        data: state,
        scenarioId,
      });
      const scenario = await ctx.storage.addScenarioState({
        scenarioId: scenarioId,
        stateId: createdState.id,
      });

      // basically required due to typing. not sure of a good
      // way to make this unnecessary
      const { mappings: _, ...createdStateWithoutMappings } = createdState;
      const finalState = {
        ...createdStateWithoutMappings,
        mappings: undefined,
      };

      return {
        scenario,
        state: finalState,
        stateEdge: {
          node: finalState,
          cursor: toCursor(createdState.id),
        },
      };
    },

    setStateDetails: async (_parent, { input: { stateId, ...rest } }, ctx) => {
      const state = await ctx.storage.updateState({
        id: stateId,
        data: rest,
      });

      return {
        state,
      };
    },

    deleteState: async (parent, { input: { stateId } }, ctx) => {
      const state = await ctx.storage.deleteState({ stateId });

      let scenario = await ctx.storage.removeScenarioState({
        scenarioId: state.parentId,
        stateId,
      });

      return {
        state,
        stateEdge: {
          node: state,
          cursor: toCursor(state.id),
        },
        scenario,
      };
    },
  },

  State: {
    mappings: async (parent, { first, after }, ctx) => {
      const {
        mappings,
        hasPreviousPage,
        hasNextPage,
      } = await ctx.storage.getStateMappings({
        id: parent.id,
        first,
        after,
      });

      return relayConnection(mappings, hasNextPage, hasPreviousPage);
    },
  },

  Viewer: {
    state: async (parent, { id }, ctx) => {
      const state = await ctx.storage.getState({ stateId: id });
      return state;
    },
  },
};

export default resolvers;
