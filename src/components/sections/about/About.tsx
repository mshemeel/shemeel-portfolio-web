'use client';

import React from 'react';
import styles from './About.module.css';
import AnimatedElement from '@/components/layout/AnimatedElement';
import SectionTitle from '@/components/layout/SectionTitle';
import CountUp from '@/components/animations/CountUp';
import aboutData from '@/data/about.json';

function parseStatNumber(value: string): { num: number; suffix: string } {
  const match = value.match(/^(\d+(?:\.\d+)?)(.*)/);
  if (!match) return { num: 0, suffix: '' };
  return { num: parseFloat(match[1]), suffix: match[2] };
}

/**
 * About section component
 */
export default function About() {
  const { bio, stats, resumeLink } = aboutData;

  return (
    <section id="about" className={styles.about}>
      <div className="container">
        <AnimatedElement animation="blur-up">
          <SectionTitle
            title="About Me"
            subtitle="My Introduction"
          />
        </AnimatedElement>
        
        <div className={styles.content}>
          <AnimatedElement animation="blur-right" delay={0.2} className={styles.imageColumn}>
            <div className={styles.imageWrapper}>
              <div className={styles.patternBackground}></div>
              <div className={styles.profileImageContainer}></div>
              <div className={styles.experienceBadge}>
                <span className={styles.years}>
                  <CountUp target={parseStatNumber(stats[0].number).num} suffix={parseStatNumber(stats[0].number).suffix} />
                </span>
                <span className={styles.text}>{stats[0].label.split(/<br\s*\/?>/i).map((part, i, arr) => (
                  <React.Fragment key={i}>{part}{i < arr.length - 1 && <br />}</React.Fragment>
                ))}</span>
              </div>
            </div>
          </AnimatedElement>
          
          <AnimatedElement animation="blur-left" delay={0.3} className={styles.textColumn}>
            <div className={styles.aboutText}>
              {bio.map((paragraph, index) => (
                <p key={index} className={styles.bio}>
                  {paragraph}
                </p>
              ))}
            </div>
            
            <div className={styles.stats}>
              {stats.map((stat, index) => (
                <div key={index} className={styles.statItem}>
                  <h3 className={styles.statNumber}>
                    <CountUp target={parseStatNumber(stat.number).num} suffix={parseStatNumber(stat.number).suffix} />
                  </h3>
                  <p className={styles.statLabel}>{stat.label.split(/<br\s*\/?>/i).map((part, i, arr) => (
                    <React.Fragment key={i}>{part}{i < arr.length - 1 && <br />}</React.Fragment>
                  ))}</p>
              </div>
              ))}
            </div>
            
            <AnimatedElement animation="blur-up" delay={0.5}>
              <a href={resumeLink} download className={styles.downloadButton}>
                Download CV
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                  <polyline points="7 10 12 15 17 10"></polyline>
                  <line x1="12" y1="15" x2="12" y2="3"></line>
                </svg>
              </a>
            </AnimatedElement>
          </AnimatedElement>
        </div>
      </div>
    </section>
  );
} 