export declare const seqGen: <T>(init: T, test: (x: T) => boolean, next: (x: T) => T) => T[];
export declare const range: (startingValueOrSize: number, endingValue?: number | undefined) => number[];
export declare function first<T>(xs: T[], pred?: (x: T) => boolean): T | undefined;
export declare function uniq<T>(xs: T[], getKey?: (x: T) => string): T[];
export declare function findIndex<T>(xs: T[], pred: (x: T) => boolean): number;
export declare function find<T>(xs: T[], pred: (x: T) => boolean): T | undefined;
export declare const pushA: <T>(a: T[], x: T) => T[];
export declare const unshiftA: <T>(a: T[], x: T) => T[];
export declare function partition<T>(xs: T[], pred: (x: T) => boolean): [T[], T[]];
