export interface GenericOption {
  id: number;
  name: string;
}

export interface StoreOption extends GenericOption {
  assigned: number[];
  categories: number[];
  schedules: number[];
  time_zone: number;
  identifier: string;
}

export interface OptionsGroup {
  name: string;
  options: GenericOption[];
}

export interface RangeOption {
  lowDate: string;
  upDate: string;
  sideLabel: string;
  label: string;
  id: number;
}
