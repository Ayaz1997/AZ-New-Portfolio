'use client';

import * as React from 'react';
import { Moon, Sun, Palette } from 'lucide-react';
import { useTheme } from '@/components/theme-provider';
import { Button } from '@/components/ui/button';

export function ThemeToggle() {
  const { theme, toggleTheme, cycleColorTheme } = useTheme();

  return (
    <div className="flex gap-2">
      <Button variant="outline" size="icon" onClick={cycleColorTheme}>
        <Palette className="h-[1.2rem] w-[1.2rem]" />
        <span className="sr-only">Cycle color theme</span>
      </Button>
      <Button variant="outline" size="icon" onClick={toggleTheme}>
        <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
        <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
        <span className="sr-only">Toggle dark mode</span>
      </Button>
    </div>
  );
}
