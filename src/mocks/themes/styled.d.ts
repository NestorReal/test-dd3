import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    name: string;
    icons: {
      dropdown: string;
      arrowdownright: string;
      arrowupright: string;
      clean: string;
    };
    background: {
      topmenu: { main: string; hovered: string };
      aside: {
        main: string;
        secondary: string;
        selected: string;
      };
      button: {
        primary: string;
        secondary: string;
      };
      filters: string;
      switchOn: string,
      switchOff: string,
      datacard: {
        main: string;
        increment: string;
        decrement: string;
      };
      pills: string;
      main: string;
      secondary: string;
      scrolledbar: string;
      checkbox: string;
      field: string;
      selector: string;
      skeleton: string;
    };
    borders: {
      usermenu: string;
      field: {
        main: string;
        error: string;
      };
      selector: string;
    };
    text: {
      section: {
        main: string;
        title: string;
        subtitle: string;
      };
      topmenu: {
        main: string;
      };
      aside: {
        main: string;
        secondary: string;
      };
      filters: {
        title: string;
        subtitle: string;
        option: string;
      };
      datacard: {
        title: string;
        increment: string;
        decrement: string;
        value: string;
      };
      scrolledbar: {
        main: string;
      };
      field: {
        main: string;
        label: string;
        required: string;
        error: string;
        placeholder: string;
      };
      message: {
        error: string;
      };
    };
    graphs: {
      heatmap: {
        yAxisLabelsTextColor: string | string[];
        xAxisLabelsTextColor: string | string[];
        dataLabelsTextColor: string[];
      };
      rangeBar: {
        yAxisLabelsTextColor: string | string[];
        xAxisLabelsTextColor: string | string[];
        dataLabelsTextColor: string[];
        strokeColors: string[];
        bars: {
          gender: string[];
        };
      };
      graphBar: {
        dataLabelsTextColor: string[];
        bars: {
          clientsDashboard: string[];
          clientsLocation: string[];
        };
      };
      groupedGraph: {
        bars: {
          gender: string[];
          ageRange: string[];
          clients: string[];
        };
      };
    };
  }
}
