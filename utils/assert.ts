import type { Comparator } from "./comparator.ts";

export declare namespace Assert {
  /** Checks if `T` extends `F` and returns either `T` or `never` whether the extension is valid. */
  export type StrictSimilar<T, F> = Comparator.StrictSimilar<T, F> extends true
    ? T
    : never;

  /** Checks if `T` extends `F` and returns either `T` or `never` whether the extension is valid. */
  export type Similar<T, F> = StrictSimilar<T, F> extends T
    ? T
    : StrictSimilar<F, T>;

  /** Checks if type `T` is equal to type `F` and either returns `T` (which must be equal to `F`) or `never` otherwise. */
  export type Equal<T, F> = T extends StrictSimilar<T, F>
    ? F extends StrictSimilar<F, T>
      ? T
      : never
    : never;
}
