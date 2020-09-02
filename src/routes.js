// @flow
import React, { useState } from 'react';
import Loadable from 'react-loadable';
import { Route, Switch } from 'react-router-dom';
import queryString from 'query-string';

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

const HomePageLoader = Loadable({
  loader: () =>
    import(
      '@modules/landing/pages/HomePageLoader' /* webpackChunkName: "HomePageLoader" */
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

const Routes = () => {
  const params = queryString.parse(document.location.search) || {};
  const [showHeaderFooter, setShowHeaderFooter] = useState(!Boolean(params.lp));

  return (
    <div style={{ overflow: 'hidden' }}>
      {showHeaderFooter && <Header />}
      <Switch>
        <Route
          exact
          path="/"
          render={props => (
            <HomePageLoader
              {...props}
              isEN={isEN}
              setShowHeaderFooter={setShowHeaderFooter}
            />
          )}
        />
        <Route exact path="/home" component={Home} />
        <Route exact path="/register" component={HomePage} />
        <Route exact path="/cashback-stores" component={StoresPage} />
        <Route exact path="/cashback-stores/:name" component={StoresPage} />
        <Route exact path="/coupons" component={CouponsPage} />
        <Route exact path="/coupons/:name" component={SplitterPage} />
        <Route
          exact
          path="/auth/not-authorized"
          component={NotAuthorizedPage}
        />
        <Route exact path="/sitemap" component={SitemapPage} />

        {/* Catch all routes */}
        <Route component={NotFoundPage} />
      </Switch>
      {showHeaderFooter && <Footer />}
    </div>
  );
};

export default Routes;
