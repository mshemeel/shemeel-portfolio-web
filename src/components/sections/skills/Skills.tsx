'use client';

import React, { useState } from 'react';
import styles from './Skills.module.css';
import AnimatedElement from '@/components/layout/AnimatedElement';
import SectionTitle from '@/components/layout/SectionTitle';

// Skill categories and data extracted from LinkedIn profile
const skillCategories = [
  { id: 'all', name: 'All Skills' },
  { id: 'backend', name: 'Backend' },
  { id: 'frontend', name: 'Frontend' },
  { id: 'cloud', name: 'Cloud & DevOps' },
  { id: 'database', name: 'Database' },
  { id: 'tools', name: 'Tools & Methodologies' }
];

const skillsData = [
  { 
    name: 'Java', 
    level: 95, 
    category: 'backend', 
    icon: '☕'
  },
  { 
    name: 'Spring Boot', 
    level: 90, 
    category: 'backend', 
    icon: '🍃'
  },
  { 
    name: 'Spring Cloud', 
    level: 85, 
    category: 'backend', 
    icon: '☁️'
  },
  { 
    name: 'Microservices', 
    level: 90, 
    category: 'backend', 
    icon: '🧩'
  },
  { 
    name: 'Spring WebFlux', 
    level: 80, 
    category: 'backend', 
    icon: '⚡'
  },
  { 
    name: 'REST APIs', 
    level: 90, 
    category: 'backend', 
    icon: '🔌'
  },
  { 
    name: 'GraphQL', 
    level: 75, 
    category: 'backend', 
    icon: '📊'
  },
  { 
    name: 'Go Lang', 
    level: 70, 
    category: 'backend', 
    icon: '🐹'
  },
  { 
    name: 'React.js', 
    level: 85, 
    category: 'frontend', 
    icon: '⚛️'
  },
  { 
    name: 'React Native', 
    level: 80, 
    category: 'frontend', 
    icon: '📱'
  },
  { 
    name: 'Redux', 
    level: 85, 
    category: 'frontend', 
    icon: '🔄'
  },
  { 
    name: 'TypeScript', 
    level: 80, 
    category: 'frontend', 
    icon: '🔷'
  },
  { 
    name: 'HTML/CSS', 
    level: 85, 
    category: 'frontend', 
    icon: '🎨'
  },
  { 
    name: 'Swift (iOS)', 
    level: 70, 
    category: 'frontend', 
    icon: '🍎'
  },
  { 
    name: 'Kotlin (Android)', 
    level: 70, 
    category: 'frontend', 
    icon: '🤖'
  },
  { 
    name: 'Docker', 
    level: 85, 
    category: 'cloud', 
    icon: '🐳'
  },
  { 
    name: 'Kubernetes', 
    level: 80, 
    category: 'cloud', 
    icon: '⎈'
  },
  { 
    name: 'Azure Cloud', 
    level: 75, 
    category: 'cloud', 
    icon: '☁️'
  },
  { 
    name: 'AWS', 
    level: 75, 
    category: 'cloud', 
    icon: '☁️'
  },
  { 
    name: 'OpenShift', 
    level: 75, 
    category: 'cloud', 
    icon: '☸️'
  },
  { 
    name: 'CI/CD Pipelines', 
    level: 85, 
    category: 'cloud', 
    icon: '🔄'
  },
  { 
    name: 'PostgreSQL', 
    level: 85, 
    category: 'database', 
    icon: '🐘'
  },
  { 
    name: 'MySQL', 
    level: 85, 
    category: 'database', 
    icon: '🐬'
  },
  { 
    name: 'MongoDB', 
    level: 80, 
    category: 'database', 
    icon: '🍃'
  },
  { 
    name: 'Oracle', 
    level: 80, 
    category: 'database', 
    icon: '🏛️'
  },
  { 
    name: 'Git', 
    level: 90, 
    category: 'tools', 
    icon: '📝'
  },
  { 
    name: 'Jenkins', 
    level: 85, 
    category: 'tools', 
    icon: '👨‍💻'
  },
  { 
    name: 'Jira', 
    level: 85, 
    category: 'tools', 
    icon: '📋'
  },
  { 
    name: 'Maven', 
    level: 85, 
    category: 'tools', 
    icon: '🏗️'
  },
  { 
    name: 'SonarQube', 
    level: 80, 
    category: 'tools', 
    icon: '🔍'
  },
  { 
    name: 'OAuth 2.0', 
    level: 85, 
    category: 'backend', 
    icon: '🔒'
  },
  { 
    name: 'mTLS', 
    level: 80, 
    category: 'backend', 
    icon: '🔐'
  },
  { 
    name: 'PCI DSS', 
    level: 75, 
    category: 'tools', 
    icon: '💳'
  }
];

/**
 * Skills section component with categorized skills and visual indicators
 */
export default function Skills() {
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredSkills = activeCategory === 'all' 
    ? skillsData 
    : skillsData.filter(skill => skill.category === activeCategory);

  return (
    <section id="skills" className={styles.skills}>
      <div className="container">
        <AnimatedElement animation="fade-up">
          <SectionTitle
            title="Skills & Expertise"
            subtitle="My Technical Proficiency"
          />
        </AnimatedElement>
        
        <AnimatedElement animation="fade-up" delay={0.2}>
          <div className={styles.categories}>
            {skillCategories.map(category => (
              <button
                key={category.id}
                className={`${styles.categoryButton} ${activeCategory === category.id ? styles.active : ''}`}
                onClick={() => setActiveCategory(category.id)}
              >
                {category.name}
              </button>
            ))}
          </div>
        </AnimatedElement>
        
        <div className={styles.skillsGrid}>
          {filteredSkills.map((skill, index) => (
            <AnimatedElement 
              key={skill.name} 
              animation="fade-up" 
              delay={0.2 + (index % 6) * 0.1}
              className={styles.skillCard}
            >
              <div className={styles.skillIcon}>{skill.icon}</div>
              <h3 className={styles.skillName}>{skill.name}</h3>
              <div className={styles.skillBarContainer}>
                <div 
                  className={styles.skillBar} 
                  style={{ width: `${skill.level}%` }}
                >
                  <span className={styles.percentage}>{skill.level}%</span>
                </div>
              </div>
            </AnimatedElement>
          ))}
        </div>
      </div>
    </section>
  );
} 