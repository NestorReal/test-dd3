import { CountEntity } from './rangeBar';

export interface Entity {
  value: number | null;
  secondary_value: number | null;
  diff: number | null;
}

export interface DataForCounter {
  visitors: Entity;
  transactions: Entity;
  conversions: Entity;
}

export interface CounterResult {
  main_range?: string[] | null;
  secondary_range?: string[] | null;
  data: DataForCounter;
}

export const defaultStoreCountersData: DataForCounter = {
  visitors: {
    value: null,
    secondary_value: null,
    diff: 0,
  },
  transactions: {
    value: null,
    secondary_value: null,
    diff: 0,
  },
  conversions: {
    value: null,
    secondary_value: null,
    diff: 0,
  },
};

export const defaultClassificationCountersData: CountEntity = {
  females: {
    value: null,
    secondary_value: null,
    diff: 0,
  },
  males: {
    value: null,
    secondary_value: null,
    diff: 0,
  },
  totals: {
    value: null,
    secondary_value: null,
    diff: 0,
  },
};
