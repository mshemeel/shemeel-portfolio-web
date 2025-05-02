'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import styles from './Projects.module.css';
import AnimatedElement from '@/components/layout/AnimatedElement';
import SectionTitle from '@/components/layout/SectionTitle';

// Sample projects data
const projectsData = [
  {
    id: 1,
    title: 'n-Genius One SoftPOS App',
    description: 'Mobile payment solution with Apple Tap to Pay integration. One of the first SoftPOS solutions in the UAE region.',
    image: '/projects/n-genius-one-attp.png',
    copyright: 'Image © Network International',
    technologies: ['Java', 'Spring Boot', 'Microservices','React Native', 'Swift', 'Kotlin'],
    category: 'mobile',
    link: '#',
    featured: true
  },
  {
    id: 2,
    title: 'Airline Booking System',
    description: 'Microservices architecture for integrating legacy booking system with Navitaire APIs for Allegiant air.',
    image: '/projects/allegiant_air.jpg',
    copyright: 'Image © Allegiant Air',
    technologies: ['Java', 'Spring Boot', 'Spring Cloud', 'Spring WebFlux', 'OpenShift', 'AWS'],
    category: 'backend',
    link: '#',
    featured: true
  },
  {
    id: 3,
    title: 'Cargo Terminal Operations',
    description: 'System that manages the processes of self-handled facilities for carriers, GHAs and airports providing cargo handling services.',
    image: '/projects/jal_cargo.png',
    copyright: 'Image © Japan Airlines',
    technologies: ['Java', 'Spring Boot', 'React', 'Redux', 'Oracle', 'PostgreSQL'],
    category: 'fullstack',
    link: '#',
    featured: true
  }/*,
  {
    id: 4,
    title: 'Portfolio Website',
    description: 'Personal portfolio website built with Next.js and CSS modules featuring custom animations.',
    image: '/projects/portfolio.jpg',
    copyright: 'Image © Muhammed Shemeel',
    technologies: ['Next.js', 'React', 'TypeScript', 'CSS Modules', 'Intersection Observer API'],
    category: 'frontend',
    link: '#',
    featured: false
  }*/
];

// Project categories for filtering
const categories = [
  { id: 'all', name: 'All Projects' },
  //{ id: 'frontend', name: 'Frontend' },
 // { id: 'backend', name: 'Backend' },
 // { id: 'fullstack', name: 'Full Stack' },
 // { id: 'mobile', name: 'Mobile' }
];

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
                  View Project
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