'use client';

import Image from 'next/image';
import React from 'react';
import styles from './row.module.css';
import { motion, useInView } from 'framer-motion';

const Row = ({ leftImage, rightImage, fullImage, video }) => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, {
    once: true,
    amount: 0.25
  });

  const imageStyle = {
    transform: isInView ? 'none' : 'translateY(20px)',
    opacity: isInView ? 1 : 0,
    transition: 'all 0.9s ease-in'
  };

  if (fullImage) {
    return (
      <div className={styles.fullRow}>
        <Image
          ref={ref}
          src={fullImage}
          width={9999}
          height={9999}
          style={imageStyle}
          className={styles.row_image}
        />
      </div>
    );
  }
  if (leftImage || rightImage) {
    return (
      <div className={styles.row}>
        <div>
          {leftImage && (
            <div className={styles.row_image_container} grid-col="1">
              <Image
                src={leftImage}
                width={9999}
                height={9999}
                ref={ref}
                style={imageStyle}
                className={styles.row_image}
              />
            </div>
          )}
        </div>
        <div>
          {rightImage && (
            <div className={styles.row_image_container} grid-col="2">
              <Image
                src={rightImage}
                width={9999}
                height={9999}
                ref={ref}
                style={imageStyle}
                grid-col="2"
                className={styles.row_image}
              />
            </div>
          )}
        </div>
      </div>
    );
  }

  if (video) {
    return (
      <div className={styles.fullRow}>
        <video
          ref={ref}
          className={styles.row_image}
          autoPlay
          loop
          muted
          style={imageStyle}
        >
          <source src={video} type="video/mp4" />
        </video>
      </div>
    );
  }
};

export default Row;
