export declare namespace Testing {
  export type AllTrue<T> = false extends T[keyof T] ? false : true;
}
