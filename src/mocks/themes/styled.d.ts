import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    name: string;
    icons: {
      dropdown: string;
    };
    background: {
      topmenu: string;
      topmenuHovered: string;
      aside: string;
      filters: string;
      datacard: string;
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
