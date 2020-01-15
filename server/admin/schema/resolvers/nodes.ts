import { parseId } from '../../../storage/ids';
import { Resolvers } from '../generated/graphql';

const resolvers: Resolvers = {
  Node: {
    __resolveType: node => {
      const { nodeType } = parseId(node.id);
      return nodeType;
    },
  },
  Query: {
    node: async (parent, { id }, ctx) => {
      const { nodeType } = parseId(id);
      switch (nodeType) {
        case 'Mapping':
          return ctx.storage.getMapping({ mappingId: id });
        case 'Scenario':
          return ctx.storage.getScenario({ id });
        case 'State':
          return ctx.storage.getState({ stateId: id });
        default:
          return null;
      }
    },
  },
};

export default resolvers;
