import type { Path } from "./mod.ts";
import type { Comparator } from "../utils/comparator.ts";
import type { Testing } from "../testing/mod.ts";

Deno.test("Paths [TS Only]", () => {});

interface Tests {
  Simple: Comparator.Equal<Path.Extension<"assert.ts">, "ts">;

  Medium: Comparator.Equal<Path.Extension<"bundle.min.js">, "js">;

  Advanced: Comparator.Equal<
    Path.Extension<"https://deno.land/x/type_toolkit/mod.js">,
    "js"
  >;

  NoFileExtension: Comparator.Equal<Path.Extension<"foo">, never>;
}

export const passing: Testing.AllTrue<Tests> = true;
