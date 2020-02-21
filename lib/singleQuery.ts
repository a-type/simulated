import { ParsedUrlQuery } from 'querystring';

type Singlify<T> = T extends Array<infer U> ? U : T;

type SingleParsedUrlQuery = {
  [k in keyof ParsedUrlQuery]: Singlify<ParsedUrlQuery[k]>;
};

export default (query: ParsedUrlQuery) => query as SingleParsedUrlQuery;
