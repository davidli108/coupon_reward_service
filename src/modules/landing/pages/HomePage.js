// @flow
import React from 'react';
import { Helmet } from 'react-helmet';

import Header from '@components/Header/Header';

const HomePage = () => (
  <div>
    <Helmet>
      <title>Dashboard</title>
    </Helmet>
    <Header />

    <h2>Piggy Home page</h2>
  </div>
);

export default HomePage;
