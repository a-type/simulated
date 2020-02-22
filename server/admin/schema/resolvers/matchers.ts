import {
  Resolvers,
  PathMatcherKind,
  BodyMatcherKind,
  MethodMatcherKind,
  HeadersMatcherKind,
} from '../generated/graphql';

const resolvers: Resolvers = {
  PathMatcher: {
    __resolveType: node => {
      switch ((node as any).kind) {
        case PathMatcherKind.Literal:
          return 'LiteralPathMatcher';
        default:
          return null;
      }
    },
  },
  BodyMatcher: {
    __resolveType: node => {
      switch ((node as any).kind) {
        case BodyMatcherKind.Literal:
          return 'LiteralBodyMatcher';
        default:
          return null;
      }
    },
  },
  MethodMatcher: {
    __resolveType: node => {
      switch ((node as any).kind) {
        case MethodMatcherKind.Literals:
          return 'LiteralsMethodMatcher';
        default:
          return null;
      }
    },
  },
  HeadersMatcher: {
    __resolveType: node => {
      switch ((node as any).kind) {
        case HeadersMatcherKind.Literals:
          return 'LiteralsHeadersMatcher';
        default:
          return null;
      }
    },
  },
};

export default resolvers;
