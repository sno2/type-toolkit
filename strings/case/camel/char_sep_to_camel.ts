/**
 * Converts a character-separated string type to camel case from the given character.
 * @template Char the character that separates each part of the string
 * @template Cased the string that is to be converted
 * @internal
 */
export type CharSepToCamel<
  Char extends string,
  Cased extends string
> = Cased extends `${infer F}${Char}${infer R}`
  ? `${F}${Capitalize<CharSepToCamel<Char, R>>}`
  : Cased;
