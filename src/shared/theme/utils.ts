import { Theme } from './types';

/**
 * Get the system theme preference
 */
export const getSystemTheme = (): 'light' | 'dark' => {
  if (typeof window === 'undefined') return 'light';

  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
};

/**
 * Get the resolved theme (accounting for 'system' preference)
 */
export const getResolvedTheme = (theme: Theme): 'light' | 'dark' => {
  if (theme === 'system') {
    return getSystemTheme();
  }
  return theme;
};

/**
 * Apply theme to document element
 */
export const applyThemeToDocument = (theme: 'light' | 'dark') => {
  const root = window.document.documentElement;

  if (theme === 'dark') {
    root.classList.add('dark');
  } else {
    root.classList.remove('dark');
  }
};

/**
 * Save theme preference to localStorage
 */
export const saveThemePreference = (theme: Theme) => {
  try {
    localStorage.setItem('theme', theme);
  } catch (error) {
    console.warn('Failed to save theme preference:', error);
  }
};

/**
 * Load theme preference from localStorage
 */
export const loadThemePreference = (): Theme | null => {
  try {
    const stored = localStorage.getItem('theme');
    if (stored === 'light' || stored === 'dark' || stored === 'system') {
      return stored;
    }
  } catch (error) {
    console.warn('Failed to load theme preference:', error);
  }
  return null;
};