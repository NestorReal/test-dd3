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

export interface VisitorsClassificationEntity {
  store_id: number;
  visitors: VisitorsEntityInner[];
  genders: GendersEntity[];
  age_ranges: AgeRangesEntity[];
}
export interface Data {
  visitors: VisitorsEntity[];
}

export interface DataClassification {
  visitors: VisitorsClassificationEntity[];
}
export interface ClassificationHourResult {
  main_range: string[] | null;
  secondary_range: string[] | null;
  data: Data;
}

export interface ClassificationLocationResult {
  main_range: string[] | null;
  secondary_range: string[] | null;
  data: DataClassification;
}
export interface FormattedClassificationHourResult {
  data: number[];
}

export const defaultFormattedClassificationHourResult: FormattedClassificationHourResult[] = [
  { data: [] },
];

export interface FormattedResponseClassificationHour {
  genders: FormattedClassificationHourResult[];
  ageRanges: FormattedClassificationHourResult[];
  labels: string[];
}

export interface FormattedResponseClassificationLocationHour {
  genders: FormattedClassificationHourResult[];
  ageRanges: FormattedClassificationHourResult[];
  visitors: FormattedClassificationHourResult[];
  labels: number[];
}

export const FormattedResponseClassificationLocationHourDeffault: FormattedResponseClassificationLocationHour =
  {
    genders: defaultFormattedClassificationHourResult,
    ageRanges: defaultFormattedClassificationHourResult,
    visitors: defaultFormattedClassificationHourResult,
    labels: [],
  };

export interface RetrieveOptionEntity {
  id: number;
  name: string;
  categories?: number[] | [];
}

export const RetrieveOptionEntityDefault = {
  id: 0,
  name: '',
  categories: [],
};

export const RetrieveOptionEntityDefaultFormat = {
  id: 0,
  name: '',
  categories: [],
};
