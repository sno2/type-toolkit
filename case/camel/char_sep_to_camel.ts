/**
 * Converts a character-separated string type to camel case from the given character.
 * @typeParam Char the character that separates each part of the string
 * @typeParam Cased the string that is to be converted
 * @internal
 */
export type CharSepToCamel<
  Char extends string,
  Cased extends string
> = Cased extends `${infer F}${Char}${infer R}`
  ? `${F}${Capitalize<CharSepToCamel<Char, R>>}`
  : Cased;
