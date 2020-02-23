import {
  Resolvers,
  ResponseBodyKind,
  AddMatcherInput,
  MatcherKind,
  AddResponseBodyInput,
  ResponseBody,
} from '../generated/graphql';
import { toCursor } from '../../../storage/cursors';
import { StorageMatcher } from '../../../storage/types';
import { UserInputError } from 'apollo-server-express';

const resolvers: Resolvers = {
  Mutation: {
    addStateMapping: async (_parent, { input }, ctx, info) => {
      const mapping = await ctx.storage.createMapping({
        stateId: input.stateId,
        data: input.mapping,
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
    addMappingMatcher: async (_parent, { input }, ctx, info) => {
      const matcher = getMatcherInput(input.matcher);

      if (!matcher) {
        throw new UserInputError(
          'Exactly one matcher initializer input value must be supplied',
        );
      }

      const mapping = await ctx.storage.addMappingMatcher({
        mappingId: input.mappingId,
        matcher,
      });

      return {
        mapping,
      };
    },
    removeMappingMatcher: async (_parent, { input }, ctx) => {
      const mapping = await ctx.storage.removeMappingMatcher({
        mappingId: input.mappingId,
        matcherKind: input.matcherKind,
      });

      return {
        mapping,
      };
    },
    setMappingResponse: async (parent, { input }, ctx, info) => {
      const mapping = await ctx.storage.updateMapping({
        mappingId: input.mappingId,
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
        mappingId: input.mappingId,
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
        mappingId: input.mappingId,
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
  Viewer: {
    mapping: async (_parent, { id }, ctx) => {
      const mapping = await ctx.storage.getMapping({ mappingId: id });
      return mapping;
    },
  },
};

export default resolvers;

const getMatcherInput = (
  input: AddMatcherInput | null | undefined,
): StorageMatcher | null => {
  if (!input) return null;

  if (input.methods) {
    return {
      ...input.methods,
      kind: MatcherKind.Methods,
    };
  } else if (input.path) {
    return {
      ...input.path,
      regex: !!input.path.regex,
      kind: MatcherKind.Path,
    };
  } else if (input.body) {
    return {
      ...input.body,
      regex: !!input.body.regex,
      ignoreWhitespace: input.body.ignoreWhitespace ?? true,
      kind: MatcherKind.Body,
    };
  } else if (input.headers) {
    return {
      ...input.headers,
      kind: MatcherKind.Headers,
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
