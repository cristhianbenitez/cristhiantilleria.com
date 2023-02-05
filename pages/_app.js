import '../styles/globals.css';
import { ThemeProvider } from 'next-themes';
import Metatags from '../components/Metatags/Metatags';

const App = ({ Component, pageProps }) => {
  return (
    <ThemeProvider>
      <Component {...pageProps} />
      <Metatags />
    </ThemeProvider>
  );
};

export default App;
