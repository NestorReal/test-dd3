import { builderTooltip } from './BuilderTooltip';

type genericObject = {};

export const options : genericObject = {
    tooltip: {
      shared: true,
      intersect: false,
      custom( series : any) {
          const { dataPointIndex } = series;
          const { seriesIndex } = series;
          const currentValue = series.series[seriesIndex][dataPointIndex];
          const comparedValue = series.w.config.series[seriesIndex].comparedData[dataPointIndex];
          const diff = series.w.config.series[seriesIndex].diff[dataPointIndex];
          const { mainRange } = series.w.config.series[seriesIndex];
          const { secondaryRange } = series.w.config.series[seriesIndex];
          const labels = series.w.globals.seriesNames;
          return (
              `<div>
                      ${builderTooltip(mainRange[0],
                          mainRange[1],
                          labels[seriesIndex], 
                          currentValue, 
                          diff,
                          false,
                          )
                      }
                  <hr />
                      ${builderTooltip(secondaryRange[0], 
                          secondaryRange[1], 
                          labels[seriesIndex], 
                          comparedValue, 
                          diff,
                          true
                          )
                      }
              </div>`
          );
      },
    },
    chart: {
      type: 'bar',
      height: 350,
      stacked: true,
    },
    plotOptions: {
      bar: {
        borderRadius: 8,
        distributed: true,
      },
    },
    responsive: [{
      breakpoint: 480,
      options: {
        legend: {
          position: 'bottom',
          offsetX: -10,
          offsetY: 0
        }
      }
    }],
    fill: {
      opacity: 1
    },
  }

export const height = 300;