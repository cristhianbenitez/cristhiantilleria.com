'use client';
import React from 'react';

import styles from './slider.module.css';

import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import Image from 'next/image';

export default function Slider(props) {
  return (
    <div className={styles.carousel}>
      <Carousel
        showThumbs={false}
        showStatus={false}
        useKeyboardArrows={true}
        infiniteLoop={true}
        autoPlay={true}
        interval={2000}
      >
        {props.images.map((URL) => (
          <div className={styles.carousel__item} key={URL}>
            <Image alt="sample_file" src={URL} fill priority />
          </div>
        ))}
      </Carousel>
    </div>
  );
}
