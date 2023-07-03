'use client';
import React from 'react';
import Slider from 'react-slick';
import Image from 'next/image';

import styles from './work.module.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: 'block', background: 'red' }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={styles.prevArrow}
      style={{ ...style, display: 'block', background: 'green' }}
      onClick={onClick}
    >
      a
    </div>
  );
}

export default function Work({ params }) {
  const settings = {
    infinite: true,
    speed: 500,
    cssEase: 'cubic-bezier(0.65, 0, 0.35, 1)',
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />
  };

  return (
    <div>
      {params.work}
      <h2> Single Item</h2>
      <Slider {...settings} className={styles.carousel}>
        <div className={styles.carousel__item}>
          <Image priority src="/assets/image01.jpg" fill />
        </div>
        <div className={styles.carousel__item}>
          <Image priority src="/assets/image01.jpg" fill />
        </div>
        <div className={styles.carousel__item}>
          <Image priority src="/assets/image01.jpg" fill />
        </div>
        <div className={styles.carousel__item}>
          <Image priority src="/assets/cristhian-benitez.jpg" fill />
        </div>
        <div className={styles.carousel__item}>
          <Image priority src="/assets/image01.jpg" fill />
        </div>
      </Slider>
    </div>
  );
}
