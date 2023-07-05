import React from 'react';
import styles from './about.module.css';
import Image from 'next/image';
import { BsArrowRight } from 'react-icons/bs';

export default function About() {
  return (
    <main className={styles.about}>
      <section className={styles.about__column} grid-col="1">
        <div className={styles.about__headshot}>
          <Image
            priority
            src="/assets/cristhiantilleria.png"
            height={320}
            width={320}
          />
        </div>
        <div className={styles.about__socials}>
          <a href="">
            <BsArrowRight />
            &nbsp; Email
          </a>
          <a href="">
            <BsArrowRight />
            &nbsp; Instagram
          </a>
          <a href="">
            <BsArrowRight />
            &nbsp; Twitter
          </a>
        </div>
      </section>
      <section className={styles.about__column} grid-col="2">
        <h2 className={styles.about__headline}>
          Cristhian Benitez is a Designer graduated from Shillington School of
          Design, currently based in New York. His works has an with an emphasis
          on visual identity, typography, and UI/UX.
        </h2>
        <p></p>
      </section>
    </main>
  );
}
