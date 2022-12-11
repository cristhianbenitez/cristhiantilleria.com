import { Analytics } from '@vercel/analytics/react';
import Metatags from '../components/Metatags/Metatags';
import '../styles/globals.css';

const gaId = process.env.NEXT_PUBLIC_GA_ID;

const App = ({ Component, pageProps }) => {
  return (
    <>
      <Analytics />
      <Metatags />
      <Component {...pageProps} />
    </>
  );
};

export default App;
