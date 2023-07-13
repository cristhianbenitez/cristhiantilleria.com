'use client';

import React, { forwardRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from './box.module.css';

export default function Box({ project }) {
  return (
    <div className={styles.box}>
      <Link href={`/projects/${project.slug}`} className={styles.box__link}>
        <div className={styles.box__thumbnail__container}>
          <Image
            src={project.meta.thumbnail}
            alt={project.meta?.thumbnailAlt && project.meta.thumbnailAlt}
            height={1000}
            width={1000}
            className={styles.box__thumbnail}
          />
        </div>
        <div className={styles.box__bottomText}>
          <span className={styles.box__title}>{project.meta.title}</span>
          <span className={styles.box__title}>{project.meta.type}</span>
        </div>
      </Link>
    </div>
  );
}
