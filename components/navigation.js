import React from 'react';
import Link from 'next/link';
import styles from './navigation.module.css';
import {
  AiOutlineLinkedin,
  AiOutlineMail,
  AiOutlineInstagram
} from 'react-icons/ai';

import { RiLinkedinFill, RiInstagramLine, RiMailLine } from 'react-icons/ri';

export default function Navigation() {
  return (
    <nav className={styles.nav}>
      <div className={styles.nav__item}>
        <Link href={'/'}>Cristhian Tilleria</Link>
        <div className={styles.nav__item_icon}>
          <Link
            target="_blank"
            href={'https://www.instagram.com/cristhiantilleria25/'}
          >
            <RiInstagramLine />
          </Link>
          <Link
            target="_blank"
            href={'https://www.linkedin.com/in/cristhianbenitez/'}
          >
            <RiLinkedinFill />
          </Link>
        </div>
      </div>
      <div className={styles.nav__item}>
        <Link href={'/about'}>About</Link>
      </div>
    </nav>
  );
}
