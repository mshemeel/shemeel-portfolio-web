'use client';

import React from 'react';
import Header from './Header';
import Footer from './Footer';
import styles from './MainLayout.module.css';

interface MainLayoutProps {
  children: React.ReactNode;
}

/**
 * MainLayout component that wraps all pages with header and footer
 */
export default function MainLayout({ children }: MainLayoutProps) {
  return (
    <div className={styles.layout}>
      <Header />
      <main className={styles.main}>
        {children}
      </main>
      <Footer />
    </div>
  );
} 