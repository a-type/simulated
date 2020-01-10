import { parseId } from '../../../storage/ids';
import { Resolvers } from '../generated/graphql';

const resolvers: Resolvers = {
  Node: {
    __resolveType: node => {
      const { nodeType } = parseId(node.id);
      return nodeType;
    },
  },
};

export default resolvers;
