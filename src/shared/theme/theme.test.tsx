import { describe, it, expect, vi } from 'vitest';
import { renderHook, act } from '@testing-library/react';
import { ThemeProvider, useTheme } from './ThemeContext';
import { getSystemTheme, getResolvedTheme, applyThemeToDocument } from './utils';

// Mock localStorage
const localStorageMock = {
  getItem: vi.fn(),
  setItem: vi.fn(),
  removeItem: vi.fn(),
  clear: vi.fn(),
};
global.localStorage = localStorageMock as any;

// Mock window.matchMedia
Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: vi.fn().mockImplementation(query => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: vi.fn(),
    removeListener: vi.fn(),
    addEventListener: vi.fn(),
    removeEventListener: vi.fn(),
    dispatchEvent: vi.fn(),
  })),
});

describe('Theme Utilities', () => {
  it('should return system theme preference', () => {
    // Mock dark theme
    Object.defineProperty(window, 'matchMedia', {
      value: vi.fn().mockImplementation(() => ({ matches: true })),
    });
    expect(getSystemTheme()).toBe('dark');

    // Mock light theme
    Object.defineProperty(window, 'matchMedia', {
      value: vi.fn().mockImplementation(() => ({ matches: false })),
    });
    expect(getSystemTheme()).toBe('light');
  });

  it('should resolve theme correctly', () => {
    expect(getResolvedTheme('light')).toBe('light');
    expect(getResolvedTheme('dark')).toBe('dark');

    // Mock system preference
    Object.defineProperty(window, 'matchMedia', {
      value: vi.fn().mockImplementation(() => ({ matches: true })),
    });
    expect(getResolvedTheme('system')).toBe('dark');
  });

  it('should apply theme to document element', () => {
    const mockClassList = {
      add: vi.fn(),
      remove: vi.fn(),
    };
    Object.defineProperty(document, 'documentElement', {
      value: { classList: mockClassList },
    });

    applyThemeToDocument('dark');
    expect(mockClassList.add).toHaveBeenCalledWith('dark');
    expect(mockClassList.remove).not.toHaveBeenCalled();

    applyThemeToDocument('light');
    expect(mockClassList.remove).toHaveBeenCalledWith('dark');
  });
});

describe('ThemeContext', () => {
  it('should provide theme context', () => {
    const wrapper = ({ children }: { children: React.ReactNode }) => (
      <ThemeProvider>{children}</ThemeProvider>
    );

    const { result } = renderHook(() => useTheme(), { wrapper });

    expect(result.current.theme).toBeDefined();
    expect(result.current.setTheme).toBeDefined();
    expect(result.current.resolvedTheme).toBeDefined();
  });

  it('should update theme when setTheme is called', () => {
    const wrapper = ({ children }: { children: React.ReactNode }) => (
      <ThemeProvider>{children}</ThemeProvider>
    );

    const { result } = renderHook(() => useTheme(), { wrapper });

    act(() => {
      result.current.setTheme('dark');
    });

    expect(result.current.theme).toBe('dark');
    expect(result.current.resolvedTheme).toBe('dark');
  });
});