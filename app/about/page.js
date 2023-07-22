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
          <Link href="mailto:cristhiantilleria@gmail.com">
            <BsArrowRight />
            &nbsp; Email
          </Link>
          <Link href="https://www.instagram.com/cristhiantilleria25">
            <BsArrowRight />
            &nbsp; Instagram
          </Link>
          <Link href="https://www.linkedin.com/in/cristhianbenitez/">
            <BsArrowRight />
            &nbsp; LinkedIn
          </Link>
        </div>
      </section>
      <section className={styles.about__column} grid-col="2">
        <h2 className={styles.about__headline}>
          I am a New York-based Freelance Graphic Designer with a newfound
          passion for design and a strong interest in communication. I am always
          seeking to improve as a person and acquire more knowledge to better
          understand life, despite all its challenges. My immersion in the
          design world has unveiled a fascination for art and design. It has
          also helped me see the struggles that we face as humans and how, as a
          designer, I can make a small contribution to a more connected world.
          Motivated by a strong work ethic, I wholeheartedly dedicate myself to
          my craft.
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

{
  /* Cristhian, a Freelance Graphic Designer based in New York, who has
developed a strong passion for design. With an insatiable thirst for
knowledge, he constantly seeks improvement. Previous to his design
education, he believed creativity was exclusive to a select few, but
his immersion in the design world unveiled a deep fascination for art
and design. Motivated by a strong work ethic, Cristhian wholeheartedly
dedicates himself to crafting brand identities, websites, and print
designs. Excited to contribute meaningfully to projects that help people. */
}
