'use client';

import React, { useState } from 'react';
import styles from './Skills.module.css';
import AnimatedElement from '@/components/layout/AnimatedElement';
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
            </AnimatedElement>
          ))}
        </div>
      </div>
    </section>
  );
} 