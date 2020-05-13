// @flow
import React from 'react';
import Loadable from 'react-loadable';
import { Route, Switch } from 'react-router-dom';

import Footer from '@components/Footer/Footer';
import Header from '@components/Header/Header';
import Preloader from '@components/Preloader/Preloader';
import { getDomainAttrs } from '@modules/localization/i18n';

const { domain, tld } = getDomainAttrs();
const isEN = tld === 'com' || tld === 'co.uk' || domain === 'localhost';

const HomePage = Loadable({
  loader: () =>
    import(
      '@modules/landing/pages/homepage/HomePage' /* webpackChunkName: "HomePage" */
    ),
  loading: () => <Preloader />,
});

const Home = Loadable({
  loader: () =>
    import(
      '@modules/landing/pages/home/Home' /* webpackChunkName: "HomePage" */
    ),
  loading: () => <Preloader />,
});

const NotFoundPage = Loadable({
  loader: () =>
    import(
      '@modules/landing/pages/NotFoundPage' /* webpackChunkName: "NotFoundPage" */
    ),
  loading: () => <Preloader />,
});

const StoresPage = Loadable({
  loader: () =>
    import(
      //$FlowFixMe
      '@modules/store/pages/StoresPage.js' /* webpackChunkName: "StoresPage" */
    ),
  loading: () => <Preloader />,
});

const CouponsPage = Loadable({
  loader: () =>
    import(
      '@modules/coupons/pages/CouponsPage.js' /* webpackChunkName: "CouponsPage" */
    ),
  loading: () => <Preloader />,
});

const SplitterPage = Loadable({
  loader: () =>
    import(
      '@modules/coupons/pages/SplitterPage.js' /* webpackChunkName: "SplitterPage" */
    ),
  loading: () => <Preloader />,
});

const NotAuthorizedPage = Loadable({
  loader: () =>
    import(
      '@modules/auth/pages/NotAuthorizedPage.js' /* webpackChunkName: "NotAuthorizedPage" */
    ),
  loading: () => <Preloader />,
});

const SitemapPage = Loadable({
  loader: () =>
    import(
      '@modules/sitemap/pages/SitemapPage' /* webpackChunkName: "SitemapPage" */
    ),
  loading: () => <Preloader />,
});

export default (
  <div style={{ overflow: 'hidden' }}>
    <Header />
    <Switch>
      {isEN ? (
        <Route exact path="/" component={HomePage} />
      ) : (
        <Route exact path="/" component={Home} />
      )}
      <Route exact path="/register" component={HomePage} />
      <Route exact path="/cashback-stores" component={StoresPage} />
      <Route exact path="/cashback-stores/:name" component={StoresPage} />
      <Route exact path="/coupons" component={CouponsPage} />
      <Route exact path="/coupons/:name" component={SplitterPage} />
      <Route exact path="/auth/not-authorized" component={NotAuthorizedPage} />
      <Route exact path="/sitemap" component={SitemapPage} />

      {/* Catch all routes */}
      <Route component={NotFoundPage} />
    </Switch>
    <Footer />
  </div>
);
