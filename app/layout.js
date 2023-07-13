import Navigation from '@/components/navigation';
import styles from './layout.module.css';
import './global.css';

import { Inter } from 'next/font/google';

// If loading a variable font, you don't need to specify the font weight
const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Cristhian Benitez - Freelance Graphic Designer',
  description:
    'Freelance Graphic Designer based in New York, specializing in brand identities, web design, app design and print design. With a passion for creative solutions and a keen eye for detail',
  keywords: [
    'graphic design',
    'design',
    'new york graphic designer',
    'freelance graphic designer',
    'brand identity',
    'web design',
    'print design'
  ]
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
