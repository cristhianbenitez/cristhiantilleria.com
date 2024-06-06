import { Analytics } from '@vercel/analytics/react';
import Navigation from '@/components/navigation';
import { Inter } from 'next/font/google';

import './global.css';

const inter = Inter({ subsets: ['latin'] });
export const metadata = {
  title: 'Cristhian Tilleria - Frontend Developer & Designer',
  description:
    'Cristhian Tilleria is a New York based Front End Develope & Designer working in brand-identity, ui/ux design and web development',
  keywords: [
    'design',
    'web development',
    ' graphic designer',
    'brand-identity',
    'digital-design',
    'front-end-development',
    'nyc-designer'
  ]
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Analytics />
      <body className={`container ${inter.className}`}>
        <Navigation />
        {children}
      </body>
    </html>
  );
}
