import { ApexOptions } from 'apexcharts';

type RangeBarOptions = Pick<
  ApexOptions,
  'chart' | 'tooltip' | 'plotOptions' | 'dataLabels' | 'stroke' | 'grid' | 'xaxis' | 'legend'
>;
type RangeBarColors = {
  yAxisLabelsTextColor: string | string[];
  xAxisLabelsTextColor: string | string[];
  dataLabelsTextColor: string[];
  strokeColors: string[];
};

export const buildOptions = (colors: RangeBarColors): RangeBarOptions => ({
  chart: {
    type: 'bar',
    stacked: true,
    offsetY: 0,
  },
  tooltip: {
    theme: 'dark',
  },
  plotOptions: {
    bar: {
      horizontal: true,
      columnWidth: '90%',
    },
  },
  dataLabels: {
    enabled: true,
    formatter(value: number) {
      return Math.abs(value);
    },
    style: {
      colors: colors.dataLabelsTextColor,
    },
  },
  stroke: {
    width: 3,
    colors: colors.strokeColors,
  },
  grid: {
    xaxis: {
      lines: {
        show: false,
      },
    },
    yaxis: {
      lines: {
        show: false,
      },
    },
  },
  xaxis: {
    categories: ['+65', '55-64', '45-54', '35-44', '25-34', '16-24', '-15'],
    labels: {
      style: {
        colors: colors.xAxisLabelsTextColor,
      },
    },
  },
  legend: {
    show: false,
  },
});

export const options: RangeBarOptions = {
  chart: {
    type: 'bar',
    stacked: true,
    offsetY: 0,
  },
  tooltip: {
    theme: 'dark',
  },
  plotOptions: {
    bar: {
      horizontal: true,
      columnWidth: '90%',
    },
  },
  dataLabels: {
    enabled: true,
    formatter(value: number) {
      return Math.abs(value);
    },
    style: {
      colors: ['#F7F7F7'],
    },
  },
  stroke: {
    width: 3,
    colors: ['#fff'],
  },
  grid: {
    xaxis: {
      lines: {
        show: false,
      },
    },
    yaxis: {
      lines: {
        show: false,
      },
    },
  },
  xaxis: {
    categories: ['+65', '55-64', '45-54', '35-44', '25-34', '16-24', '-15'],
    labels: {
      style: {
        colors: '#969696',
      },
    },
  },
  legend: {
    show: false,
  },
};

export const height = 400;

export const buildYAxisData = (value: number, colors: RangeBarColors) => ({
  min: -value,
  max: value,
  labels: {
    style: {
      colors: colors.xAxisLabelsTextColor,
    },
  },
});
