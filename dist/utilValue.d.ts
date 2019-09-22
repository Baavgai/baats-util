export declare const assertNever: (x: never) => never;
export declare const validateType: <T>(x: T) => T;
export declare function valueOr<T>(x: T | undefined, defValue: T): T;
export declare function valueOrTrans<T, U>(x: T | undefined, defValue: U, trans: (x: T) => U): U;
