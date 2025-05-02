'use client';

import React from 'react';
import styles from './Experience.module.css';
import AnimatedElement from '@/components/layout/AnimatedElement';
import SectionTitle from '@/components/layout/SectionTitle';

// Sample of experience data extracted from LinkedIn profile
const experienceData = [
  {
    id: 1,
    company: 'Network International',
    role: 'Technical Specialist',
    period: 'Aug 2023 - Present',
    location: 'Dubai, United Arab Emirates',
    type: 'Full-time',
    description: 'Full Stack Lead Developer - n-Genius One SoftPOS App (Apple Tap to Pay Integration)',
    technologies: [
      'Java', 'Spring Boot (Microservices Architecture)', 'Spring-Cloud', 'Spring WebFlux',
      'React Native (iOS & Android)', 'Swift (iOS SDK)', 'Kotlin/Java (Android SDK)',
      'OAuth 2.0', 'mTLS', 'PCI DSS Compliance',
      'Apple Tap to Pay', 'MPGS','Keycloak', 'Spring Security',
      'Docker', 'Kubernetes', 'Azure Cloud', 'CI/CD Pipelines', 'Terraform','Jenkins'
    ],
    achievements: [
      'Successfully launched Apple Tap to Pay in the UAE, one of the first SoftPOS solutions in the region.',
      'Positioned the n-Genius One SoftPOS App as a leading mobile payment solution in the UAE market.'
    ]
  },
  {
    id: 2,
    company: 'LTIMindtree',
    role: 'Specialist - Software Engineering',
    period: 'Nov 2022 - Jul 2023',
    location: 'Coimbatore, Tamil Nadu, India',
    type: 'Full-time',
    description: 'Worked for Allegiant air - Navitaire integration',
    technologies: [],
    achievements: []
  },
  {
    id: 3,
    company: 'Mindtree',
    role: 'Module Lead',
    period: 'Mar 2022 - Nov 2022',
    location: 'Coimbatore, Tamil Nadu, India',
    type: 'Full-time',
    description: 'Allegiant air - Navitaire integration. Deprecation of the legacy booking system and integration with Navitaire booking APIs. The system is a distributed micro-services developed using Java, Spring Boot, Spring Cloud and was deployed in OpenShift.',
    technologies: [
      'Java 8/11', 'Spring Boot', 'Spring Cloud', 'Spring WebFlux',
      'Microservices', 'Maven', 'Jenkins', 'Docker',
      'RedHat OpenShift', 'AWS', 'SonarQube', 'Fortify',
      'RESTful webservices', 'GraphQL', 'Git', 'JBoss server',
      'MySQL', 'IBM DB2', 'MongoDB', 'Jira', 'Confluence'
    ],
    responsibilities: [
      'Provide prompt solutions and proactive troubleshooting support to swiftly resolve subtle and complex issues as the Module lead',
      'Understanding the requirements of the customer and solutioning with architects',
      'Designing, Coding & Unit and integration testing of the micro-service',
      'Ensuring code coverage and resolution of sonar and fortify issues',
      'Mentoring & guiding junior developers in troubleshooting and fixing issues',
      'Supporting build and release activities and fixing environment issues',
      'Debugging & fixing issues reported in production'
    ]
  },
  {
    id: 4,
    company: 'IBS Software',
    role: 'Senior Product Engineer',
    period: 'Jan 2022 - Mar 2022',
    location: 'Kochi, Kerala, India',
    type: 'Full-time',
    technologies: [
      'Java', 'Spring Boot', 'Microservices', 'Web-Services',
      'REST', 'SOAP', 'Git', 'React JS',
      'Redux', 'Oracle', 'PostgreSQL'
    ],
    responsibilities: [
      'Designing, implementing, and maintaining Java-based web applications for mission-critical systems',
      'Contributing to all phases of the development lifecycle',
      'Writing well-designed, efficient, and testable code',
      'Conducting testing, and debugging to fix issues',
      'Improving code quality by implementing best practices',
      'Interacting with customers and clarifying queries'
    ]
  },
  {
    id: 5,
    company: 'IBS Software',
    role: 'Senior Software Engineer',
    period: 'Apr 2019 - Dec 2021',
    location: 'Kochi, Kerala, India',
    type: 'Full-time',
    description: 'Worked on-site as well as off-shore during the implementation of JTO. iCargo JTO is a Cargo Terminal Operations system that automates the processes of the self-handled facilities of a carrier, GHAs or airports providing cargo handling services to Japan customer airlines.',
    achievements: [
      'Involved in the design, development, testing & implementation of iCargo JTO for Japan Airlines'
    ]
  },
  {
    id: 6,
    company: 'Allianz Technology',
    role: 'Software Engineer',
    period: 'Jun 2018 - Apr 2019',
    location: 'Trivandrum',
    type: 'Full-time'
  },
  {
    id: 7,
    company: 'Allianz Technology',
    role: 'Software Engineer Trainee',
    period: 'Dec 2017 - May 2018',
    location: 'Trivandrum',
    type: 'Full-time'
  },
  {
    id: 8,
    company: 'Allianz Technology',
    role: 'Project Trainee',
    period: 'Sep 2017 - Nov 2017',
    location: 'Trivandrum',
    type: 'Full-time'
  }
];

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
                  <div className={styles.company}>{job.company}</div>
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