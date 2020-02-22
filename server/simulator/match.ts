import { Request } from 'express';
import Storage from '../storage/Storage';
import { StorageMapping } from '../storage/types';
import {
  PathMatcher,
  Response,
  BodyMatcher,
  MethodMatcher,
} from '../admin/schema/generated/graphql';
import {
  isLiteralPathMatcher,
  isLiteralBodyMatcher,
  isLiteralsMethodMatcher,
} from '../utils/guards';

const storage = new Storage();

/** defines a mapping which is deemed eligible for use as a mock response */
export type EligibleMapping = StorageMapping & {
  response: Response;
};

/**
 * Matches a request against configured mappings, returning the highest
 * priority active mapping
 */
export default async (req: Request): Promise<EligibleMapping | null> => {
  const { mappings } = await storage.getMappings({});
  // descending order of priority
  const preparedMappings = mappings.sort((a, b) => b.priority - a.priority);

  for (const mapping of preparedMappings) {
    if (isEligibleMapping(mapping) && mappingMatches(mapping, req)) {
      const isActive = await isMappingActive(mapping);
      if (isActive) {
        return mapping;
      }
    }
  }

  return null;
};

const isEligibleMapping = (
  mapping: StorageMapping,
): mapping is EligibleMapping => {
  return !!mapping.response;
};

const mappingMatches = (mapping: StorageMapping, req: Request) => {
  return (
    methodMatches(mapping.methodMatcher, req.method) &&
    pathMatches(mapping.pathMatcher, req.path) &&
    bodyMatches(mapping.bodyMatcher, req.body)
  );
};

const methodMatches = (
  methodMatcher: MethodMatcher | undefined | null,
  method: string,
) => {
  if (!methodMatcher) return true;

  if (isLiteralsMethodMatcher(methodMatcher)) {
    return methodMatcher.values.includes(method);
  }

  return false;
};

const pathMatches = (
  pathMatcher: PathMatcher | undefined | null,
  path: string,
) => {
  if (!pathMatcher) return true;

  if (isLiteralPathMatcher(pathMatcher)) {
    return pathMatcher.value === path;
  }

  return false;
};

const bodyMatches = (
  bodyMatcher: BodyMatcher | undefined | null,
  body: string,
) => {
  if (!bodyMatcher) return true;

  if (isLiteralBodyMatcher(bodyMatcher)) {
    return bodyMatcher.value === body;
  }

  return false;
};

const isMappingActive = async (mapping: StorageMapping) => {
  const state = await storage.getState({ stateId: mapping.parentId });
  const scenario = await storage.getScenario({ scenarioId: state.parentId });
  return scenario?.currentState === state.id ?? false;
};
