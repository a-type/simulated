import {
  Resolvers,
  AddPathMatcherInput,
  PathMatcherKind,
  ResponseBodyKind,
  BodyMatcherKind,
  HeadersMatcherKind,
  MethodMatcherKind,
} from '../generated/graphql';
import { toCursor } from '../../../storage/cursors';
import { AddMethodMatcherInput } from '../generated/graphql';
import { StorageMethodMatcher } from '../../../storage/types';
import {
  StoragePathMatcher,
  StorageBodyMatcher,
  StorageHeadersMatcher,
} from '../../../storage/types';
import {
  AddResponseBodyInput,
  ResponseBody,
  AddBodyMatcherInput,
  AddHeadersMatcherInput,
} from '../generated/graphql';

const resolvers: Resolvers = {
  Mutation: {
    addStateMapping: async (_parent, { input }, ctx, info) => {
      const mapping = await ctx.storage.createMapping({
        stateId: input.stateId,
        data: {
          ...input.mapping,
          methodMatcher: getMethodMatcherInput(input.mapping.methodMatcher),
          pathMatcher: getPathMatcherInput(input.mapping.pathMatcher),
          bodyMatcher: getBodyMatcherInput(input.mapping.bodyMatcher),
          headersMatcher: getHeadersMatcherInput(input.mapping.headersMatcher),
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
  Viewer: {
    mapping: async (_parent, { id }, ctx) => {
      const mapping = await ctx.storage.getMapping({ mappingId: id });
      return mapping;
    },
  },
};

export default resolvers;

const getMethodMatcherInput = (
  input: AddMethodMatcherInput | null | undefined,
): StorageMethodMatcher | null => {
  if (!input) return null;

  if (input.literals) {
    return {
      ...input.literals,
      kind: MethodMatcherKind.Literals,
    };
  }

  throw new Error(
    'You must provide one of the available types of matcher input data',
  );
};

const getPathMatcherInput = (
  input: AddPathMatcherInput | null | undefined,
): StoragePathMatcher | null => {
  if (!input) return null;

  if (input.literal) {
    return {
      ...input.literal,
      kind: PathMatcherKind.Literal,
    };
  }

  throw new Error(
    'You must provide one of the available types of matcher input data',
  );
};

const getBodyMatcherInput = (
  input: AddBodyMatcherInput | null | undefined,
): StorageBodyMatcher | null => {
  if (!input) return null;

  if (input.literal) {
    return {
      ...input.literal,
      kind: BodyMatcherKind.Literal,
    };
  }

  throw new Error(
    'You must provide one of the available types of matcher input data',
  );
};

const getHeadersMatcherInput = (
  input: AddHeadersMatcherInput | null | undefined,
): StorageHeadersMatcher | null => {
  if (!input) return null;

  if (input.literals) {
    return {
      ...input.literals,
      kind: HeadersMatcherKind.Literals,
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
