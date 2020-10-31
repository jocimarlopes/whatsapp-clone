import { useState, Dispatch, SetStateAction, useEffect } from 'react';

export type Themes = 'main' | 'dark';

export default function useThemeState(
  initialState?: Themes,
): [Themes, Dispatch<SetStateAction<Themes>>] {
  const [theme, setTheme] = useState<Themes>(initialState || 'main');

  useEffect(() => {
    const storedTheme = localStorage.getItem('theme') as Themes | undefined;

    if (storedTheme) {
      setTheme(storedTheme);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('theme', theme);
  }, [theme]);

  return [theme, setTheme];
}
