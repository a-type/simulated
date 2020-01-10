import { Resolvers } from '../generated/graphql';

const resolvers: Resolvers = {
  Query: {
    scenarios: (parent, args, ctx, info) => {
      return {
        edges: [],
        pageInfo: {},
      } as any;
    },
  },
  Mutation: {
    createScenario: (parent, args, ctx, info) => {
      return null as any;
    },
    setScenarioDefaultState: (parent, args, ctx, info) => {
      return null as any;
    },
    setScenarioExpiration: (parent, args, ctx, info) => {
      return null as any;
    },
    disableScenario: (parent, args, ctx, info) => {
      return null as any;
    },
    enableScenario: (parent, args, ctx, info) => {
      return null as any;
    },
    deleteScenario: (parent, args, ctx, info) => {
      return null as any;
    },
  },
};

export default resolvers;
