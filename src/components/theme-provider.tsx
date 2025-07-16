'use client';

import * as React from 'react';

type Theme = 'dark' | 'light';
type ColorTheme = 'theme-orange' | 'theme-violet' | 'theme-indigo' | 'theme-rose';

interface ThemeProviderState {
  theme: Theme;
  setTheme: (theme: Theme) => void;
  colorTheme: ColorTheme;
  setColorTheme: (colorTheme: ColorTheme) => void;
  cycleColorTheme: () => void;
  toggleTheme: () => void;
}

const initialState: ThemeProviderState = {
  theme: 'light',
  setTheme: () => null,
  colorTheme: 'theme-orange',
  setColorTheme: () => null,
  cycleColorTheme: () => null,
  toggleTheme: () => null,
};

const ThemeProviderContext = React.createContext<ThemeProviderState>(initialState);

const colorThemes: ColorTheme[] = ['theme-orange', 'theme-violet', 'theme-indigo', 'theme-rose'];

export function ThemeProvider({
  children,
  defaultTheme = 'light',
  defaultColorTheme = 'theme-orange',
  storageKey = 'vite-ui-theme',
  colorStorageKey = 'vite-ui-color-theme',
}: {
  children: React.ReactNode;
  defaultTheme?: Theme;
  defaultColorTheme?: ColorTheme;
  storageKey?: string;
  colorStorageKey?: string;
}) {
  const [theme, setTheme] = React.useState<Theme>(() => (typeof window !== 'undefined' ? (localStorage.getItem(storageKey) as Theme) || defaultTheme : defaultTheme));
  const [colorTheme, setColorTheme] = React.useState<ColorTheme>(() => (typeof window !== 'undefined' ? (localStorage.getItem(colorStorageKey) as ColorTheme) || defaultColorTheme : defaultColorTheme));

  React.useEffect(() => {
    const root = window.document.documentElement;
    root.classList.remove('light', 'dark');
    root.classList.add(theme);
  }, [theme]);

  React.useEffect(() => {
    const root = window.document.documentElement;
    colorThemes.forEach((t) => root.classList.remove(t));
    root.classList.add(colorTheme);
  }, [colorTheme]);


  const cycleColorTheme = () => {
    const currentIndex = colorThemes.indexOf(colorTheme);
    const nextIndex = (currentIndex + 1) % colorThemes.length;
    const nextColorTheme = colorThemes[nextIndex];
    setColorTheme(nextColorTheme);
    localStorage.setItem(colorStorageKey, nextColorTheme);
  };
  
  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    localStorage.setItem(storageKey, newTheme);
  };


  const value = {
    theme,
    setTheme: (newTheme: Theme) => {
      localStorage.setItem(storageKey, newTheme);
      setTheme(newTheme);
    },
    colorTheme,
    setColorTheme: (newColorTheme: ColorTheme) => {
        localStorage.setItem(colorStorageKey, newColorTheme);
        setColorTheme(newColorTheme);
    },
    cycleColorTheme,
    toggleTheme,
  };

  return (
    <ThemeProviderContext.Provider value={value}>
      {children}
    </ThemeProviderContext.Provider>
  );
}

export const useTheme = () => {
  const context = React.useContext(ThemeProviderContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};
