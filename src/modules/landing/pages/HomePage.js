// @flow
import React from 'react';
import { Helmet } from 'react-helmet';

const HomePage = () => (
  <div>
    <Helmet>
      <title>Dashboard</title>
    </Helmet>

    <h2 style={{ padding: '50px 50px 200px' }}>Welcome to Piggy!</h2>
  </div>
);

export default HomePage;
