// transforms nested objects into optional normalized id strings
export type Normalized<T> = {
  [K in keyof T]: T[K] extends Array<any>
    ? string[] | Array<Normalized<T[K][0]>>
    : T[K] extends Object
    ? string | Normalized<T[K]>
    : T[K];
};
