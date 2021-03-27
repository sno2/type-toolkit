/** The generic type for all enums. */
export type Enum = Record<string, string | number>;

export declare namespace Enum {
  /**
   * Gets the values of the enum in a union.
   *
   * ## Examples
   *
   * 	enum HTTPMethods {
   * 		Get = "GET",
   * 		Post = "POST",
   * 		Update = "UPDATE"
   * 	}
   *
   * 	type MethodStr = Enum.Values<People>; // "GET" | "POST" | "UPDATE"
   */
  export type Values<T extends Enum> = keyof {
    [K in keyof T as T[K] extends infer $Val
      ? $Val extends string
        ? `${$Val}`
        : $Val extends number
        ? $Val
        : never
      : never]: true;
  };

  /**
   * Gets the members (keys) of the enum in a union.
   *
   * ## Examples
   *
   * 	enum People {
   * 		Joe,
   * 		Jeff,
   * 		Jerry
   * 	}
   *
   * 	type PeopleNames = Enum.Members<typeof People>; // "Joe" | "Jeff" | "Jerry"
   */
  export type Members<T extends Enum> = keyof T;

  /**
   * Gets a union that accepts either the enum value via dot notation (Foo.Bar) or the literal value assigned to the member.
   *
   * ## Examples
   *
   * 	enum HTTPMethod {
   * 		Get = "GET",
   * 		Post = "POST",
   * 		Update = "UPDATE"
   * 	}
   *
   * 	type Method = Enum.SelfOrValues<typeof HTTPMethod>; // HttpMethod | "GET" | "POST" | "UPDATE"
   *
   * 	const assertMethod = (m: Method) => {};
   *
   * 	assertMethod("GET");
   * 	assertMethod(HttpMethod.Post);
   * 	assertMethod(HttpMethod.Update);
   * 	assertMethod("POST");
   */
  export type SelfOrValues<T extends Enum> =
    | Values<T>
    | (T[Members<T>] extends infer $Vals
        ? $Vals extends string
          ? `${$Vals}` // detaches the strings so that they appear in their raw form in tooltips
          : $Vals extends number
          ? $Vals
          : never
        : never);
}
