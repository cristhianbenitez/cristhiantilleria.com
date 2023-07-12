import Navigation from '@/components/navigation';
import styles from './layout.module.css';
import './global.css';

import { Inter } from 'next/font/google';
import Head from 'next/head';

// If loading a variable font, you don't need to specify the font weight
const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Cristhian Benitez - Freelance Designer',
  description:
    'Freelance Designer based in New York, interested in crafting brand identities, websites, apps, and print designs.'
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} ${styles.container}`}>
        <Navigation />
        {children}
      </body>
    </html>
  );
}
