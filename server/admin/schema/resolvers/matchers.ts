import { Resolvers } from '../generated/graphql';

const resolvers: Resolvers = {
  Matcher: {
    __resolveType: node => {
      if ((node as any).value) {
        return 'LiteralMatcher';
      }
      return null;
    },
  },
};

export default resolvers;
