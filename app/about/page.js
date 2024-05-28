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
        </div>
      </section>
      <section className={styles.about__column} grid-col="2">
        <h2 className={styles.about__headline}>
          Howdy! I'm Cristhian a Front End Developer & Graphic Designer based in
          New York, interested in creating impactful web application, brands and
          digital experiences through strategic design & web development. With a
          strong commitment to producing thoughtful results, I collaborate
          effectively with ambitious businesses aiming to communicate their
          purpose with authenticity and meaning. <br />
        </h2>
        <h2 className={styles.about__headline}>
          On my time off you can find me immersed in type books, coding new
          projects, enjoying music, learning some new language on duolingo or
          capturing moments through photography.
        </h2>
        {/* <div className={styles.about__services}>
          <h3 className={styles.about__services__title}>Services:</h3>
          <ul>
            <li>Brand Identity</li>
            <li>Logo Design</li>
            <li>Print Design</li>
            <li>App Design</li>
            <li>Web Design</li>
            <li>Front-End Web Development</li>
          </ul>
        </div> */}
      </section>
    </PageWrapper>
  );
}
