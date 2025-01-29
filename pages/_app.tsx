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
          function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-7EYEJD1P4P');
        `}
      </Script>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
