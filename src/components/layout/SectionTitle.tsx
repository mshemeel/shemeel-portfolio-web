import React from 'react';
import styles from './SectionTitle.module.css';

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
        <span className={styles.subtitle}>{subtitle}</span>
      )}
      <h2 className={styles.title}>{title}</h2>
      <div className={styles.underline}>
        <span className={styles.line}></span>
        <span className={styles.dot}></span>
        <span className={styles.line}></span>
      </div>
    </div>
  );
} 