'use client';

import Image from 'next/image';
import React, { useState } from 'react';
import styles from './row.module.css';
import { useInView, motion, AnimatePresence, easeIn } from 'framer-motion';

const Row = ({ fullImage, video, style }) => {
  const ref = React.useRef(null);
  const [selectedImage, setSelectedImage] = useState(null);
  const isInView = useInView(ref, {
    once: true,
    amount: 0.25
  });

  // Overlay animation variants
  const overlayVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.3,
        ease: [0.22, 1, 0.36, 1] // Custom cubic-bezier for smooth fade
      }
    },
    exit: {
      opacity: 0,
      transition: {
        duration: 0.2,
        ease: [0.22, 1, 0.36, 1]
      }
    }
  };

  // Image animation variants
  const imageVariants = {
    hidden: {
      scale: 0.8,
      opacity: 0,
      y: 20
    },
    visible: {
      scale: 1,
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
        easeIn: [0.12, 0, 0.39, 0], // Custom easing for natural motion
        delay: 0.1 // Slight delay for the image to appear after overlay
      }
    },
    exit: {
      scale: 0.8,
      opacity: 0,
      y: 10,
      transition: {
        duration: 0.3,
        ease: [0.22, 1, 0.36, 1]
      }
    }
  };

  return (
    <>
      <div className={styles.fullRow}>
        <Image
          ref={ref}
          src={fullImage}
          width={9999}
          height={9999}
          style={style}
          className={styles.row_image}
          onClick={() => setSelectedImage(fullImage)}
        />
      </div>
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            className={styles.overlay}
            variants={overlayVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              variants={imageVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className={styles.imageWrapper}
              layoutId={`image-${selectedImage}`} // Enables smooth layout transitions
            >
              <Image
                src={selectedImage}
                width={9999}
                height={9999}
                className={styles.overlayImage}
                alt="Enlarged view"
                priority // Ensures faster loading
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Row;
