import { createContext, Dispatch, SetStateAction } from 'react';

import { Themes } from '@hooks/useThemeState';

interface AppContextProps {
  theme?: Themes;
  setTheme?: Dispatch<SetStateAction<Themes>>;
}

export default createContext<AppContextProps>({});
