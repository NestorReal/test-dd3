type genericObject = {};

export const options: genericObject = {
  chart: {
    type: 'bar',
    height: 500,
    stacked: false,
  },
  tooltip: {
    theme: 'dark',
  },
  plotOptions: {
    bar: {
      horizontal: false,
      borderRadius: 6,
      endingShape: 'rounded',
      distributed: false,
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
};
export const height = 400;
