import { zpad } from "./utilString";

export function dateIn(dt?: Date): string {
    if (dt === undefined) {
        return "";
    } else {
        return dt.toISOString();
    }
}

export const toDate = (x: string | number | Date) =>
    new Date(x);

export const toDateOrNone = (x: string | number | Date | undefined) =>
    !x ? undefined : toDate(x);
// truthy didn't do it x === undefined ? undefined : toDate(x);

export const dateApply = (dt: Date, f: (dt: Date) => void) => {
    const date = new Date(dt.valueOf());
    f(date);
    return date;
};

export const addDays = (dt: Date, days: number) =>
    dateApply(dt, date => date.setDate(date.getDate() + days));

export const addMonths = (dt: Date, months: number) =>
    dateApply(dt, date => date.setMonth(date.getMonth() + months));

export const dateOnly = (dt: Date) =>
    dateApply(dt, date => date.setHours(0, 0, 0, 0));

export const toStringTuple = <T extends string[]>(...args: T) =>
    args;

export const fmtDate = (dt: Date) =>
    `${zpad(dt.getMonth() + 1, 2)}/${zpad(dt.getDate(), 2)}/${dt.getFullYear()}`;

export const fmtTime = (dt: Date) =>
    `${zpad(dt.getHours() + (dt.getHours() > 12 ? -12 : 0), 2)}:${zpad(dt.getMinutes(), 2)} ${dt.getHours() > 11 ? " PM" : " AM"}`;

export const fmtDateTime = (dt: Date) =>
    `${fmtDate(dt)} ${fmtTime(dt)}`;
