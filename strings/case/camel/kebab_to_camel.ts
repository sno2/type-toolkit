import type { CharSepToCamel } from "./char_sep_to_camel.ts";

/**
 * Converts a string type that is in kebab case to camel case.
 * @template KebabCase the kebab case string type
 *
 * ```ts
 * type ErrorMessage = "file-not-found";
 * const message: KebabToCamel<ErrorMessage> = "fileNotFound"; // the string is equal to the type so no error occurs
 * ```
 */
export type KebabToCamel<KebabCase extends string> = CharSepToCamel<
  "-",
  KebabCase
>;
