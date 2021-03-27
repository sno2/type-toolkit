export declare namespace Path {
  /**
   * Gets the file extension as a string from the given location.
   *
   * It doesn't really matter what is in the path as long as the last period has some text after it which indicates the file type.
   *
   * ## Examples
   *
   * 	const foo: Path.Extension<"./main.min.js"> = "js"; // good so no error
   * 	type Bar = Path.Extension<"./main">; // bad, this will be interpreted as a file without a name before the extension of `/main` so make sure your string includes an extension
   */
  export type Extension<
    Path extends string,
    $Parts extends string[] = []
  > = Path extends `${infer $First}.${infer $Rest}`
    ? Extension<$Rest, [...$Parts, $First]>
    : 0 extends $Parts["length"]
    ? never
    : Path;
}
