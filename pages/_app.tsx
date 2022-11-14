import type { AppProps } from 'next/app';
import Script from 'next/script';

import Layout from '../components/layout';

import '../styles/globals.css';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'UA-151666141-1');
        `}
      </Script>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
