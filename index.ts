import index from './src/index';

export type DateOkay = Date | string | number;

export interface Options {
  and?: boolean,
  suffix?: boolean,
  zero?: boolean,
  max?: number,
}

export default function fromnow(date: DateOkay, opts?: Options): string {
  return index(date, opts)
}
