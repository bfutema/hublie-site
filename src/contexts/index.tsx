import React from 'react';

import { ThemeProvider } from './ReactThemeContext';

interface AppContextProps {
  children: React.ReactNode;
}

export const AppContext: React.FC<AppContextProps> = ({ children }) => {
  return <ThemeProvider>{children}</ThemeProvider>;
};
