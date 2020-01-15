import {
  Resolvers,
  AddMatcherInput,
  LiteralMatcher,
  MatcherKind,
} from '../generated/graphql';
import { toCursor } from '../../../storage/cursors';
import { StorageMatcher } from '../../../storage/types';

const resolvers: Resolvers = {
  Mutation: {
    addStateMapping: async (parent, { input }, ctx, info) => {
      const mapping = await ctx.storage.createMapping({
        stateId: input.stateId,
        data: {
          ...input.mapping,
          pathMatcher: getMatcherInput(input.mapping.pathMatcher),
        },
      });

      const state = await ctx.storage.addStateMapping({
        stateId: input.stateId,
        mappingId: mapping.id,
      });

      return {
        mapping,
        mappingEdge: {
          node: mapping,
          cursor: toCursor(mapping.id),
        },
        state,
      };
    },
    setMappingResponse: async (parent, { input }, ctx, info) => {
      const mapping = await ctx.storage.updateMapping({
        id: input.mappingId,
        data: {
          response: input.response,
        },
      });

      return {
        mapping,
      };
    },
    setMappingTrigger: async (parent, { input }, ctx, info) => {
      const mapping = await ctx.storage.updateMapping({
        id: input.mappingId,
        data: {
          trigger: input.trigger,
        },
      });

      return {
        mapping,
      };
    },
    deleteMapping: async (parent, { input }, ctx) => {
      const mapping = await ctx.storage.deleteMapping({
        mappingId: input.mappingId,
      });

      const state = await ctx.storage.removeStateMapping({
        mappingId: input.mappingId,
        stateId: mapping.parentId,
      });

      return {
        mapping,
        mappingEdge: {
          node: mapping,
          cursor: toCursor(mapping.id),
        },
        state,
      };
    },
  },
};

export default resolvers;

const getMatcherInput = (
  input: AddMatcherInput | null | undefined,
): StorageMatcher | null => {
  if (!input) return null;

  if (input.literal) {
    return {
      ...input.literal,
      kind: MatcherKind.Literal,
    };
  }
  return null;
};
