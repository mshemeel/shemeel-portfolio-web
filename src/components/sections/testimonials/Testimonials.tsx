'use client';

import React, { useState, useEffect } from 'react';
import styles from './Testimonials.module.css';
import AnimatedElement from '@/components/layout/AnimatedElement';
import SectionTitle from '@/components/layout/SectionTitle';

// Recommendations data extracted from LinkedIn
const testimonials = [
  {
    id: 1,
    name: 'Jijo George',
    position: 'Project Lead at Cognizant',
    date: 'July 31, 2023',
    relationship: 'Jijo was senior to Muhammed but didn\'t manage Muhammed directly',
    recommendation: 'I have had the pleasure of working alongside Muhammed Shemeel for 1.5 years as the Technical Lead while he served as one of our backend developers. During this time, I consistently observed his impressive ability to develop and effectively implement microservices using the Spring framework. Muhammed has a thorough understanding of microservices concepts and can apply them in practical ways to deliver high-quality solutions.',
    profileImage: '/testimonials/jijo-george.jpg',
    linkedInUrl: 'https://www.linkedin.com/in/jijopg4u/'
  },
  {
    id: 2,
    name: 'Jiby George',
    position: 'Principal - Architecture at LTIMindtree',
    date: 'July 29, 2023',
    relationship: 'Jiby managed Muhammed directly',
    recommendation: 'I had the pleasure of working with Shemeel at LTIMindtree, I am delighted to provide a glowing recommendation for him as a Java full-stack developer. Throughout his time working under my guidance, he has consistently demonstrated exceptional skills and dedication, making him an invaluable member of our team.\n\nShemeel is an outstanding Java developer with a deep understanding of the language and its frameworks. He consistently delivers high-quality code, showing a keen eye for detail and a commitment to following best practices. His technical expertise has played a vital role in the successful completion of our projects.\n\nBeyond his technical prowess, Shemeel is an exemplary team player. He actively collaborates with his peers, willingly sharing his knowledge and offering support whenever needed. His positive attitude and approachable nature create a harmonious work environment that boosts overall team morale.\n\nAs his supervisor, I have witnessed Shemeel\'s strong problem-solving abilities firsthand. When faced with challenges, he remains composed and quickly analyzes the situation to find effective solutions. His ability to think critically and adapt to changing circumstances has been a tremendous asset to our team\'s success.\n\nIn summary, Shemeel has not only proven himself as an exceptional Java developer but also as a reliable and responsible team member. I have full confidence in his abilities and believe he will continue to excel in his future endeavors. I highly recommend him for any challenging software development roles.',
    profileImage: '/testimonials/jiby-george.jpg',
    linkedInUrl: 'https://www.linkedin.com/in/jiby-george-02b111206/'
  },
  {
    id: 3,
    name: 'Sony Mathew',
    position: 'Solution Architect at Allianz',
    date: 'July 29, 2023',
    relationship: 'Sony managed Muhammed directly',
    recommendation: 'Muhammed joined the team at a moment we were in dire need for a good technical resource and he fit the role to the T. He showed excellent learning capabilities as he quickly mastered the ropes and soon became an indispensable Java SME. He had a good rapport with everyone and was a joy to work with.',
    profileImage: '/testimonials/sony-mathew.jpg',
    linkedInUrl: 'https://www.linkedin.com/in/sony-mathew-340a7155/'
  }
];

/**
 * Testimonials section component
 */
export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [autoplay, setAutoplay] = useState(true);
  const [expandedCards, setExpandedCards] = useState<number[]>([]);

  // Auto-rotate testimonials
  useEffect(() => {
    if (!autoplay) return;
    
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 8000); // Change testimonial every 8 seconds
    
    return () => clearInterval(interval);
  }, [autoplay]);

  // Pause autoplay when user interacts
  const handleDotClick = (index: number) => {
    setActiveIndex(index);
    setAutoplay(false);
    
    // Resume autoplay after 10 seconds of inactivity
    setTimeout(() => setAutoplay(true), 10000);
  };

  // Toggle expand/collapse of testimonial
  const toggleExpand = (id: number) => {
    setExpandedCards(prev => {
      if (prev.includes(id)) {
        return prev.filter(cardId => cardId !== id);
      } else {
        return [...prev, id];
      }
    });
    
    // Pause autoplay when expanding content
    setAutoplay(false);
    
    // Resume autoplay after 20 seconds
    setTimeout(() => setAutoplay(true), 20000);
  };

  // Check if a card is expanded
  const isExpanded = (id: number) => expandedCards.includes(id);

  return (
    <section id="testimonials" className={styles.testimonials}>
      <div className="container">
        <AnimatedElement animation="fade-up">
          <SectionTitle
            title="Testimonials"
            subtitle="What People Say"
          />
        </AnimatedElement>
        
        <div className={styles.carouselContainer}>
          <div className={styles.carousel} style={{ transform: `translateX(-${activeIndex * 100}%)` }}>
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className={styles.testimonialCard}>
                <div className={styles.testimonialContent}>
                  <div className={styles.quoteIcon}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M3 21c3.5-1 6-4.5 6-8V7.5"></path>
                      <path d="M3 7h6v6H3z"></path>
                      <path d="M15 21c3.5-1 6-4.5 6-8V7.5"></path>
                      <path d="M15 7h6v6h-6z"></path>
                    </svg>
                  </div>
                  <div className={`${styles.recommendation} ${isExpanded(testimonial.id) ? styles.expanded : ''}`}>
                    <p>{testimonial.recommendation}</p>
                    {testimonial.recommendation.length > 200 && (
                      <button 
                        className={styles.readMoreBtn} 
                        onClick={() => toggleExpand(testimonial.id)}
                      >
                        {isExpanded(testimonial.id) ? 'Read Less' : 'Read More'}
                      </button>
                    )}
                  </div>
                  <div className={styles.testimonialFooter}>
                    <div className={styles.testimonialProfile}>
                      {/* Use initials as avatar - safer than trying to use LinkedIn images */}
                      <div className={styles.profileInitial}>{testimonial.name.charAt(0)}</div>
                      <div className={styles.testimonialInfo}>
                        <h4 className={styles.testimonialName}>
                          {testimonial.name}
                          {testimonial.linkedInUrl && (
                            <a 
                              href={testimonial.linkedInUrl} 
                              target="_blank" 
                              rel="noopener noreferrer"
                              className={styles.linkedInLink}
                              aria-label={`${testimonial.name}'s LinkedIn profile`}
                            >
                              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                              </svg>
                            </a>
                          )}
                        </h4>
                        <p className={styles.testimonialPosition}>{testimonial.position}</p>
                      </div>
                    </div>
                    <p className={styles.testimonialDate}>{testimonial.date}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className={styles.carouselControls}>
            <div className={styles.carouselDots}>
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  className={`${styles.dot} ${index === activeIndex ? styles.active : ''}`}
                  onClick={() => handleDotClick(index)}
                  aria-label={`Testimonial ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 