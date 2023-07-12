'use client';
import React from 'react';

import styles from './slider.module.css';
import { BsChevronRight, BsChevronLeft } from 'react-icons/bs';

import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

export default function Slider(props) {
  return (
    <>
      <div className={styles.carousel}>
        <Carousel
          showThumbs={false}
          showStatus={false}
          useKeyboardArrows={true}
          infiniteLoop={true}
          autoPlay={true}
          interval={3000}
        >
          {props.images.map((URL, index) => (
            <div className={styles.carousel__item}>
              <img alt="sample_file" src={URL} key={index} />
            </div>
          ))}
        </Carousel>
      </div>
    </>
  );
}
