export interface GendersEntity {
  gender: string;
  value: number;
  secondary_value: number;
  diff: number;
}
export interface AgeRangesEntity {
  age_range: number[];
  value: number;
  secondary_value: number;
  diff: number;
}
export interface VisitorsEntityInner {
  value: number;
  secondary_value: number;
  diff: number;
}
export interface VisitorsEntity {
  hour: number;
  visitors: VisitorsEntityInner[];
  genders: GendersEntity[];
  age_ranges: AgeRangesEntity[];
}
  export interface Data {
    visitors: VisitorsEntity[];
  }
  export interface ClassificationHourResult {
    main_range: string[] | null;
    secondary_range: string[] | null;
    data: Data;
  }
  export interface FormattedClassificationHourResult {
    data: number[];
  }

  export const defaultFormattedClassificationHourResult: FormattedClassificationHourResult[] = [
    {data: []},
  ];

  export interface FormattedResponseClassificationHour {
    genders: FormattedClassificationHourResult[],
    ageRanges: FormattedClassificationHourResult[],
    labels: string[],
  }