import { ApexOptions } from 'apexcharts';
import { builderTooltip } from './BuilderTooltip';
import { humanFormat } from '../../../helpers/graphsHelpers/graphs/humanFormat';
import { ApexXAxis } from '../../../types/graphs/heatmap';

let leakedDate: string[] = [];
// eslint-disable-next-line no-return-assign
export const getleakedDate = (label: string[] | undefined) => (label !== undefined ? leakedDate = label : null);

type HeatmapOptions = Pick<ApexOptions, 'tooltip' | 'yaxis' | 'stroke' | 'dataLabels' | 'legend'>;
type HeatmapColors = {
  yAxisLabelsTextColor: string | string[];
  xAxisLabelsTextColor: string | string[];
  dataLabelsTextColor: string[];
};

export const buildOptions = (colors: HeatmapColors): HeatmapOptions => ({
  tooltip: {
    shared: true,
    intersect: false,
    custom(series: any) {
      const { dataPointIndex } = series;
      const { seriesIndex } = series;
      const currentValue = series.series[seriesIndex][dataPointIndex];
      const comparedValue = series.w.config.series[seriesIndex].comparedData[dataPointIndex];
      const diff = series.w.config.series[seriesIndex].diff[dataPointIndex];
      const { mainRange } = series.w.config.series[seriesIndex];
      const { secondaryRange } = series.w.config.series[seriesIndex];
      const labels = series.w.globals.seriesNames;
      const comparison = `
        <hr />
        ${builderTooltip(
          secondaryRange[0],
          secondaryRange[1],
          labels[seriesIndex],
          comparedValue,
          diff,
          true,
          leakedDate[1],
        )}
      `;
      return `
        <div>
          ${builderTooltip(
            mainRange[0],
            mainRange[1],
            labels[seriesIndex],
            currentValue,
            diff,
            false,
            leakedDate[0],
          )}
          ${secondaryRange[0] ? comparison : ''}
        </div>
      `;
    },
  },
  yaxis: {
    labels: {
      style: {
        colors: `${colors.yAxisLabelsTextColor}`,
      },
    },
  },
  stroke: {
    width: 13,
  },
  dataLabels: {
    enabled: true,
    textAnchor: 'middle',
    formatter(value, { seriesIndex, w }) {
      if (w.config.series[seriesIndex].name === 'Tasa de conversión') {
        return `${value}%`;
      }
      return humanFormat(value);
    },
    style: {
      colors: colors.dataLabelsTextColor,
    },
  },
  legend: {
    show: false,
  },
});

export const buildAxisData = (labels: string[], colors: HeatmapColors): ApexXAxis => ({
  type: 'category',
  categories: labels,
  position: 'top',
  labels: {
    style: {
      colors: colors.xAxisLabelsTextColor,
    },
  },
});
