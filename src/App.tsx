import React from 'react';
import { ThemeProvider } from 'styled-components';

import useThemeState from '@hooks/useThemeState';

import GlobalStyles from './styles/global';
import themes from './styles/themes';

function App() {
  const [theme, setTheme] = useThemeState('main');

  return (
    <ThemeProvider theme={themes[theme]}>
      <button
        type="button"
        onClick={() => setTheme(theme === 'main' ? 'dark' : 'main')}
      >
        trocar tema
      </button>

      <GlobalStyles />
    </ThemeProvider>
  );
}

export default App;
