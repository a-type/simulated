import {
  ResponseBody,
  TemplateResponseBody,
  ResponseBodyKind,
} from '../admin/schema/generated/graphql';
import {
  Matcher,
  LiteralMatcher,
  MatcherKind,
} from '../admin/schema/generated/graphql';

export const isLiteralMatcher = (matcher: Matcher): matcher is LiteralMatcher =>
  matcher.kind === MatcherKind.Literal;

export const isTemplateResponseBody = (
  body: ResponseBody,
): body is TemplateResponseBody => body.kind === ResponseBodyKind.Template;
