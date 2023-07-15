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
        width={600}
        height={600}
        style={imageStyle}
      />
    </div>
  ) : (
    <div className={styles.row}>
      <div>
        {leftImage && (
          <Image
            src={leftImage}
            width={600}
            height={600}
            ref={ref}
            style={imageStyle}
            grid-col="1"
          />
        )}
      </div>
      <div>
        {rightImage && (
          <Image
            src={rightImage}
            width={600}
            height={600}
            ref={ref}
            style={imageStyle}
            grid-col="2"
          />
        )}
      </div>
    </div>
  );
};

export default Row;
