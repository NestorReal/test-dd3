import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    name: string;
    icons: {
      dropdown: string;
      arrowdownright: string,
      arrowupright: string,
    };
    background: {
      topmenu: { main: string; hovered: string };
      aside: {
        main: string;
        secondary: string;
        selected: string;
      };
      filters: string;
      datacard: {
        main: string,
        increment: string,
        decrement: string,
      };
      main: string;
      secondary: string;
      scrolledbar: string;
    };
    borders: {
      usermenu: string;
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
    };
  }
}
