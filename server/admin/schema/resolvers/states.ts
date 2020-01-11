import { Resolvers } from '../generated/graphql';
import { toCursor } from '../../../storage/cursors';
import { relayConnection } from './relay';

const resolvers: Resolvers = {
  Mutation: {
    createScenarioState: async (
      parent,
      { input: { scenarioId, state } },
      ctx,
      info,
    ) => {
      const createdState = await ctx.storage.createState({ data: state });
      const scenario = await ctx.storage.addScenarioState({
        id: scenarioId,
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
};

export default resolvers;
