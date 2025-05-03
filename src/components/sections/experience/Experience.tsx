'use client';

import React from 'react';
import Image from 'next/image';
import styles from './Experience.module.css';
import AnimatedElement from '@/components/layout/AnimatedElement';
import SectionTitle from '@/components/layout/SectionTitle';
import experienceJson from '@/data/experience.json';

// Import experience data from JSON file
const { experienceData } = experienceJson;

/**
 * Experience section component with timeline of work history
 */
export default function Experience() {
  return (
    <section id="experience" className={styles.experience}>
      <div className="container">
        <AnimatedElement animation="fade-up">
          <SectionTitle
            title="Work Experience"
            subtitle="My Professional Journey"
          />
        </AnimatedElement>
        
        <div className={styles.timelineContainer}>
          {experienceData.map((job, index) => (
            <AnimatedElement 
              key={job.id}
              animation={index % 2 === 0 ? "fade-right" : "fade-left"}
              delay={0.2 + (index * 0.1)}
              className={`${styles.timelineItem} ${index % 2 === 0 ? styles.left : styles.right}`}
            >
              <div className={styles.timelineContent}>
                <div className={styles.timelineHeader}>
                  <h3 className={styles.role}>{job.role}</h3>
                  
                  <div className={styles.companyContainer}>
                    {job.logoUrl ? (
                      <a 
                        href={job.websiteUrl} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className={styles.companyLogoLink}
                        title={`Visit ${job.company} website`}
                      >
                        <div className={styles.companyLogo}>
                          <Image 
                            src={job.logoUrl} 
                            alt={`${job.company} logo`}
                            width={80}
                            height={40}
                            style={{ objectFit: 'contain' }}
                          />
                        </div>
                        <span className={styles.company}>{job.company}</span>
                      </a>
                    ) : (
                      <div className={styles.company}>{job.company}</div>
                    )}
                  </div>
                  
                  <div className={styles.period}>{job.period}</div>
                  <div className={styles.location}>{job.location}</div>
                </div>
                
                {job.description && (
                  <p className={styles.description}>{job.description}</p>
                )}
                
                {job.technologies && job.technologies.length > 0 && (
                  <div className={styles.technologiesContainer}>
                    <h4 className={styles.techTitle}>Technologies & Tools:</h4>
                    <div className={styles.technologies}>
                      {job.technologies.map((tech, idx) => (
                        <span key={idx} className={styles.techBadge}>{tech}</span>
                      ))}
                    </div>
                  </div>
                )}
                
                {job.responsibilities && job.responsibilities.length > 0 && (
                  <div className={styles.listContainer}>
                    <h4 className={styles.listTitle}>Responsibilities:</h4>
                    <ul className={styles.responsibilitiesList}>
                      {job.responsibilities.map((item, idx) => (
                        <li key={idx} className={styles.listItem}>{item}</li>
                      ))}
                    </ul>
                  </div>
                )}
                
                {job.achievements && job.achievements.length > 0 && (
                  <div className={styles.listContainer}>
                    <h4 className={styles.listTitle}>Key Achievements:</h4>
                    <ul className={styles.achievementsList}>
                      {job.achievements.map((item, idx) => (
                        <li key={idx} className={styles.listItem}>{item}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </AnimatedElement>
          ))}
        </div>
      </div>
    </section>
  );
} 