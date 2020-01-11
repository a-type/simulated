// transforms nested objects into optional normalized id strings
export type Normalized<T, NSingle = any, NArray = any> = {
  [K in keyof T]: T[K] extends string
    ? T[K]
    : T[K] extends Array<any>
    ? NArray | Array<Normalized<T[K][0]>>
    : T[K] extends Object
    ? NSingle | Normalized<T[K]>
    : T[K];
};
