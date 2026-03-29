'use client';

import React from 'react';
import styles from './SectionTitle.module.css';
import TextReveal from '@/components/animations/TextReveal';

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  align?: 'left' | 'center' | 'right';
}

/**
 * SectionTitle - A consistent heading component for section headers
 */
export default function SectionTitle({
  title,
  subtitle,
  align = 'center'
}: SectionTitleProps) {
  return (
    <div className={`${styles.sectionTitle} ${styles[align]}`}>
      {subtitle && (
        <TextReveal as="span" className={styles.subtitle} stagger={0.03}>
          {subtitle}
        </TextReveal>
      )}
      <h2 className={styles.title}>
        <TextReveal stagger={0.04} delay={0.1}>
          {title}
        </TextReveal>
      </h2>
      <div className={styles.underline}>
        <span className={styles.line}></span>
        <span className={styles.dot}></span>
        <span className={styles.line}></span>
      </div>
    </div>
  );
}
