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
          I'm a freelance graphic designer based in New York, and I've developed
          a newfound passion for design and a deep interest in communication.
          I'm constantly seeking personal growth and knowledge to better
          understand life, despite its challenges. Immersing myself in the
          design world has revealed a fascination for art and design while also
          making me more aware of the struggles we face as humans. As a
          designer, I believe I can make a small contribution with my work. My
          dedication to my craft is driven by a strong work ethic and a
          wholehearted commitment to delivering meaningful designs.
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
