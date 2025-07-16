'use client';

import * as React from 'react';
import { Brush } from 'lucide-react';
import { useTheme } from '@/components/theme-provider';
import { Button } from '@/components/ui/button';

export function ThemeToggle() {
  const { cycleTheme } = useTheme();

  return (
    <Button variant="outline" size="icon" onClick={cycleTheme}>
      <Brush className="h-[1.2rem] w-[1.2rem]" />
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
}
