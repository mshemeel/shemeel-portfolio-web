'use client';

import React, { useState, useEffect, useRef } from 'react';
import styles from './Preloader.module.css';

const MIN_DISPLAY_TIME = 1500;
const MAX_DISPLAY_TIME = 3000;

export default function Preloader() {
  const [count, setCount] = useState(0);
  const [phase, setPhase] = useState<'loading' | 'exit' | 'hidden'>('loading');
  const startTimeRef = useRef(Date.now());
  const rafRef = useRef<number>(0);

  useEffect(() => {
    // Skip if already shown this session
    if (sessionStorage.getItem('preloader-shown')) {
      setPhase('hidden');
      return;
    }

    // Check reduced motion preference
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      sessionStorage.setItem('preloader-shown', '1');
      setPhase('hidden');
      return;
    }

    document.body.style.overflow = 'hidden';

    const animate = () => {
      const elapsed = Date.now() - startTimeRef.current;
      const progress = Math.min(elapsed / MIN_DISPLAY_TIME, 1);
      // Ease-out curve: fast start, slow finish
      const eased = 1 - Math.pow(1 - progress, 3);
      const value = Math.round(eased * 100);
      setCount(value);

      if (value < 100) {
        rafRef.current = requestAnimationFrame(animate);
      } else {
        // Start exit after reaching 100
        setTimeout(() => {
          setPhase('exit');
          setTimeout(() => {
            setPhase('hidden');
            document.body.style.overflow = '';
            sessionStorage.setItem('preloader-shown', '1');
          }, 800);
        }, 300);
      }
    };

    rafRef.current = requestAnimationFrame(animate);

    // Hard timeout safety
    const safetyTimeout = setTimeout(() => {
      setPhase('exit');
      setTimeout(() => {
        setPhase('hidden');
        document.body.style.overflow = '';
        sessionStorage.setItem('preloader-shown', '1');
      }, 800);
    }, MAX_DISPLAY_TIME);

    return () => {
      cancelAnimationFrame(rafRef.current);
      clearTimeout(safetyTimeout);
      document.body.style.overflow = '';
    };
  }, []);

  if (phase === 'hidden') return null;

  return (
    <div className={`${styles.preloader} ${phase === 'exit' ? styles.exit : ''}`}>
      <div className={styles.name}>Portfolio</div>
      <div className={styles.counter}>{count}</div>
      <div className={styles.progressBar}>
        <div className={styles.progressFill} style={{ width: `${count}%` }} />
      </div>
    </div>
  );
}
