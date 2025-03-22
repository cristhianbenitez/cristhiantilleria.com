'use client';
import React from 'react';
import { easeIn, motion } from 'framer-motion';

function PageWrapper({ children, className }) {
  return (
    <div className={className}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0, transition: { duration: 0.5 } }}
        exit={{ opacity: 0, y: 20 }}
        suppressHydrationWarning
      >
        {children}
      </motion.div>
    </div>
  );
}

export default PageWrapper;
