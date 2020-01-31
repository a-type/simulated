import { Resolvers } from '../generated/graphql';

const resolvers: Resolvers = {
  Trigger: {
    targetState: async (parent, _args, ctx) => {
      const state = await ctx.storage.getState({ stateId: parent.targetState });
      return state;
    },
  },
};

export default resolvers;
