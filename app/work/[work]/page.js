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

import ImageViewer from 'react-simple-image-viewer';

export default function Work({}) {
  const [currentImage, setCurrentImage] = React.useState(0);
  const [isViewerOpen, setIsViewerOpen] = React.useState(false);
  const images = [
    'http://localhost:3000/_next/image?url=%2Fassets%2Fmockup.jpg&w=1920&q=75',
    'http://localhost:3000/_next/image?url=%2Fassets%2Fmockup.jpg&w=1920&q=75',
    'http://localhost:3000/_next/image?url=%2Fassets%2Fmockup.jpg&w=1920&q=75',
    'http://localhost:3000/_next/image?url=%2Fassets%2Fmockup.jpg&w=1920&q=75'
  ];

  // TODO ADD THE MODAL FOR IMAGE VIEWER

  const openImageViewer = React.useCallback((index) => {
    setCurrentImage(index);
    setIsViewerOpen(true);
  }, []);

  const closeImageViewer = () => {
    setCurrentImage(0);
    setIsViewerOpen(false);
  };

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

      <div>
        {images.map((src, index) => (
          <img
            src={src}
            onClick={() => openImageViewer(index)}
            width="300"
            key={index}
            style={{ margin: '2px' }}
            alt=""
          />
        ))}

        {isViewerOpen && (
          <ImageViewer
            src={images}
            currentIndex={currentImage}
            onClose={closeImageViewer}
            disableScroll={false}
            backgroundStyle={{
              backgroundColor: 'rgba(0,0,0,0.9)'
            }}
            closeOnClickOutside={true}
          />
        )}
      </div>

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
