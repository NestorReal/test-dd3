type genericObject = {};

export const options: genericObject = {
  chart: {
    type: 'bar',
    stacked: true,
    offsetY: 0,
  },
  tooltip: {
    theme: 'dark',
    style: {
      backgroundColor: '#fff',
    },
  },
  plotOptions: {
    bar: {
      horizontal: true,
      columnWidth: '90%',
    },
  },
  dataLabels: {
    enabled: true,
    formatter(value: number) {
      return Math.abs(value);
    },
    style: {
      colors: ['#F7F7F7'],
      fontSize: '10px',
      fontFamily: 'Helvetica',
    },
  },
  stroke: {
    width: 3,
    colors: ['#fff'],
  },
  grid: {
    xaxis: {
      lines: {
        show: false,
      },
    },
    yaxis: {
      lines: {
        show: false,
      },
    },
  },
  xaxis: {
    categories: ['+65', '55-64', '45-54', '35-44', '25-34', '16-24', '-15'],
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

export const yaxisData = (value: number) => ({
  min: -value,
  max: value,
  labels: {
    style: {
      colors: '#969696',
      fontSize: '13px',
      fontFamily: 'Helvetica',
    },
  },
});
