'use client';

import { useEffect, useRef, RefObject } from 'react';

/**
 * Sets --scroll-progress CSS custom property (0-1) on the element
 * based on its position in the viewport. Uses direct DOM manipulation
 * to avoid React re-renders.
 */
export function useScrollProgress(elementRef: RefObject<HTMLElement | null>) {
  const rafRef = useRef<number>(0);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    // Disable on mobile for performance
    if (window.matchMedia('(max-width: 768px)').matches) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const update = () => {
      const rect = element.getBoundingClientRect();
      const viewportHeight = window.innerHeight;
      const elementHeight = rect.height;

      // 0 = element just entering bottom, 1 = element just exiting top
      const progress = (viewportHeight - rect.top) / (viewportHeight + elementHeight);
      const clamped = Math.max(0, Math.min(1, progress));

      element.style.setProperty('--scroll-progress', clamped.toFixed(3));
      rafRef.current = requestAnimationFrame(update);
    };

    rafRef.current = requestAnimationFrame(update);

    return () => {
      cancelAnimationFrame(rafRef.current);
    };
  }, [elementRef]);
}
