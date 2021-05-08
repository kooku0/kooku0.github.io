/* eslint-disable react/no-danger */
/* eslint-disable jsx-a11y/iframe-has-title */
import { Global, ThemeProvider } from '@emotion/react';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import React from 'react';

import GlobalStyle from '@/styles/GlobalStyle';
import theme from '@/styles/theme';
import metaConfig from '~/meta-config';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width,initial-scale=1.0,user-scalable=no" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <title>{metaConfig.title}</title>
        {/* <!-- Google Tag Manager --> */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-KDDR59L');
              `
          }}
        />
        {/* <!-- End Google Tag Manager --> */}
        {/* <!-- Global site tag (gtag.js) - Google Analytics --> */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-88SF4487LG" />
        <script
          dangerouslySetInnerHTML={{
            __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-88SF4487LG');
              `
          }}
        />
        {/* <!-- End Global site tag (gtag.js) - Google Analytics --> */}
      </Head>
      {/* <!-- Google Tag Manager (noscript) --> */}
      <noscript>
        <iframe
          src="https://www.googletagmanager.com/ns.html?id=GTM-KDDR59L"
          height="0"
          width="0"
          style={{ display: 'none', visibility: 'hidden' }}
        />
      </noscript>
      {/* <!-- End Google Tag Manager (noscript) --> */}
      <Global styles={GlobalStyle} />
      <ThemeProvider theme={theme}>
        <React.StrictMode>
          <Component {...pageProps} />
        </React.StrictMode>
      </ThemeProvider>
    </>
  );
}

export default MyApp;
