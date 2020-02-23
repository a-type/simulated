import { Request } from 'express';
import Storage from '../storage/Storage';
import { StorageMapping } from '../storage/types';
import {
  isMethodsMatcher,
  isPathMatcher,
  isBodyMatcher,
  isHeadersMatcher,
} from '../utils/guards';
import {
  PathMatcher,
  Response,
  BodyMatcher,
  MethodsMatcher,
  Matcher,
  HeadersMatcher,
} from '../admin/schema/generated/graphql';
import { IncomingHttpHeaders } from 'http';

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
  return mapping.matchers.reduce((stillMatches, matcher) => {
    if (!stillMatches) return stillMatches;

    return matcherMatches(matcher, req);
  }, true);
};

const matcherMatches = (matcher: Matcher, req: Request): boolean => {
  if (isMethodsMatcher(matcher)) {
    return methodMatches(matcher, req.method);
  } else if (isPathMatcher(matcher)) {
    return pathMatches(matcher, req.path);
  } else if (isBodyMatcher(matcher)) {
    return bodyMatches(matcher, req.body);
  } else if (isHeadersMatcher(matcher)) {
    return headersMatches(matcher, req);
  }

  return false;
};

const methodMatches = (methodMatcher: MethodsMatcher, method: string) => {
  return methodMatcher.methods.includes(method);
};

const pathMatches = (pathMatcher: PathMatcher, path: string) => {
  if (pathMatcher.regex) {
    return new RegExp(pathMatcher.path).test(path);
  }

  return pathMatcher.path === path;
};

const bodyMatches = (bodyMatcher: BodyMatcher, body: string) => {
  const match = bodyMatcher.ignoreWhitespace
    ? bodyMatcher.body.replace(/\s*/g, '')
    : bodyMatcher.body;
  const requestBody = bodyMatcher.ignoreWhitespace
    ? body.replace(/\s*/g, '')
    : body;

  if (bodyMatcher.regex) {
    const regex = new RegExp(match);
    return regex.test(requestBody);
  }
  return match === requestBody;
};

const headersMatches = (headersMatcher: HeadersMatcher, request: Request) => {
  return headersMatcher.headers.reduce((stillMatches, pair) => {
    if (!stillMatches) return stillMatches;

    const realHeader = request.get(pair.name);
    if (realHeader === pair.value) return true;
    return false;
  }, true);
};

const isMappingActive = async (mapping: StorageMapping) => {
  const state = await storage.getState({ stateId: mapping.parentId });
  const scenario = await storage.getScenario({ scenarioId: state.parentId });
  return scenario?.currentState === state.id ?? false;
};
