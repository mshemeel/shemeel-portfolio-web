'use client';

import React, { useState } from 'react';
import styles from './Skills.module.css';
import AnimatedElement from '@/components/layout/AnimatedElement';
import StaggerGroup from '@/components/layout/StaggerGroup';
import SectionTitle from '@/components/layout/SectionTitle';
import Image from 'next/image';
import skillsJson from '@/data/skills.json';

// Import skill categories and data from JSON file
const { skillCategories, skillsData } = skillsJson;

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
        <AnimatedElement animation="blur-up">
          <SectionTitle
            title="Skills & Expertise"
            subtitle="My Technical Proficiency"
          />
        </AnimatedElement>
        
        <AnimatedElement animation="blur-up" delay={0.2}>
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
        
        <StaggerGroup className={styles.skillsGrid} key={activeCategory}>
          {filteredSkills.map((skill) => (
            <div key={skill.name} className={styles.skillCard}>
              <div className={styles.skillIcon}>
                <Image
                  src={skill.logoPath}
                  alt={`${skill.name} logo`}
                  width={40}
                  height={40}
                />
              </div>
              <h3 className={styles.skillName}>{skill.name}</h3>
              <div className={styles.skillBarContainer}>
                <div
                  className={styles.skillBar}
                  style={{ width: `${skill.level}%` }}
                >
                  <span className={styles.percentage}>{skill.level}%</span>
                </div>
              </div>
            </div>
          ))}
        </StaggerGroup>
      </div>
    </section>
  );
} 