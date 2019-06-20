// @flow
import React from 'react';
import Loadable from 'react-loadable';
import { Route, Switch } from 'react-router-dom';

import Footer from '@components/Footer/Footer';
import Header from '@components/Header/Header';
import Preloader from '@components/Preloader/Preloader';

const HomePage = Loadable({
  loader: () =>
    import(
      '@modules/landing/pages/HomePage' /* webpackChunkName: "HomePage" */
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

export default (
  <div style={{ overflow: 'hidden' }}>
    <Header />
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route exact path="/cashback-stores" component={StoresPage} />
      <Route exact path="/cashback-stores/:name" component={StoresPage} />
      <Route exact path="/coupons" component={CouponsPage} />
      <Route exact path="/coupons/:name" component={SplitterPage} />
      <Route exact path="/auth/not-authorized" component={NotAuthorizedPage} />

      {/* Catch all routes */}
      <Route component={NotFoundPage} />
    </Switch>
    <Footer />
  </div>
);
