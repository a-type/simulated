import {
  BodyMatcher,
  ResponseBody,
  TemplateResponseBody,
  ResponseBodyKind,
  PathMatcher,
  Matcher,
  MethodsMatcher,
  MatcherKind,
  HeadersMatcher,
} from '../admin/schema/generated/graphql';

export const isMethodsMatcher = (matcher: Matcher): matcher is MethodsMatcher =>
  matcher.kind === MatcherKind.Methods;

export const isPathMatcher = (matcher: Matcher): matcher is PathMatcher =>
  matcher.kind === MatcherKind.Path;

export const isBodyMatcher = (matcher: Matcher): matcher is BodyMatcher =>
  matcher.kind === MatcherKind.Body;

export const isHeadersMatcher = (matcher: Matcher): matcher is HeadersMatcher =>
  matcher.kind === MatcherKind.Headers;

export const isTemplateResponseBody = (
  body: ResponseBody,
): body is TemplateResponseBody => body.kind === ResponseBodyKind.Template;
