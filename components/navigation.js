import React from 'react';
import Link from 'next/link';
import styles from './navigation.module.css';
import {
  AiOutlineLinkedin,
  AiOutlineMail,
  AiOutlineInstagram
} from 'react-icons/ai';

export default function Navigation() {
  return (
    <nav className={styles.nav}>
      <div className={styles.nav__item}>
        <Link href={'/'}>Cristhian Tilleria</Link>
      </div>
      <div className={styles.nav__item}>
        <Link target="_blank" href={'mailto:cristhiantilleria@gmail.com'}>
          <AiOutlineMail />
        </Link>
        <Link
          target="_blank"
          href={'https://www.instagram.com/cristhiantilleria25/'}
        >
          <AiOutlineInstagram />
        </Link>
        <Link
          target="_blank"
          href={'https://www.linkedin.com/in/cristhianbenitez/'}
        >
          <AiOutlineLinkedin />
        </Link>
      </div>
    </nav>
  );
}
