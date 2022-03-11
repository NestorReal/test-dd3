import { ApexOptions } from 'apexcharts';
import { builderTooltip } from './BuilderTooltip';
import changeDateFormat from "../../../helpers/compareTimeHelpers/changeDateFormat";

type GraphBarOptions = Pick<
  ApexOptions,
  'chart' | 'tooltip' | 'plotOptions' | 'responsive' | 'legend' | 'fill' | 'dataLabels' | 'yaxis'
>;

export const buildOptions = (dates: string[]): GraphBarOptions => {
  const [timeDateFilter, comparisonDateFilter] = dates;
  return {
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
            changeDateFormat(secondaryRange),
            labels[seriesIndex],
            comparedValue,
            diff,
            true,
            comparisonDateFilter,
          )}
        `;
        return `
          <div>
            ${builderTooltip(
              changeDateFormat(mainRange),
              labels[seriesIndex],
              currentValue,
              diff,
              false,
              timeDateFilter,
            )}
            ${secondaryRange[0] ? comparison : ''}
          </div>
        `;
      },
    },
    chart: {
      type: 'bar',
      stacked: true,
    },
    dataLabels: {
      enabled: true,
      distributed: false,
      offsetY: -20,
      offsetX: 0,
      style: {
        fontSize: '12px',
        colors: ["#304758"]
      },
    },
    responsive: [
      {
        breakpoint: 480,
        options: {
          legend: {
            position: 'bottom',
            offsetX: -10,
            offsetY: 0,
          },
        },
      },
    ],
    legend: {
      show: false,
    },
    fill: {
      opacity: 1,
    },
  };
};

export const height = 400;
