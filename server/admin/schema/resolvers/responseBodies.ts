import { Resolvers, ResponseBodyKind } from '../generated/graphql';

const resolvers: Resolvers = {
  ResponseBody: {
    __resolveType: node => {
      switch ((node as any).kind) {
        case ResponseBodyKind.Template:
          return 'TemplateResponseBody';
        default:
          return null;
      }
    },
  },
};

export default resolvers;
