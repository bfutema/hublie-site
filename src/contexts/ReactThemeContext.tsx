import React, { useMemo, useState, useCallback } from 'react';

import { ThemeProvider as StyledProvider } from 'styled-components';

import { themes } from '@/styles/themes';

export interface ThemeContext {
  theme: 'dark' | 'light';
  toggleTheme: () => void;
}

export const ThemeContext = React.createContext<ThemeContext>(
  {} as ThemeContext,
);

interface IThemeProviderProps {
  children: React.ReactNode;
}

export const ThemeProvider: React.FC<IThemeProviderProps> = ({ children }) => {
  const [theme, setTheme] = useState<'dark' | 'light'>('light');

  const toggleTheme = useCallback(() => {
    setTheme((prevTheme) => (prevTheme === 'dark' ? 'light' : 'dark'));
  }, []);

  const value: ThemeContext = useMemo(
    () => ({ theme, toggleTheme }),
    [theme, toggleTheme],
  );

  return (
    <ThemeContext.Provider value={value}>
      <StyledProvider theme={themes[theme]}>{children}</StyledProvider>
    </ThemeContext.Provider>
  );
};
