type genericObject = {};
let leakedDate: string = '';
// eslint-disable-next-line no-return-assign
export const getleakedDate = (label: string | undefined) => (label !== undefined ? leakedDate = label : null);
// ${leakedDate}
export const options: genericObject = {
  chart: {
    type: 'bar',
    height: 500,
    stacked: false,
  },
  tooltip: {
    shared: true,
    intersect: false,
    custom(series: any) {
      const { dataPointIndex } = series;
      const { seriesIndex } = series;
      const { mainRange } = series.w.config.series[seriesIndex];
      
      const tooltip = `
        <div class="tooltipHead">
          <div class="info  space">
            <div>${leakedDate}</div>
            <div>&nbsp;&nbsp;&nbsp;</div>
            <div>${mainRange[0].substring(0, 10)} / ${mainRange[1].substring(0, 10)}</div>
          </div>
          <table class="tableTooltip">
            ${series.w.config.series.map(
              (item: any, index: number) =>`
                <tr>
                  <td>
                    <div class="info" style="justify-content: start;">
                      <div class="circle" style="background: ${item.labels[index] !== undefined && series.w.config.fill.colors[index]}" ></div>
                      ${item.labels[index] !== undefined
                        ? item.labels[index].toString().replace(',','-')
                        : series.w.globals.labels[dataPointIndex]}
                    </div
                  </td>
                  <td>${item.data[dataPointIndex]}</td>
                  <td>
                    ${item.diff[dataPointIndex] ? `${item.diff[dataPointIndex]}%` : '----'}
                  </td>
                <tr>
            `)}
          </table>
        </div>`;
      return tooltip.replace(/,/g, '');
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
      },
    },
  },
  yaxis: {
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
