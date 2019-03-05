// @flow
import React from 'react';
import Loadable from 'react-loadable';
import { Route, Switch } from 'react-router-dom';

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

export default (
  <div>
    <Switch>
      <Route exact path="/" component={HomePage} />

      {/* Catch all routes */}
      <Route component={NotFoundPage} />
    </Switch>
  </div>
);
