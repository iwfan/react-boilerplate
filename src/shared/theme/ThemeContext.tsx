import React, { createContext, useContext, useEffect, useState } from 'react';
import { Theme, ThemeContextType } from './types';
import {
  getSystemTheme,
  getResolvedTheme,
  applyThemeToDocument,
  saveThemePreference,
  loadThemePreference,
} from './utils';

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export interface ThemeProviderProps {
  children: React.ReactNode;
  defaultTheme?: Theme;
  enableSystem?: boolean;
  storageKey?: string;
  attribute?: 'class' | 'data-theme';
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({
  children,
  defaultTheme = 'system',
  enableSystem = true,
}) => {
  const [theme, setThemeState] = useState<Theme>(() => {
    const savedTheme = loadThemePreference();
    return savedTheme || defaultTheme;
  });

  const resolvedTheme = getResolvedTheme(theme);

  useEffect(() => {
    const savedTheme = loadThemePreference();
    if (savedTheme) {
      setThemeState(savedTheme);
    }
  }, []);

  useEffect(() => {
    applyThemeToDocument(resolvedTheme);
  }, [resolvedTheme]);

  useEffect(() => {
    if (theme === 'system' && enableSystem) {
      const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');

      const handleChange = () => {
        applyThemeToDocument(getSystemTheme());
      };

      if (mediaQuery.addEventListener) {
        mediaQuery.addEventListener('change', handleChange);
      } else if (mediaQuery.addListener) {
        mediaQuery.addListener(handleChange);
      }

      return () => {
        if (mediaQuery.removeEventListener) {
          mediaQuery.removeEventListener('change', handleChange);
        } else if (mediaQuery.removeListener) {
          mediaQuery.removeListener(handleChange);
        }
      };
    }
  }, [theme, enableSystem]);

  const setTheme = (newTheme: Theme) => {
    setThemeState(newTheme);
    saveThemePreference(newTheme);
  };

  const value: ThemeContextType = {
    theme,
    setTheme,
    resolvedTheme,
  };

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
};

export const useTheme = (): ThemeContextType => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};