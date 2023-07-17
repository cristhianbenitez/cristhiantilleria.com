'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from './box.module.css';
import { motion } from 'framer-motion';

const spanVariant = {
  hidden: { opacity: 0, y: 10 },
  hover: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

export default function Box({ project }) {
  return (
    <div className={styles.box}>
      <Link href={`/projects/${project.slug}`} className={styles.box__link}>
        <Image
          src={project.meta.thumbnail}
          alt={project.meta?.thumbnailAlt && project.meta.thumbnailAlt}
          height={9999}
          width={9999}
          className={styles.box__thumbnail}
        />
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

          {/* <span className={styles.box__title}>{project.meta.type}</span> */}
        </motion.div>
      </Link>
    </div>
  );
}
