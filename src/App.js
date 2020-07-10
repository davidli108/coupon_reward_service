import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { ThemeProvider } from 'styled-components';

import ScrollToTop from '@components/ScrollToTop/ScrollToTop';
import { getTheme } from '@theme';
import AppConfig from '@config/AppConfig';

import routes from './routes';

import favicon from './assets/favicon.ico';
import logo from '@components/Header/logo.svg';
import { renderIubendaScripts } from './config/IubendaScript';

const { theme, GlobalStyle } = getTheme('base');

const metaKeywords = [
  'coupon codes',
  'code',
  'discounts',
  'deals',
  'coupons',
  'promotional',
  'promo',
  'promotion',
  'savings',
  'cashback',
];

const renderTrackRefsScript = () => {
  const baseUrl = new URL(AppConfig.apiUrl);
  const apiHost = baseUrl.host.includes('www')
    ? baseUrl.host.replace('www', 'api')
    : `api-${baseUrl.host}`;
  const scriptUrl = document.createElement('script');
  scriptUrl.type = 'text/javascript';
  scriptUrl.async = true;
  scriptUrl.src = `${baseUrl.protocol}//${apiHost}/js/track-refs.js`;

  document.body.appendChild(scriptUrl);
};

const App = () => {
  useEffect(() => {
    renderIubendaScripts();
    renderTrackRefsScript();
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <div>
        <Helmet titleTemplate="%s" defaultTitle="Piggy">
          <link rel="icon" type="image/png" href={favicon} sizes="16x16" />
          <meta
            name="keywords"
            content={metaKeywords}
            data-react-helmet="true"
          />
          <meta name="og:image" content={logo} />
        </Helmet>
        <GlobalStyle />
        <ScrollToTop>{routes}</ScrollToTop>
      </div>
    </ThemeProvider>
  );
};

export default App;
