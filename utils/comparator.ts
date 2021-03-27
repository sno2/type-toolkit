export declare namespace Comparator {
  export type StrictSimilar<T, F> = T extends F ? true : false;

  export type Similar<T, F> = StrictSimilar<T, F> extends true
    ? true
    : StrictSimilar<F, T>;

  export type Equal<T, F> = StrictSimilar<T, F> extends true
    ? StrictSimilar<F, T>
    : false;
}
