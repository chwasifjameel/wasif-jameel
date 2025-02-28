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
      <Script
        type="text/javascript"
        src="https://cdn.weglot.com/weglot.min.js"
      />
      <Script id="weglot-initialization">
        {`
          Weglot.initialize({
            api_key: 'wg_d41c91e00c0096e0d5329d30f3ba1b5d7'
          });
        `}
      </Script>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
