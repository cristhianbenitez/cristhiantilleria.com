import React from 'react';
import styles from './about.module.css';
import Image from 'next/image';
import { BsArrowRight } from 'react-icons/bs';
import Link from 'next/link';
import PageWrapper from '@/components/pagewrapper';

export default function About() {
  return (
    <PageWrapper className={styles.about}>
      <section className={styles.about__column} grid-col="1">
        <div className={styles.about__headshot}>
          <Image src="/assets/cristhiantilleria.jpg" height={320} width={320} />
        </div>
        <div className={styles.about__socials}>
          <Link target="blank" href="mailto:cristhiantilleria@gmail.com">
            <BsArrowRight />
            &nbsp; Email
          </Link>
          <Link target="blank" href="https://github.com/cristhianbenitez">
            <BsArrowRight />
            &nbsp; Github
          </Link>
          <Link
            target="blank"
            href="https://www.instagram.com/cristhiantilleria25"
          >
            <BsArrowRight />
            &nbsp; Instagram
          </Link>
          <Link
            target="blank"
            href="https://www.linkedin.com/in/cristhianbenitez/"
          >
            <BsArrowRight />
            &nbsp; LinkedIn
          </Link>
          <Link target="blank" href="https://cristhiantilleria.tumblr.com/">
            <BsArrowRight />
            &nbsp; Tumblr
          </Link>
        </div>
      </section>
      <section className={styles.about__column} grid-col="2">
        <p className={styles.about__headline}>
          Hey! I'm Cristhian, a New York based Freelance Developer & Designer.
          My interests lays in the intersection of design and the web. I love to
          think about the value of design in the work I do.
          <br />
        </p>
        <p className={styles.about__headline}>
          {/* ADD LINKS TO PLAYLISTS,BOOKS AND PHOTOS INSIDE WORDS */}
          On my time off you can find me reading books, thinking about a new
          personal project, enjoying music, learning some new language on
          duolingo or capturing moments through photography.
        </p>
        <div className={styles.about__services}>
          <ul>
            <li style={{ fontWeight: '500', marginBottom: '.5rem' }}>
              Services
            </li>
            <li>Web Development</li>
            <li>Web Design </li>
            <li>Full-Stack Development</li>
            <li>Brand Identity</li>
            <li>Logo Design</li>
          </ul>
        </div>
      </section>
    </PageWrapper>
  );
}
