'use client';
import React from 'react';
import { easeIn, motion } from 'framer-motion';
import { Fragment } from 'react';

function PageWrapper({ children, className }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0, transition: { duration: 0.5 } }}
      exit={{ opacity: 0, y: 20 }}
      className={className}
      suppressHydrationWarning
    >
      {children}
    </motion.div>
  );
}

export default PageWrapper;
