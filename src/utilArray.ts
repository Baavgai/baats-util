export const seqGen = <T>(init: T, test: (x: T) => boolean, next: (x: T) => T): T[] => {
    const xs: T[] = [];
    for (let x = init; test(x); x = next(x)) {
        xs.push(x);
    }
    return xs;
};

export const range = (startingValueOrSize: number, endingValue?: number) =>
    endingValue === undefined
        ? seqGen(0, i => i < startingValueOrSize, i => i + 1)
        : seqGen(startingValueOrSize, i => i < endingValue, i => i + 1);

export function first<T>(xs: T[], pred?: (x: T) => boolean) {
    const p2 = pred || ((x: T) => true);
    for (const x of xs) {
        if (p2(x)) { return x; }
    }
    return undefined;
}

export function uniq<T>(xs: T[], getKey?: (x: T) => string) {
    const ys = new Array<T>();
    const cache: { [key: string]: boolean } = {};
    const gc = getKey ? getKey : (x: T) => "" + x;
    xs.forEach(x => {
        const k = gc(x);
        if (!(cache[k])) {
            ys.push(x);
            cache[k] = true;
        }
    });
    return ys;
}

export function findIndex<T>(xs: T[], pred: (x: T) => boolean): number {
    for (let i = 0; i < xs.length; i++) {
        if (pred(xs[i])) { return i; }
    }
    return -1;
}

export function find<T>(xs: T[], pred: (x: T) => boolean): T | undefined {
    const idx = findIndex(xs, pred);
    return idx === -1 ? undefined : xs[idx];
}

// why the hell do push and unshift return crap
export const pushA = <T>(a: T[], x: T) => {
    a.push(x);
    return a;
};

export const unshiftA = <T>(a: T[], x: T) => {
    a.unshift(x);
    return a;
};

export function partition<T>(xs: T[], pred: (x: T) => boolean) {
    const item = (x: T[], y: T[]) => [x, y] as [T[], T[]];
    return xs.reduce((acc: [T[], T[]], x: T) =>
        pred(x) ? item(pushA(acc[0], x), acc[1]) : item(acc[0], pushA(acc[1], x)),
        item([], []));
}
