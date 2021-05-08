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
      </Head>

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
