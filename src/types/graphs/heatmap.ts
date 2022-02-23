export interface DataEntity {
  value: number;
  day: number;
  secondary_value: number;
  diff: number;
  color: number[];
}

export interface DataEntityClassification {
  value: number;
  store_id: number;
  secondary_value: number;
  diff: number;
  color: number[];
}
export interface Data {
  visitors: DataEntity[] | null;
  transactions: DataEntity[] | null;
  conversions: DataEntity[] | null;
}

export interface DataClassification {
  visitors: DataEntityClassification[] | null;
  transactions: DataEntityClassification[] | null;
  conversions: DataEntityClassification[] | null;
}
export interface DayWeekAverageResult {
  main_range: string[] | null;
  secondary_range: string[] | null;
  data: Data;
}

export interface DayWeekAverageClassificationResult {
  main_range: string[] | null;
  secondary_range: string[] | null;
  data: DataClassification;
}
export interface FormattedDayWeekAverageResult {
  name: string;
  data: number[];
  comparedData: number[];
  diff: number[];
  colors: number[][];
  mainRange: string[];
  secondaryRange: string[];
}

export const defaultFormattedDayWeekAverageResult: FormattedDayWeekAverageResult[] = [
  { name: '', data: [], comparedData: [], diff: [], mainRange: [], secondaryRange: [], colors: [] },
];

export interface FormattedCounterLocationResult {
  name: string;
  data: number[];
  comparedData: number[];
  diff: number[];
  labels: number[];
  colors: number[][];
  mainRange: string[];
  secondaryRange: string[];
}

export const defaultFormattedCounterLocationResult: FormattedCounterLocationResult[] = [
  {
    name: '',
    data: [],
    comparedData: [],
    diff: [],
    mainRange: [],
    secondaryRange: [],
    colors: [],
    labels: [],
  },
];

export type ApexXAxis = {
  type?: 'category' | 'datetime' | 'numeric';
  categories: string[];
  position: string;
  labels: {
    style: {
      colors?: string | string[];
      fontSize: string;
      fontWeight: number;
      fontFamily: string;
    };
  };
};
