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

export interface CategoriesResult {
  count: number;
  next: number | null;
  previous: number | null;
  results: OptionsGroup[];
}
export interface StoresResult {
  count: number;
  next: number | null;
  previous: number | null;
  results: OptionsGroup[];
}
export interface FiltersState {
  categories: string[];
  stores: string[];
  time: { id: number; lowDate: string; upDate: string; sideLabel: string; label: string };
  comparison: { id: number; lowDate: string; upDate: string; sideLabel: string; label: string };
}
