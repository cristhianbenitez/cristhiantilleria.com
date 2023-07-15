'use client';

import React from 'react';
import { ReactLenis, useLenis } from '@studio-freight/react-lenis';

const SmoothScroll = ({ children }) => {
  return <ReactLenis root>{children}</ReactLenis>;
};

export default SmoothScroll;
