
'use client';

import { useScroll, type MotionValue } from 'framer-motion';
import { useRef, type RefObject } from 'react';

type UseScrollProgressOptions = Omit<Parameters<typeof useScroll>[0], 'target'>;

export function useScrollProgress(
  target?: RefObject<HTMLElement> | undefined,
  options?: UseScrollProgressOptions
): {
  scrollYProgress: MotionValue<number>;
  scrollXProgress: MotionValue<number>;
} {
  const innerRef = useRef<HTMLElement>(null);
  const ref = target || innerRef;

  const { scrollYProgress, scrollXProgress } = useScroll({
    target: ref,
    ...options,
  });

  return { scrollYProgress, scrollXProgress };
}
