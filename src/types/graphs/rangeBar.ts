export interface DataEntity {
  value: number;
  age_range?: number[] | null;
  gender: string;
  secondary_value: number;
  diff: number;
}

export interface Data {
  visitors: DataEntity[];
}

export interface FormattedDataEntity {
  name: string;
  data: number[];
}
export interface ClassificationResults {
  main_total: number;
  secondary_total: number;
  main_range: string[] | null;
  secondary_range: string[] | null;
  data: Data;
}

export const defaultFormattedClassficationResult: FormattedDataEntity[] = [{ data: [], name: '' }];
