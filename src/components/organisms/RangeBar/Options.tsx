import { ApexOptions } from 'apexcharts';
import { humanFormat } from '../../../helpers/graphsHelpers/graphs/humanFormat';

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
    shared: false,
    y: {
      formatter(val) {
        return Math.abs(val).toString();
      },
    },
  },
  plotOptions: {
    bar: {
      horizontal: true,
      columnWidth: '90%',
      dataLabels: {
        position: 'top',
        hideOverflowingLabels: false,
      },
    },
  },
  dataLabels: {
    enabled: true,
    formatter(value: number) {
      if(value === 0){
        return '-';
      }
      return humanFormat(Math.abs(value));
    },
    offsetY: 0,
    offsetX: 30,
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
    categories: ['55-64', '45-54', '35-44', '25-34', '16-24', '0-15'],
    labels: {
      style: {
        colors: colors.xAxisLabelsTextColor,
      },
      formatter(value) {
        return Math.abs(Math.round(Number(value))).toString();
      },
    },
  },
  legend: {
    show: false,
  },
});

export const height = 400;

export const buildYAxisData = (value: number, colors: RangeBarColors) => {
  const minMax = value + value * 0.1;
  return {
    min: -minMax,
    max: minMax,
    labels: {
      style: {
        colors: colors.xAxisLabelsTextColor,
      },
    },
  };
};
