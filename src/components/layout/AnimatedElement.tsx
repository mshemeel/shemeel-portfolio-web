'use client';

import React, { ElementType } from 'react';
import { useAnimateOnScroll } from '@/animations/useAnimateOnScroll';
import styles from './AnimatedElement.module.css';

type AnimationType = 'fade-up' | 'fade-down' | 'fade-left' | 'fade-right' | 'zoom-in' | 'zoom-out';

interface AnimatedElementProps<T extends ElementType = 'div'> {
  children: React.ReactNode;
  animation: AnimationType;
  delay?: number;
  duration?: number;
  triggerOnce?: boolean;
  threshold?: number;
  className?: string;
  tag?: T;
}

/**
 * AnimatedElement - A component that animates its children when they enter the viewport
 */
export default function AnimatedElement<T extends ElementType = 'div'>({
  children,
  animation,
  delay = 0,
  duration = 0.5,
  triggerOnce = true,
  threshold = 0.1,
  className = '',
  tag: Tag = 'div' as T,
}: AnimatedElementProps<T>) {
  const { elementRef, isInView } = useAnimateOnScroll({
    threshold,
    triggerOnce,
  });

  return (
    <Tag
      ref={elementRef }
      className={`${styles.animated} ${styles[animation]} ${isInView ? styles.visible : ''} ${className}`}
      style={{
        '--delay': `${delay}s`,
        '--duration': `${duration}s`,
      } as React.CSSProperties}
    >
      {children}
    </Tag>
  );
} 