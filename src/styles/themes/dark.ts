import { DefaultTheme } from 'styled-components';

export default {
  name: 'dark',

  colors: {
    primary: '#009688',
    secondary: '#e5ddd5',
    background: '#222',
    text: '#fff',

    white: '#fff',

    black: '#222',
    lightBlack: '#333',
    darkBlack: '#000',

    gray: '#999',
    lightGray: '#ccc',
    darkGray: '#666',

    red: '#f02e3e',
    green: '#10cc55',
    blue: '#3e44ed',
    purple: '#a121d9',
    pink: '#de28bc',
    orange: '#eda126',
    yellow: '#e3e339',
  },

  padding: {
    xs: '4px',
    sm: '8px',
    md: '16px',
    lg: '24px',
    xl: '36px',
  },

  margins: {
    xs: '4px',
    sm: '8px',
    md: '16px',
    lg: '24px',
    xl: '36px',
  },
} as DefaultTheme;
