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
export interface TotalsOrMalesOrFemales {
  value: number | null;
  secondary_value: number | null;
  diff: number | null;
}
export interface CountEntity {
  totals: TotalsOrMalesOrFemales;
  males: TotalsOrMalesOrFemales;
  females: TotalsOrMalesOrFemales;
}

export interface FormattedClassificationData {
  data: FormattedDataEntity[];
  counter: CountEntity;
}

export interface ClassificationResults {
  main_range: string[] | null;
  secondary_range: string[] | null;
  data: Data;
  count: CountEntity;
}

export const defaultFormattedClassficationResult: FormattedDataEntity[] = [{ data: [], name: '' }];
