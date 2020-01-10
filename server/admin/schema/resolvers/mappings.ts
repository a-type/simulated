import { Resolvers } from '../generated/graphql';

const resolvers: Resolvers = {
  Mutation: {
    createStateMapping: (parent, args, ctx, info) => {
      return {
        state: null as any,
        mappingEdge: null as any,
        mapping: null as any,
      };
    },
    setMappingResponse: (parent, args, ctx, info) => {
      return null as any;
    },
    setMappingTrigger: (parent, args, ctx, info) => {
      return null as any;
    },
  },
};

export default resolvers;
