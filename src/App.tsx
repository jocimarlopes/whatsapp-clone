import React from 'react';
import { ThemeProvider } from 'styled-components';
import { Router } from 'react-router-dom';

import useThemeState from '@hooks/useThemeState';

import history from './services/history';
import themes from './styles/themes';

import GlobalStyles from './styles/global';
import Routes from './routes';

function App() {
  const [theme, setTheme] = useThemeState('main');

  return (
    <Router history={history}>
      <ThemeProvider theme={themes[theme]}>
        <Routes />

        <GlobalStyles />
      </ThemeProvider>
    </Router>
  );
}

export default App;
