'use client';

import React, { ElementType } from 'react';
import { useAnimateOnScroll } from '@/animations/useAnimateOnScroll';
import styles from './StaggerGroup.module.css';

interface StaggerGroupProps {
  children: React.ReactNode;
  staggerDelay?: number;
  className?: string;
  as?: ElementType;
  threshold?: number;
}

export default function StaggerGroup({
  children,
  staggerDelay = 0.06,
  className = '',
  as: Component = 'div',
  threshold = 0.1,
}: StaggerGroupProps) {
  const { elementRef, isInView } = useAnimateOnScroll({ threshold, triggerOnce: true });

  const staggeredChildren = React.Children.map(children, (child, index) => {
    if (!React.isValidElement(child)) return child;
    return React.cloneElement(child as React.ReactElement<Record<string, unknown>>, {
      style: {
        ...(child.props as Record<string, unknown>).style as React.CSSProperties | undefined,
        '--stagger-index': index,
        '--stagger-delay': `${staggerDelay}s`,
      } as React.CSSProperties,
    });
  });

  return (
    <Component
      ref={elementRef}
      className={`${styles.group} ${isInView ? styles.visible : ''} ${className}`}
    >
      {staggeredChildren}
    </Component>
  );
}
