export interface DataEntity {
  value: number;
  hour: number;
  secondary_value: number;
  diff: number;
}
export interface Data {
  visitors: DataEntity[] | null;
  transactions: DataEntity[] | null;
  conversions: DataEntity[] | null;
}

export interface FormattedHourAverageResult {
  name: string;
  data: number[];
  hour: number[];
  comparedData: number[];
  diff: number[];
  mainRange: string[];
  secondaryRange: string[];
}

export interface HourAverageResults {
  main_range: string[] | null;
  secondary_range: string[] | null;
  data: Data;
}

export const defaultFormattedHourAverageResult: FormattedHourAverageResult[] = [
  { name: '', data: [], hour: [], comparedData: [], diff: [], mainRange: [], secondaryRange: [] },
];
