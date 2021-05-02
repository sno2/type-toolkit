export type Split<
  T extends string,
  F extends string = "",
  $Draft extends readonly string[] = []
> =
  //
  T extends `${infer $Value}${F}${infer $Rest}`
    ? Split<$Rest, F, readonly [...$Draft, $Value]>
    : F extends ""
    ? $Draft
    : readonly [...$Draft, T];

export type Join<
  T extends readonly (string | number)[],
  F extends string = "",
  $Draft extends string = ""
> =
  //
  T["length"] extends 0
    ? `${$Draft}`
    : T extends [infer $First, ...infer $Rest]
    ? $Rest extends (string | number)[]
      ? $First extends string | number
        ? Join<$Rest, F, $Draft extends "" ? $First : `${$Draft}${F}${$First}`>
        : never
      : never
    : never;

export type Length<T extends string> = Split<T>["length"];

export type CharAt<
  T extends string,
  I extends keyof $StrArr,
  $StrArr = Split<T>
> = $StrArr[I];
