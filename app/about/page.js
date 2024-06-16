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
          <Link target="blank" href="mailto:me@cristhiantilleria.com">
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
        </div>
      </section>
      <section className={styles.about__column} grid-col="2">
        <h2 className={styles.about__headline}>
          Hey! I'm Cristhian, a New York based Freelance Front End Developer who
          likes to Design. My interests lays in the intersection of design and
          the web,. I love to think about brands and the value of design. With a
          strong commitment to producing effective and useful work <br />
        </h2>
        <h2 className={styles.about__headline}>
          On my time off you can find me immersed in type books, coding new
          projects, enjoying music, learning some new language on duolingo or
          capturing moments through photography.
        </h2>
        <div className={styles.about__services}>
          <ul>
            <li>Full-Stack Web Development</li>
            <li>UI/UX </li>
            <li>Brand Identity</li>
            <li>Logo Design</li>
          </ul>
        </div>
      </section>
    </PageWrapper>
  );
}
