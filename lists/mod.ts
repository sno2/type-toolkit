import type { Comparator } from "../utils/comparator.ts";

export declare namespace List {
  /** An array type of `T` that can be readonly or not. */
  export type Loose<T = unknown> = T[] | readonly T[];

  /** Recursive types that have tuple incrementors will overflow if they have more than 44 elements. */
  export type RecTupleOverflowMax = 44;

  /** Gets the length of an array. */
  export type Length<T extends Pick<Loose, "length">> = T["length"];

  /** Makes a tuple of length `L` with each of the elements of type `T`. */
  export type Locked<L extends number, T, $Draft extends Loose<T> = []> =
    //
    Comparator.Equal<Length<$Draft>, L> extends true
      ? $Draft // ship it
      : Comparator.Equal<Length<$Draft>, RecTupleOverflowMax> extends true // it will overflow if it's large so we need to do the hacky way
      ? T[] & { 0: T; length: L }
      : Locked<L, T, [...$Draft, T]>;

  /** Forms a union of all types within the array/tuple type. */
  export type Squash<T extends Loose> = T[number];
}
