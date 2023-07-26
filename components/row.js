'use client';

import Image from 'next/image';
import React from 'react';
import styles from './row.module.css';
import { motion, useInView } from 'framer-motion';

const Row = ({ leftImage, rightImage, fullImage }) => {
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

  return fullImage ? (
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
  ) : (
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
};

export default Row;
