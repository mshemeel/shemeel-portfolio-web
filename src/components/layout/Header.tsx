'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import styles from './Header.module.css';
import ThemeToggle from '@/components/ThemeToggle';
import headerData from '@/data/header.json';

/**
 * Header component with responsive navigation
 */
export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);

  // Track scroll position for header styling
  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    // Prevent scrolling when menu is open
    document.body.style.overflow = !isMenuOpen ? 'hidden' : '';
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
    document.body.style.overflow = '';
  };

  return (
    <header className={`${styles.header} ${scrollPosition > 50 ? styles.scrolled : ''}`}>
      <div className={styles.container}>
        <Link href={headerData.logoLink} className={styles.logo} onClick={closeMenu}>
          <span className={styles.name}>{headerData.name}</span>
        </Link>

        <div className={styles.rightContainer}>
          <ThemeToggle />

        <button 
          className={`${styles.menuButton} ${isMenuOpen ? styles.open : ''}`} 
          onClick={toggleMenu}
          aria-label="Toggle menu"
          aria-expanded={isMenuOpen}
        >
          <span className={styles.menuBar}></span>
          <span className={styles.menuBar}></span>
          <span className={styles.menuBar}></span>
        </button>
        </div>

        <nav className={`${styles.nav} ${isMenuOpen ? styles.open : ''}`}>
          <ul className={styles.navList}>
            {headerData.navItems.map((item) => (
              <li key={item.id} className={styles.navItem}>
                <Link href={item.href} className={styles.navLink} onClick={closeMenu}>
                  {item.label}
                </Link>
              </li>
            ))}
            <li className={styles.navItem + ' ' + styles.mobileThemeToggle}>
              <ThemeToggle />
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
} 