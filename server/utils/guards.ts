import {
  BodyMatcher,
  LiteralBodyMatcher,
  BodyMatcherKind,
  MethodMatcher,
  LiteralsMethodMatcher,
  MethodMatcherKind,
  ResponseBody,
  TemplateResponseBody,
  ResponseBodyKind,
  PathMatcher,
  LiteralPathMatcher,
  PathMatcherKind,
} from '../admin/schema/generated/graphql';

export const isLiteralsMethodMatcher = (
  matcher: MethodMatcher,
): matcher is LiteralsMethodMatcher =>
  matcher.kind === MethodMatcherKind.Literals;

export const isLiteralPathMatcher = (
  matcher: PathMatcher,
): matcher is LiteralPathMatcher => matcher.kind === PathMatcherKind.Literal;

export const isLiteralBodyMatcher = (
  matcher: BodyMatcher,
): matcher is LiteralBodyMatcher => matcher.kind === BodyMatcherKind.Literal;

export const isTemplateResponseBody = (
  body: ResponseBody,
): body is TemplateResponseBody => body.kind === ResponseBodyKind.Template;
