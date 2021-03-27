import type { List } from "./mod.ts";
import type { Comparator } from "../utils/comparator.ts";
import type { Testing } from "../testing/mod.ts";

Deno.test("Lists [TS Only]", () => {});

interface TypeTests {
  LengthSimple: Comparator.Equal<List.Length<["hello", "world"]>, 2>;
  LengthAdvanced: Comparator.Equal<List.Length<number[]>, number>;
}

export const locked: List.Locked<3, string> = ["hello", "world", "sdf"];
export const passing: Testing.AllTrue<TypeTests> = true;
