import React from 'react';
import Link from 'next/link';
import styles from './navigation.module.css';

export default function Navigation() {
  return (
    <nav className={styles.navigation}>
      <div className={styles.navigation__item}>
        <Link href={'/'}>Cristhian Benitez</Link>
      </div>
      <div className={styles.navigation__item}>
        <Link href={'/information'}>Information</Link>
      </div>
    </nav>
  );
}
