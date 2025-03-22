'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from './box.module.css';
import { motion } from 'framer-motion';
import useIsDesktop from '@/hooks/useIsDesktop';

function getSpanVariant(isDesktop) {
  return {
    hidden: {
      opacity: isDesktop ? 0 : 1,
      y: isDesktop ? 10 : 0,
    },
    hover: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };
}

function ThumbnailImage({ project }) {
  return (
    <div className={styles.box__thumbnail_container}>
      <Image
        src={project.meta.thumbnail}
        alt={project.meta?.thumbnailAlt || ''}
        width={700}
        height={475}
        quality={60}
        priority={true}
        sizes="(max-width: 640px) 90vw, (max-width: 1024px) 50vw, 50vw"
        className={styles.box__thumbnail}
        placeholder="blur"
        blurDataURL={project.meta.blurDataURL}
        style={{
          objectFit: 'cover',
          transition: 'transform 0.3s ease-in-out',
        }}
      />
    </div>
  );
}

function BottomText({ type, title }) {
  const isDesktop = useIsDesktop();
  const spanVariant = getSpanVariant(isDesktop);

  return (
    <motion.div
      initial="hidden"
      animate={isDesktop ? 'hidden' : 'hover'}
      whileHover="hover"
      className={styles.box__bottomText}
    >
      <motion.span variants={spanVariant} layoutId="underline" className={styles.box__title}>
        {type}
      </motion.span>
      <motion.span variants={spanVariant} layoutId="underline" className={styles.box__title}>
        {title}
      </motion.span>
    </motion.div>
  );
}

export default React.memo(function Box({ project }) {
  return (
    <div className={styles.box}>
      <Link href={`/projects/${project.slug}`} className={styles.box__link}>
        <ThumbnailImage project={project} />
        <BottomText type={project.meta.type} title={project.meta.title} />
      </Link>
    </div>
  );
});
