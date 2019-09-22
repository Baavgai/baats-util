export const assertNever = (x: never): never => {
    throw new Error("Unexpected object: " + x);
};

export const validateType = <T>(x: T): T =>
    x;

export function valueOr<T>(x: T | undefined, defValue: T): T {
    if (x === undefined) {
        return defValue;
    } else {
        return x;
    }
}

export function valueOrTrans<T, U>(x: T | undefined, defValue: U, trans: (x: T) => U): U {
    if (x === undefined) {
        return defValue;
    } else {
        return trans(x);
    }
}
