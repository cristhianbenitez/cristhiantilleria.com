import React from 'react';
import Link from 'next/link';
import styles from './navigation.module.css';

import { RiBehanceFill, RiInstagramLine } from 'react-icons/ri';

export default function Navigation() {
  return (
    <nav className={styles.nav}>
      <div className={styles.nav__item}>
        {/* TODO Add underline on hovering */}
        <Link href="/">Cristhian Tilleria</Link>
        <div className={styles.nav__item_socials}>
          <Link
            target="_blank"
            href={'https://www.instagram.com/cristhiantilleria25/'}
          >
            IG
          </Link>
          <Link
            target="_blank"
            href={'https://www.behance.net/cristhiantilleria'}
          >
            BE
          </Link>
        </div>
      </div>
      <div className={styles.nav__item}>
        <Link href={'/about'}>About</Link>
      </div>
    </nav>
  );
}
