'use client';

import React from 'react';
import { usePathname } from 'next/navigation';
import styles from '../projects.module.css';

export default function ScrollableContent({ children }) {
  const contentRef = React.useRef(null);
  const pathname = usePathname();

  React.useEffect(() => {
    if (pathname === '/projects') return;

    const handleScroll = (e) => {
      // Prevent the default scroll behavior
      e.preventDefault();

      if (contentRef.current) {
        contentRef.current.scrollTop += e.deltaY;
      }
    };

    // Use passive: false to allow preventDefault()
    window.addEventListener('wheel', handleScroll, { passive: false });
    return () => window.removeEventListener('wheel', handleScroll);
  }, [pathname]);

  return (
    <section ref={contentRef} className={styles.content}>
      {children}
    </section>
  );
}
