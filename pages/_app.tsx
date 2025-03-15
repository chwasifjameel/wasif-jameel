import type { AppProps } from 'next/app';
import Script from 'next/script';
import Head from 'next/head';

import Layout from '../components/layout';

import '../styles/globals.css';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Head>
        <link
          rel="alternate"
          hrefLang="en"
          href="https://www.wasifjameel.com"
        />
        <link rel="alternate" hrefLang="ur" href="https://ur.wasifjameel.com" />
      </Head>

      <Script
        type="text/javascript"
        src="https://www.googletagmanager.com/gtag/js?id=G-7EYEJD1P4P"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-7EYEJD1P4P');
        `}
      </Script>

      <Script
        src="https://cdn.weglot.com/weglot.min.js"
        strategy="beforeInteractive"
      />
      <Script id="weglot-init" strategy="afterInteractive">
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
