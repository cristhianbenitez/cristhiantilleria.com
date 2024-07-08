import React from 'react';
import Link from 'next/link';
import styles from './navigation.module.css';

export default function Navigation() {
  return (
    <nav className={styles.nav}>
      <div className={styles.nav__item}>
        <Link href="/">
          <h1 role="link">Cristhian Tilleria</h1>
        </Link>
        <div className={styles.nav__item_socials}>
          {/* <Link target="_blank" href={'https://www.x.com/pipebenitez25'}>
            X
          </Link> */}
          <Link
            target="_blank"
            href={'https://www.instagram.com/cristhiantilleria25/'}
          >
            IG
          </Link>
        </div>
      </div>
      <div className={styles.nav__item}>
        <Link href={'/'}>Work,</Link>
        <Link href={'/about'}>About</Link>
      </div>
    </nav>
  );
}
