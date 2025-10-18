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
        src="https://language-switcher-widget.lingrix.workers.dev/script.js"
        onLoad={() => {
          const Lingrix = (window as any).Lingrix || {};
          console.log('Lingrix script loaded');
          Lingrix.init({
            apiKey: '16020811-ad76-455a-a4d2-0cc7468261be',

            // endpoints: {
            //   widget: 'http://localhost:6500/api/public/widget/',
            //   translation:
            //     'http://localhost:6500/api/public/yo-page-translations/',
            // },
          });
        }}
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
