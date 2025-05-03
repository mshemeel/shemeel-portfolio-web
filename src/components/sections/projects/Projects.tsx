'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import styles from './Projects.module.css';
import AnimatedElement from '@/components/layout/AnimatedElement';
import SectionTitle from '@/components/layout/SectionTitle';
import projectsJson from '@/data/projects.json';

// Import projects data from JSON file
const { projectsData, categories } = projectsJson;

/**
 * Projects section component
 */
export default function Projects() {
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredProjects = activeCategory === 'all' 
    ? projectsData 
    : projectsData.filter(project => project.category === activeCategory);

  return (
    <section id="projects" className={styles.projects}>
      <div className="container">
        <AnimatedElement animation="fade-up">
          <SectionTitle
            title="My Projects"
            subtitle="Recent Work"
          />
        </AnimatedElement>
        
        <AnimatedElement animation="fade-up" delay={0.2}>
          <div className={styles.categories}>
            {categories.map(category => (
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
        
        <div className={styles.projectsGrid}>
          {filteredProjects.map((project, index) => (
            <AnimatedElement 
              key={project.id} 
              animation="fade-up" 
              delay={0.2 + (index % 4) * 0.1}
              className={styles.projectCard}
            >
              <div className={styles.projectImage}>
                <Image 
                  src={project.image}
                  alt={project.title}
                  width={600}
                  height={300}
                  className={styles.img}
                />
                <div className={styles.copyrightText}>{project.copyright}</div>
                {project.featured && <div className={styles.featuredBadge}>Featured</div>}
              </div>
              
              <div className={styles.projectContent}>
                <h3 className={styles.projectTitle}>{project.title}</h3>
                <p className={styles.projectDescription}>{project.description}</p>
                
                <div className={styles.technologies}>
                  {project.technologies.map((tech, idx) => (
                    <span key={idx} className={styles.techBadge}>{tech}</span>
                  ))}
                </div>
                
                <a href={project.link} className={styles.projectLink} target="_blank" rel="noopener noreferrer">
                  View Details
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="7" y1="17" x2="17" y2="7"></line>
                    <polyline points="7 7 17 7 17 17"></polyline>
                  </svg>
                </a>
              </div>
            </AnimatedElement>
          ))}
        </div>
      </div>
    </section>
  );
} 