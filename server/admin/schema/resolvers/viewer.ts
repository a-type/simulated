import { Resolvers } from '../generated/graphql';

const resolvers: Resolvers = {
  Query: {
    viewer: async () => {
      return {
        id: 'static_relay_viewer',
        scenarios: null,
      };
    },
  },
};

export default resolvers;
