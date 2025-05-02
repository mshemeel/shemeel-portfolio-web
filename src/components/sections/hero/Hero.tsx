'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import styles from './Hero.module.css';
import AnimatedElement from '@/components/layout/AnimatedElement';
import heroData from '@/data/hero.json';

/**
 * Hero section with animated introduction and professional photo
 */
export default function Hero() {
  const [typedText, setTypedText] = useState('');
  const fullText = heroData.typingText;
  const [showCursor, setShowCursor] = useState(true);

  // Typing animation effect
  useEffect(() => {
    if (typedText.length < fullText.length) {
      const timeout = setTimeout(() => {
        setTypedText(fullText.slice(0, typedText.length + 1));
      }, 80);
      return () => clearTimeout(timeout);
    } else {
      // Blinking cursor effect after typing is complete
      const interval = setInterval(() => {
        setShowCursor((prev) => !prev);
      }, 500);
      return () => clearInterval(interval);
    }
  }, [typedText, fullText]);

  return (
    <section id="hero" className={styles.hero}>
      <div className="container">
        <div className={styles.content}>
          <div className={styles.textContent}>
            <AnimatedElement animation="fade-up" delay={0.2}>
              <h1 className={styles.name}>{heroData.name}</h1>
            </AnimatedElement>
            
            <AnimatedElement animation="fade-up" delay={0.4}>
              <div className={styles.titleWrapper}>
                <p className={styles.title}>
                  {typedText}
                  <span className={`${styles.cursor} ${showCursor ? styles.blink : ''}`}>|</span>
                </p>
              </div>
            </AnimatedElement>
            
            <AnimatedElement animation="fade-up" delay={0.6}>
              <p className={styles.description}>
                {heroData.description}
              </p>
            </AnimatedElement>
            
            <AnimatedElement animation="fade-up" delay={0.8}>
              <div className={styles.actions}>
                {heroData.buttons.map((button, index) => (
                  <a 
                    key={index} 
                    href={button.link} 
                    className={button.isPrimary ? styles.primaryButton : styles.secondaryButton}
                  >
                    {button.text}
                </a>
                ))}
              </div>
            </AnimatedElement>
          </div>
          
          <AnimatedElement animation="fade-left" delay={0.5} className={styles.imageWrapper}>
            <div className={styles.imageContainer}>
              <Image 
                src={heroData.profileImage}
                alt={heroData.name} 
                width={400}
                height={400}
                priority
                className={styles.profileImage}
              />
              <div className={styles.backgroundShape}></div>
            </div>
          </AnimatedElement>
        </div>
        
        <div className={styles.scrollIndicator}>
          <div className={styles.mouse}>
            <div className={styles.wheel}></div>
          </div>
          <div className={styles.scrollText}>Scroll Down</div>
        </div>
      </div>
    </section>
  );
} 