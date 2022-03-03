import { builderTooltip } from './BuilderTooltip';

let leakedDate: string[] = [];
// eslint-disable-next-line no-return-assign
export const getleakedDate = (label: string[] | undefined) => (label !== undefined ? leakedDate = label : null);
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
  chart: {
    type: 'bar',
    stacked: true,
  },
  plotOptions: {
    bar: {
      borderRadius: 8,
      distributed: true,
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

export const height = 300;
