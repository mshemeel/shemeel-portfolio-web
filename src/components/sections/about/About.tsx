'use client';

import React from 'react';
import styles from './About.module.css';
import AnimatedElement from '@/components/layout/AnimatedElement';
import SectionTitle from '@/components/layout/SectionTitle';

/**
 * About section component
 */
export default function About() {
  return (
    <section id="about" className={styles.about}>
      <div className="container">
        <AnimatedElement animation="fade-up">
          <SectionTitle
            title="About Me"
            subtitle="My Introduction"
          />
        </AnimatedElement>
        
        <div className={styles.content}>
          <AnimatedElement animation="fade-right" delay={0.2} className={styles.imageColumn}>
            <div className={styles.imageWrapper}>
              <div className={styles.patternBackground}></div>
              <div className={styles.profileImageContainer}></div>
              <div className={styles.experienceBadge}>
                <span className={styles.years}>7+</span>
                <span className={styles.text}>Years of<br />Experience</span>
              </div>
            </div>
          </AnimatedElement>
          
          <AnimatedElement animation="fade-left" delay={0.3} className={styles.textColumn}>
            <div className={styles.aboutText}>
              <p className={styles.paragraph}>
                Experienced Java Full Stack Developer with a proven track record of successfully delivering high-quality software solutions. 
                With 7 years of hands-on experience, I've honed my skills in a diverse range of technologies including Java, 
                Spring Boot, Spring Cloud, and microservices architecture.
              </p>
              
              <p className={styles.paragraph}>
                My passion for crafting efficient and scalable applications has driven me to excel in front-end technologies as well, 
                including React.js, React Native, and Redux. Throughout my career, I've collaborated with cross-functional teams to design, 
                develop, and deploy complex applications that meet both user needs and business objectives.
              </p>
              
              <p className={styles.paragraph}>
                My expertise lies in creating robust back-end systems that power intuitive and seamless user experiences on the front end.
                I'm passionate about clean code, following best practices, and continuously improving my skills.
              </p>
            </div>
            
            <div className={styles.stats}>
              <div className={styles.statItem}>
                <h3 className={styles.statNumber}>7+</h3>
                <p className={styles.statLabel}>Years of<br />Experience</p>
              </div>
             {/*
              <div className={styles.statItem}>
                <h3 className={styles.statNumber}>20+</h3>
                <p className={styles.statLabel}>Completed<br />Projects</p>
              </div>*/}
              
              <div className={styles.statItem}>
                <h3 className={styles.statNumber}>4+</h3>
                <p className={styles.statLabel}>Companies<br />Worked</p>
              </div>
            </div>
            
            <AnimatedElement animation="fade-up" delay={0.5}>
              <a href="/resume/MuhammedShemeel_Jul2024.pdf" download className={styles.downloadButton}>
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