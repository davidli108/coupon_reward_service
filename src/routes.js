// @flow
import React from 'react';
import Loadable from 'react-loadable';
import { Route, Switch } from 'react-router-dom';

import Footer from '@components/Footer/Footer';
import Header from '@components/Header/Header';
import Preloader from '@components/Preloader/Preloader';

const HomePage = Loadable({
  loader: () =>
    import('@modules/landing/pages/HomePage' /* webpackChunkName: "HomePage" */),
  loading: () => <Preloader />,
});

const NotFoundPage = Loadable({
  loader: () =>
    import('@modules/landing/pages/NotFoundPage' /* webpackChunkName: "NotFoundPage" */),
  loading: () => <Preloader />,
});

const StoresPage = Loadable({
  loader: () =>
    import(//$FlowFixMe
    '@modules/store/pages/StoresPage.js' /* webpackChunkName: "StoresPage" */),
  loading: () => <Preloader />,
});

const StorePage = Loadable({
  loader: () =>
    import('@modules/storeCoupons/pages/StorePage' /* webpackChunkName: "NotFoundPage" */),
  loading: () => <Preloader />,
});

const CouponsPage = Loadable({
  loader: () =>
    import('@modules/coupons/pages/CouponsPage.js' /* webpackChunkName: "CouponsPage" */),
  loading: () => <Preloader />,
});

export default (
  <div style={{ overflow: 'hidden' }}>
    <Header />
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route exact path="/stores" component={StoresPage} />
      <Route exact path="/coupons/:storeName" component={StorePage} />
      <Route exact path="/coupons" component={CouponsPage} />

      {/* Catch all routes */}
      <Route component={NotFoundPage} />
    </Switch>
    <Footer />
  </div>
);
