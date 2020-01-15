import { Resolvers, MatcherKind } from '../generated/graphql';

const resolvers: Resolvers = {
  Matcher: {
    __resolveType: node => {
      switch ((node as any).kind) {
        case MatcherKind.Literal:
          return 'LiteralMatcher';
        default:
          return null;
      }
    },
  },
};

export default resolvers;
