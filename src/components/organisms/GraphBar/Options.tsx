import { builderTooltip } from './BuilderTooltip';

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
  chart: {
    type: 'bar',
    stacked: true,
  },
  plotOptions: {
    bar: {
      borderRadius: 8,
      distributed: true,
      endingShape: 'rounded',
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
  xaxis: {
    labels: {
      show: false,
    },
    axisBorder: {
      show: false,
      color: '#78909C',
      height: 1,
      width: '100%',
      offsetX: 0,
      offsetY: 0,
    },
    axisTicks: {
      show: false,
      borderType: 'solid',
      color: '#78909C',
      height: 6,
      offsetX: 0,
      offsetY: 0,
    },
  },
  fill: {
    opacity: 1,
  },
};

export const height = 300;
