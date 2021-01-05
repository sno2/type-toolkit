import type { CharSepToCamel } from "./char_sep_to_camel.ts";

/**
 * Converts a string type that is in snake case to camel case.
 * @typeParam SnakeCase the snake case string type
 *
 * ```ts
 * type ErrorMessage = "file_not_found";
 * const message: SnakeToCamel<ErrorMessage> = "fileNotFound"; // the string is equal to the type so no error occurs
 * ```
 */
export type SnakeToCamel<SnakeCase extends string> = CharSepToCamel<
  "_",
  SnakeCase
>;
