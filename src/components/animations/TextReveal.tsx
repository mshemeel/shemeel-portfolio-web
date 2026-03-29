'use client';

import React, { ElementType } from 'react';
import { useAnimateOnScroll } from '@/animations/useAnimateOnScroll';
import styles from './TextReveal.module.css';

interface TextRevealProps {
  children: string;
  as?: ElementType;
  className?: string;
  delay?: number;
  stagger?: number;
  threshold?: number;
}

export default function TextReveal({
  children,
  as: Component = 'span',
  className = '',
  delay = 0,
  stagger = 0.05,
  threshold = 0.1,
}: TextRevealProps) {
  const { elementRef, isInView } = useAnimateOnScroll({ threshold, triggerOnce: true });

  const words = children.split(/\s+/).filter(Boolean);

  return (
    <Component
      ref={elementRef}
      className={`${styles.container} ${isInView ? styles.visible : ''} ${className}`}
      aria-label={children}
      style={{ '--word-stagger': `${stagger}s`, transitionDelay: `${delay}s` } as React.CSSProperties}
    >
      {words.map((word, index) => (
        <React.Fragment key={index}>
          <span
            className={styles.word}
            style={{ '--word-index': index } as React.CSSProperties}
            aria-hidden="true"
          >
            {word}
          </span>
          {index < words.length - 1 && ' '}
        </React.Fragment>
      ))}
    </Component>
  );
}
