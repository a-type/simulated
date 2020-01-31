import {
  Resolvers,
  AddMatcherInput,
  LiteralMatcher,
  MatcherKind,
  ResponseBodyKind,
} from '../generated/graphql';
import { toCursor } from '../../../storage/cursors';
import { StorageMatcher } from '../../../storage/types';
import { AddResponseBodyInput, ResponseBody } from '../generated/graphql';

const resolvers: Resolvers = {
  Mutation: {
    addStateMapping: async (_parent, { input }, ctx, info) => {
      const mapping = await ctx.storage.createMapping({
        stateId: input.stateId,
        data: {
          ...input.mapping,
          pathMatcher: getMatcherInput(input.mapping.pathMatcher),
          response: input.mapping.response && {
            body: getResponseBodyInput(input.mapping.response.body),
          },
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
          response: {
            body: getResponseBodyInput(input.response.body),
          },
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
    setMappingPriority: async (_parent, { input }, ctx) => {
      const mapping = await ctx.storage.updateMapping({
        id: input.mappingId,
        data: {
          priority: input.priority,
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

  throw new Error(
    'You must provide one of the available types of matcher input data',
  );
};

const getResponseBodyInput = (input: AddResponseBodyInput): ResponseBody => {
  if (input.template) {
    return {
      ...input.template,
      kind: ResponseBodyKind.Template,
    };
  }

  throw new Error(
    'You must provide one of the available types of response body input data',
  );
};
