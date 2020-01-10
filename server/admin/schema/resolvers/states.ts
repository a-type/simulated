import { Resolvers } from '../generated/graphql';

const resolvers: Resolvers = {
  Mutation: {
    createScenarioState: (parent, args, ctx, info) => {
      return null as any;
    },
  },
};

export default resolvers;
