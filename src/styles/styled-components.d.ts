import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    name: string;

    colors: {
      primary: string;
      secondary: string;
      background: string;
      text: string;

      white: string;

      black: string;
      lightBlack: string;
      darkBlack: string;

      gray: string;
      lightGray: string;
      darkGray: string;

      red: string;
      green: string;
      blue: string;
      orange: string;
      purple: string;
      yellow: string;
      pink: string;
    };

    padding: {
      xs: string;
      sm: string;
      md: string;
      lg: string;
      xl: string;
    };

    margins: {
      xs: string;
      sm: string;
      md: string;
      lg: string;
      xl: string;
    };
  }
}
