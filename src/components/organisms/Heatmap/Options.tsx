import { builderTooltip } from './BuilderTooltip';
import { humanFormat } from '../../../helpers/graphsHelpers/graphs/humanFormat';
import { ApexXAxis } from '../../../types/graphs/heatmap';

type genericObject = {};

export const options: genericObject = {
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
      return `<div>
                        ${builderTooltip(
                          mainRange[0],
                          mainRange[1],
                          labels[seriesIndex],
                          currentValue,
                          diff,
                          false,
                        )}
                    <hr />
                        ${builderTooltip(
                          secondaryRange[0],
                          secondaryRange[1],
                          labels[seriesIndex],
                          comparedValue,
                          diff,
                          true,
                        )}
                </div>`;
    },
  },
  plotOptions: {},
  yaxis: {
    labels: {
      style: {
        colors: '#969696',
        fontSize: '13px',
        fontFamily: 'Helvetica',
      },
    },
  },
  stroke: {
    width: 13,
  },
  xaxis: {},
  dataLabels: {
    enabled: true,
    textAnchor: 'middle',
    formatter(value: object, { seriesIndex, w }: any) {
      if (w.config.series[seriesIndex].name === 'Tasa de conversión') {
        return `${value}%`;
      }
      return humanFormat(value);
    },
    style: {
      colors: ['#fff'],
      fontSize: '16px',
      fontFamily: 'Helvetica',
    },
  },
  legend: {
    show: false,
  },
};
export const height = 300;
/* eslint-disable import/prefer-default-export */
export const axisData = (labels: string[]) : ApexXAxis => ({
  type: 'category',
  categories: labels,
  position: 'top',
  labels: {
    style: {
      colors: '#5d2c55',
      fontSize: '16px',
      fontWeight: 500,
      fontFamily: 'Helvetica',
    },
  },
});
