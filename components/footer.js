import React from 'react';
import styles from './footer.module.css';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <span className={styles.footer__item}>
        <Link href={'mailto:cristhiantilleria@gmail.com'}>
          cristhiantilleria@gmail.com
        </Link>
      </span>
    </footer>
  );
}
