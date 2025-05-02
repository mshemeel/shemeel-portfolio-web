'use client';

import { useEffect, useRef, useState } from 'react';

interface AnimateOnScrollOptions {
  threshold?: number;
  rootMargin?: string;
  triggerOnce?: boolean;
}

/**
 * Custom hook to animate elements when they enter the viewport
 *
 * @param options Configuration options for the intersection observer
 * @returns Object containing ref to be attached to the element and boolean indicating if element is in view
 */
export const useAnimateOnScroll = ({
  threshold = 0.1,
  rootMargin = '0px',
  triggerOnce = true,
}: AnimateOnScrollOptions = {}) => {
  const elementRef = useRef<HTMLElement | null>(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting) {
          setIsInView(true);
          if (triggerOnce) {
            observer.disconnect();
          }
        } else if (!triggerOnce) {
          setIsInView(false);
        }
      },
      { threshold, rootMargin }
    );

    observer.observe(element);

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, [threshold, rootMargin, triggerOnce]);

  return { elementRef, isInView };
}; 