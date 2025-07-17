
'use client';

import * as React from 'react';

type Theme = 'orange' | 'violet' | 'indigo' | 'rose' | 'dark';

interface ThemeProviderState {
  theme: Theme;
  setTheme: (theme: Theme) => void;
  cycleTheme: () => void;
}

const initialState: ThemeProviderState = {
  theme: 'violet',
  setTheme: () => null,
  cycleTheme: () => null,
};

const ThemeProviderContext = React.createContext<ThemeProviderState>(initialState);

const themes: Theme[] = ['violet', 'orange', 'indigo', 'rose', 'dark'];
const colorThemes: string[] = ['theme-orange', 'theme-violet', 'theme-indigo', 'theme-rose'];

export function ThemeProvider({
  children,
  defaultTheme = 'violet',
  storageKey = 'ayaz-portfolio-theme',
}: {
  children: React.ReactNode;
  defaultTheme?: Theme;
  storageKey?: string;
}) {
  const [theme, setTheme] = React.useState<Theme>(defaultTheme);

  React.useEffect(() => {
    let storedTheme: Theme;
    try {
      storedTheme = (localStorage.getItem(storageKey) as Theme) || defaultTheme;
    } catch (e) {
      storedTheme = defaultTheme;
    }
    setTheme(storedTheme);
  }, [storageKey, defaultTheme]);

  React.useEffect(() => {
    const root = window.document.documentElement;

    root.classList.remove(...themes);
    root.classList.remove(...colorThemes);

    if (theme === 'dark') {
      root.classList.add('dark');
      root.classList.add('theme-violet'); // Default color theme for dark mode
    } else {
      root.classList.add('light');
      root.classList.add(`theme-${theme}`);
    }
    try {
      localStorage.setItem(storageKey, theme);
    } catch (e) {
      // Ignore
    }
  }, [theme, storageKey]);

  const cycleTheme = () => {
    const currentIndex = themes.indexOf(theme);
    const nextIndex = (currentIndex + 1) % themes.length;
    const nextTheme = themes[nextIndex];
    setTheme(nextTheme);
  };

  const value = {
    theme,
    setTheme: (newTheme: Theme) => {
      setTheme(newTheme);
    },
    cycleTheme,
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
