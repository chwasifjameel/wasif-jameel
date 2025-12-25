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
      {/* <Script
        id="weglot-script"
        strategy="afterInteractive"
        src="https://cdn.weglot.com/weglot.min.js"></Script>
      <Script id="weglot-initialize" strategy="afterInteractive">
        {`
          Weglot.initialize({
            api_key: 'wg_208776b0ba35e1a2f73b77b53465cd0f0'
          });
        `}
      </Script> */}

      <Script
        src="https://cdn.lingrix.com/script.js"
        defer
        data-lingrix-id="4301b85d-3417-4153-ab40-7442b5e462b8"
      />

      {/* <Script id="weglot" strategy="afterInteractive">
        {`
          <link rel="alternate" hreflang="en" href="https://www.wasifjameel.com" />
          <link rel="alternate" hreflang="fr" href="https://fr.wasifjameel.com" />
          <script type="text/javascript" src="https://cdn.weglot.com/weglot.min.js"></script>
          <script>
            Weglot.initialize({
            api_key: 'wg_208776b0ba35e1a2f73b77b53465cd0f0'
            });
          </script>
        `}
      </Script> */}

      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
