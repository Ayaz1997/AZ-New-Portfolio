'use client';

import * as React from 'react';

type Theme = 'orange' | 'violet' | 'indigo' | 'rose' | 'dark';

interface ThemeProviderState {
  theme: Theme;
  setTheme: (theme: Theme) => void;
  cycleTheme: () => void;
}

const initialState: ThemeProviderState = {
  theme: 'orange',
  setTheme: () => null,
  cycleTheme: () => null,
};

const ThemeProviderContext = React.createContext<ThemeProviderState>(initialState);

const themes: Theme[] = ['orange', 'violet', 'indigo', 'rose', 'dark'];
const colorThemes: string[] = ['theme-orange', 'theme-violet', 'theme-indigo', 'theme-rose'];

export function ThemeProvider({
  children,
  defaultTheme = 'orange',
  storageKey = 'ayaz-portfolio-theme',
}: {
  children: React.ReactNode;
  defaultTheme?: Theme;
  storageKey?: string;
}) {
  const [theme, setTheme] = React.useState<Theme>(
    () => (typeof window !== 'undefined' ? (localStorage.getItem(storageKey) as Theme) || defaultTheme : defaultTheme)
  );

  React.useEffect(() => {
    const root = window.document.documentElement;

    root.classList.remove(...themes);
    root.classList.remove(...colorThemes);

    if (theme === 'dark') {
      root.classList.add('dark');
      root.classList.add('theme-orange'); // Default color theme for dark mode
    } else {
      root.classList.add('light');
      root.classList.add(`theme-${theme}`);
    }
  }, [theme]);

  const cycleTheme = () => {
    const currentIndex = themes.indexOf(theme);
    const nextIndex = (currentIndex + 1) % themes.length;
    const nextTheme = themes[nextIndex];
    setTheme(nextTheme);
    localStorage.setItem(storageKey, nextTheme);
  };

  const value = {
    theme,
    setTheme: (newTheme: Theme) => {
      localStorage.setItem(storageKey, newTheme);
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
