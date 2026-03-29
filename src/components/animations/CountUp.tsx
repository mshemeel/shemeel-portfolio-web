'use client';

import { useRef, useEffect, useState, useCallback } from 'react';
import { useAnimateOnScroll } from '@/animations/useAnimateOnScroll';
import styles from './CountUp.module.css';

interface CountUpProps {
  target: number;
  duration?: number;
  suffix?: string;
  prefix?: string;
  className?: string;
}

function easeOutCubic(t: number): number {
  return 1 - Math.pow(1 - t, 3);
}

export default function CountUp({
  target,
  duration = 2000,
  suffix = '',
  prefix = '',
  className = '',
}: CountUpProps) {
  const { elementRef, isInView } = useAnimateOnScroll({ threshold: 0.3, triggerOnce: true });
  const [displayValue, setDisplayValue] = useState(0);
  const hasAnimated = useRef(false);
  const rafId = useRef<number | null>(null);

  const animate = useCallback(() => {
    if (hasAnimated.current) return;
    hasAnimated.current = true;

    const startTime = performance.now();

    const step = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const easedProgress = easeOutCubic(progress);

      setDisplayValue(Math.round(easedProgress * target));

      if (progress < 1) {
        rafId.current = requestAnimationFrame(step);
      }
    };

    rafId.current = requestAnimationFrame(step);
  }, [target, duration]);

  useEffect(() => {
    if (isInView && !hasAnimated.current) {
      // Respect reduced-motion: show final value immediately
      const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      if (prefersReducedMotion) {
        setDisplayValue(target);
        hasAnimated.current = true;
      } else {
        animate();
      }
    }

    return () => {
      if (rafId.current !== null) {
        cancelAnimationFrame(rafId.current);
      }
    };
  }, [isInView, animate, target]);

  return (
    <span ref={elementRef} className={`${styles.countUp} ${className}`}>
      {prefix}{displayValue}{suffix}
    </span>
  );
}
