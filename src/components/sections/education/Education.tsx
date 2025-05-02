'use client';

import React from 'react';
import styles from './Education.module.css';
import AnimatedElement from '@/components/layout/AnimatedElement';
import SectionTitle from '@/components/layout/SectionTitle';
import educationJson from '@/data/education.json';

// Import education and certification data from JSON file
const { educationData, certificationsData } = educationJson;

/**
 * Education section component
 */
export default function Education() {
  return (
    <section id="education" className={styles.education}>
      <div className="container">
        <AnimatedElement animation="fade-up">
          <SectionTitle
            title="Education & Certifications"
            subtitle="Academic Background"
          />
        </AnimatedElement>
        
        <div className={styles.content}>
          <div className={styles.educationContainer}>
            <h3 className={styles.sectionSubheading}>Education</h3>
            
            <div className={styles.timelineContainer}>
              {educationData.map((edu, index) => (
                <AnimatedElement 
                  key={edu.id}
                  animation="fade-up"
                  delay={0.2 + (index * 0.1)}
                  className={styles.educationCard}
                >
                  <div className={styles.logoContainer}>
                    <span className={styles.logo}>{edu.logo}</span>
                  </div>
                  <div className={styles.cardContent}>
                    <h4 className={styles.institution}>{edu.institution}</h4>
                    <p className={styles.degree}>{edu.degree}, {edu.field}</p>
                    <p className={styles.period}>{edu.period}</p>
                    {edu.location && <p className={styles.location}>{edu.location}</p>}
                  </div>
                </AnimatedElement>
              ))}
            </div>
          </div>
          
          <div className={styles.certificationsContainer}>
            <h3 className={styles.sectionSubheading}>Awards & Achievements</h3>
            
            <div className={styles.certificationsGrid}>
              {certificationsData.map((cert, index) => (
                <AnimatedElement 
                  key={cert.id} 
                  animation="fade-up"
                  delay={0.4 + (index * 0.1)}
                  className={styles.certificationCard}
                >
                  <div className={styles.certIcon}>🏆</div>
                  <h4 className={styles.certName}>{cert.name}</h4>
                  <p className={styles.certIssuer}>{cert.issuer}</p>
                  <p className={styles.certDate}>{cert.date}</p>
                </AnimatedElement>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 