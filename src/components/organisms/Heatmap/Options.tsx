
import { builderTooltip } from './BuilderTooltip';
import { humanFormat } from '../../../helpers/graphsHelpers/graphs/humanFormat';

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
      plotOptions: {},
      xaxis: {
        type: 'category',
        categories: ['L', 'Ma', 'Mi', 'J', 'V', 'S', 'D'],
        position: 'top',
        labels: {
          style: {
            colors: '#5d2c55',
            fontSize: '16px',
            fontWeight: 500,
            fontFamily: 'Helvetica',
          },
        },
      },
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
}
export const width = 900;
export const height = 200;
