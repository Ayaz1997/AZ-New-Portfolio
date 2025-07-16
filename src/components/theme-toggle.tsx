'use client';

import * as React from 'react';
import { Moon, Sun, Palette } from 'lucide-react';
import { useTheme } from '@/components/theme-provider';
import { Button } from '@/components/ui/button';

export function ThemeToggle() {
  const { cycleTheme } = useTheme();

  return (
    <Button variant="outline" size="icon" onClick={cycleTheme}>
      <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
      <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
       <Palette className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all group-data-[theme=light]:rotate-0 group-data-[theme=light]:scale-100" />
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
}
