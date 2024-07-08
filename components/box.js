'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from './box.module.css';
import { motion } from 'framer-motion';
import { shimmer, toBase64 } from '@/libs/shimmer';

export default React.memo(function Box({ project }) {
  const spanVariant = {
    hidden: { opacity: 0, y: 10 },
    hover: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };
  return (
    <div className={styles.box}>
      <Link href={`/projects/${project.slug}`} className={styles.box__link}>
        <div className={styles.box__thumbnail_container}>
          <Image
            src={project.meta.thumbnail}
            alt={project.meta?.thumbnailAlt || ''}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 2560px) 50vw"
            className={styles.box__thumbnail}
            placeholder="blur"
            blurDataURL={`data:image/svg+xml;base64,${toBase64(
              shimmer(700, 475)
            )}`}
            priority
          />
        </div>
        <div
          aria-hidden
          aria-label="Project title and type only visible in small screens"
          className={styles.box__bottomText__smallScreens}
        >
          <span> {project.meta.title}</span>
          <span> {project.meta.type}</span>
        </div>
        <motion.div
          initial="hidden"
          animate="initial"
          whileHover="hover"
          className={styles.box__bottomText}
        >
          <motion.span
            variants={spanVariant}
            layoutId="underline"
            className={styles.box__title}
          >
            {project.meta.title}
          </motion.span>
          <motion.span
            variants={spanVariant}
            layoutId="underline"
            className={styles.box__title}
          >
            {project.meta.type}
          </motion.span>
        </motion.div>
      </Link>
    </div>
  );
});
