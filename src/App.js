import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { ThemeProvider } from 'styled-components';

import ScrollToTop from '@components/ScrollToTop/ScrollToTop';
import { getTheme } from '@theme';

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

const App = () => {
  useEffect(() => {
    renderIubendaScripts();
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <div>
        <Helmet titleTemplate="%s" defaultTitle="Piggy">
          <link rel="icon" type="image/png" href={favicon} sizes="16x16" />
          <meta name="keywords" content={metaKeywords} />
          <meta name="og:image" content={logo} />
        </Helmet>
        <GlobalStyle />
        <ScrollToTop>{routes}</ScrollToTop>
      </div>
    </ThemeProvider>
  );
};

export default App;
