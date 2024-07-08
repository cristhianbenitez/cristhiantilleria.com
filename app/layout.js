import { Analytics } from '@vercel/analytics/react';
import Navigation from '@/components/navigation';
import { Inter } from 'next/font/google';
import { Lenis } from '@/components/lenis';

import './global.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Cristhian Tilleria - Frontend Developer & Designer',
  description:
    'Cristhian Tilleria is a New York based Front End Develope & Designer working in brand-identity, ui/ux design and web development',
  keywords: [
    'design',
    'web developer',
    'graphic-design',
    'brand-identity',
    'digital-design',
    'front-end-development',
    'nyc-designer',
    'nyc-web-designer'
  ]
};

export default function RootLayout({ children }) {
  const lenisOptions = { autoResize: true };
  return (
    <html lang="en" className={inter.className}>
      <Analytics />
      <body className={`container`}>
        <Lenis root options={lenisOptions} />
        <Navigation />
        {children}
      </body>
    </html>
  );
}
