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
  name: number | string;
  data: number[];
  comparedData: number[];
  diff: number[];
  colors: number[][];
  mainRange: string[];
  secondaryRange: string[];
}

export const defaultFormattedDayWeekAverageResult: FormattedDayWeekAverageResult[] = [
  { name: 0, data: [], comparedData: [], diff: [], mainRange: [], secondaryRange: [], colors: [] },
];

export interface FormattedCounterLocationResult {
  name: string | number;
  data: number[];
  comparedData: number[];
  diff: number[];
  labels?: number[];
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
    };
  };
};

export interface IGraphicDictionary {
  visitors: string,
  transactions: string,
  conversions: string,
}

export interface RangesEntity {
  color: string;
  from: number;
  to: number;
  name: string;
}
export interface ColorScale {
  ranges?: RangesEntity[];
}
export interface HeatmapFormat {
  shadeIntensity: number;
  radius: number;
  distributed: boolean;
  colorScale: ColorScale;
}
export interface Heatmap {
  heatmap: {
    radius?: number;
    enableShades?: boolean;
    shadeIntensity?: number;
    reverseNegativeShade?: boolean;
    distributed?: boolean;
    useFillColorAsStroke?: boolean;
    colorScale?: {
      ranges?: {
        from?: number;
        to?: number;
        color?: string;
        foreColor?: string;
        name?: string;
      }[];
      inverse?: boolean;
      min?: number;
      max?: number;
    };
  };
}

export const RangesEntityFormat: RangesEntity[] = [
  {
    color: '',
    from: 0,
    to: 0,
    name: '',
  },
];

export const ColorScaleFormat: ColorScale = {
  ranges: RangesEntityFormat,
};

export const HeatmapFormatDefault = {
  shadeIntensity: 0,
  radius: 0,
  distributed: true,
  colorScale: ColorScaleFormat,
};

export const HeatmapDefault: Heatmap = {
  heatmap: HeatmapFormatDefault,
};
