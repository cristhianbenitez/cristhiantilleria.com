'use client';

import { ReactLenis } from 'lenis/react';

export function Lenis({ children, options }) {
  return (
    <ReactLenis root options={options}>
      {children}
    </ReactLenis>
  );
}
