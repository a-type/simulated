import nodes from './nodes';
import viewer from './viewer';
import scenarios from './scenarios';
import states from './states';
import mappings from './mappings';
import matchers from './matchers';
import { Resolvers } from '../generated/graphql';

// merges various resolver types into one giant map
const combineResolvers = (maps: Resolvers[]) =>
  maps.reduce(
    (allReducers, oneMap) =>
      Object.keys(oneMap).reduce(
        (root, typeName) => ({
          ...root,
          [typeName]: {
            ...(root[typeName] || {}),
            ...oneMap[typeName],
          },
        }),
        allReducers,
      ),
    {
      Query: {},
      Mutation: {},
    },
  );

export default combineResolvers([
  nodes,
  viewer,
  scenarios,
  states,
  mappings,
  matchers,
]);
