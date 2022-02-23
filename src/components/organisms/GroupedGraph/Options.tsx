import { ICustom } from '../../../types/graphs/groupedGraph';

type genericObject = {};

export const options: genericObject = {
  chart: {
    type: 'bar',
    height: 500,
    stacked: false,
  },
  tooltip: {
    shared: true,
    intersect: false,
    custom({ series, dataPointIndex, w: valuesGlobals }: ICustom) {
      const tooltip = `
        <div class="tooltipHead">
          <div>${valuesGlobals.globals.labels[dataPointIndex]}</div>
          ${series.map(
            (item, index) =>
              `<div class="info">
              <div class="info">
                <div class="circle" style="background: ${valuesGlobals.globals.colors[index]}" ></div>
                <div>${valuesGlobals.globals.labels[index]}</div>
              </div>
              <div>
                ${item[dataPointIndex]}
              </div>
            </div>`,
          )}
        </div>`;
      return tooltip;
    },
  },

  dataLabels: {
    enabled: false,
  },
  stroke: {
    show: true,
    width: 2,
    colors: ['transparent'],
  },
  xaxis: {
    labels: {
      style: {
        colors: '#969696',
        fontSize: '13px',
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
  legend: {
    show: false,
  },
};
export const height = 400;
