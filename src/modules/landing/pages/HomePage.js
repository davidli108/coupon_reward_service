// @flow
import React from 'react';
import { Helmet } from 'react-helmet';

import Header from '@components/Header/Header';
import Footer from '@components/Footer/Footer';

const HomePage = () => (
  <div style={{ overflow: 'hidden' }}>
    <Helmet>
      <title>Dashboard</title>
    </Helmet>
    <Header />

    <h2>Piggy Home page</h2>
    <Footer />
  </div>
);

export default HomePage;
