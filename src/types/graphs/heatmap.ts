export interface DataEntity {
  value: number;
  day: number;
  secondary_value: number;
  diff: number;
  color: number[];
}

export interface Data {
  visitors: DataEntity[] | null;
  transactions: DataEntity[] | null;
  conversions: DataEntity[] | null;
}

export interface DayWeekAverageResult {
  main_range: string[] | null;
  secondary_range: string[] | null;
  data: Data;
}
export interface FormatedDayWeekAverageResult {
  name: string;
  data: number[];
  comparedData: number[];
  diff: number[];
  colors: number[][];
  mainRange: string[];
  secondaryRange: string[];
}

export const defautlFormatedDayWeekAverageResult: FormatedDayWeekAverageResult[] = [
  { name: '', data: [], comparedData: [], diff: [], mainRange: [], secondaryRange: [], colors: [] },
];
