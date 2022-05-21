import Script from 'next/script';
import Metatags from '../components/Metatags/Metatags';
import '../styles/globals.css';

const gaId = process.env.NEXT_PUBLIC_GA_ID;

const App = ({ Component, pageProps }) => {
  return (
    <>
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`}
      />

      <Script strategy="afterInteractive" id="google-analytics">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', '${gaId}')
        `}
      </Script>
      <Metatags />
      <Component {...pageProps} />
    </>
  );
};

export default App;
