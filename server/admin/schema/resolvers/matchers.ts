import { Resolvers, MatcherKind } from '../generated/graphql';

const resolvers: Resolvers = {
  Matcher: {
    __resolveType: node => {
      switch ((node as any).kind) {
        case MatcherKind.Path:
          return 'PathMatcher';
        case MatcherKind.Body:
          return 'BodyMatcher';
        case MatcherKind.Headers:
          return 'HeadersMatcher';
        case MatcherKind.Methods:
          return 'MethodsMatcher';
        default:
          return null;
      }
    },
  },
};

export default resolvers;
