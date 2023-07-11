'use client';
import React from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { BsArrowRight } from 'react-icons/bs';

import styles from './work.module.css';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import Link from 'next/link';

export default function Work({}) {
  return (
    <div>
      <section className={styles.projectInformation}>
        <div className={styles.projectInformation_services}>
          <span>1. Aliquam accumsan</span>
          <span>2. Cras quis</span>
          <span>3. Nunc lobortis Metus</span>
        </div>

        <div className={styles.projectInformation_description}>
          <h3>Nullam Consectetur</h3>
          <p>
            Nullam consectetur semper tortor sit amet rutrum. Morbi sed felis
            volutpat, vulputate justo et, pharetra mi. Phasellus ac velit nec
            diam dapibus porttitor nec quis elit. Proin arcu est, accumsan ac
            orci molestie, placerat efficitur purus. Vivamus non purus
            ullamcorper, maximus purus vitae, mollis ante. Donec sed ex dui.
            Nullam consectetur semper tortor sit amet rutrum. Morbi sed felis
            volutpat, vulputate justo et, pharetra mi.
          </p>
        </div>
      </section>

      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        autoplay={{
          delay: 3000,
          pauseOnMouseEnter: true
        }}
        pagination={{
          clickable: true
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className={styles.carousel}
      >
        <SwiperSlide className={styles.carousel__item}>
          <Image priority src="/assets/mockup.jpg" fill />
        </SwiperSlide>
        <SwiperSlide className={styles.carousel__item}>
          <Image priority src="/assets/mockup.jpg" fill />
        </SwiperSlide>
        <SwiperSlide className={styles.carousel__item}>
          <Image priority src="/assets/mockup.jpg" fill />
        </SwiperSlide>
        <SwiperSlide className={styles.carousel__item}>
          <Image priority src="/assets/mockup.jpg" fill />
        </SwiperSlide>
        <SwiperSlide className={styles.carousel__item}>
          <Image priority src="/assets/mockup.jpg" fill />
        </SwiperSlide>
      </Swiper>

      <section className={styles.bottomImages}>
        <div>
          <Image priority src="/assets/mockup.jpg" width={500} height={400} />
        </div>
        <div>
          <Image priority src="/assets/mockup.jpg" width={500} height={400} />
        </div>
        <span className={styles.bottomNavigationBtn}>
          <Link href="/" rel="home_page">
            Index
          </Link>
        </span>

        <span className={styles.bottomNavigationBtn}>
          <Link href="#" rel="next_page">
            Next <BsArrowRight />
          </Link>
        </span>
      </section>
    </div>
  );
}
