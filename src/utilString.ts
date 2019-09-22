import { range } from "./utilArray";

export function repChar(size: number, symbol = " ") {
    const s = symbol.length === 0 ? " " : symbol[0];
    return (size < 1) ? "" : range(size).map(() => s).join("");
}

export function lpad(value: any, size: number, symbol = " ") {
    const s = "" + value;
    return repChar(size - s.length, symbol) + s;
}

export function rpad(value: any, size: number, symbol = " ") {
    const s = "" + value;
    return s + repChar(size - s.length, symbol);
}

export function zpad(value: any, zeros: number) {
    return lpad(value, zeros, "0");
}
