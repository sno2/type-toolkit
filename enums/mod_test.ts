import type { Enum } from "./mod.ts";
import type { Comparator } from "../utils/comparator.ts";
import type { Testing } from "../testing/mod.ts";

Deno.test("Enums [TS Only]", () => {});

const enum Name {
  Joe,
  Jeff,
  Jerry,
}

const enum Protocol {
  Get = "GET",
  Post = "POST",
  Patch = "PATCH",
}

interface Tests {
  Member: Comparator.Equal<Enum.Members<typeof Name>, "Joe" | "Jeff" | "Jerry">;
  Value: Comparator.Equal<Enum.Values<typeof Name>, 0 | 1 | 2>;
  SelfOrVal: Comparator.Equal<
    Enum.SelfOrValues<typeof Protocol>,
    Protocol | "GET" | "POST" | "PATCH"
  >;
}

export const passing: Testing.AllTrue<Tests> = true;
