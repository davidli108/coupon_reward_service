// @flow
import React, {useEffect} from 'react';
import {withTranslation} from 'react-i18next';
import { compose } from 'recompose';
import { connect } from 'react-redux';

import HomeHero from './components/HomeHero';
import HomeHowItWorks from './components/HomeHowItWorks';
import HomeFavoriteStores from './components/HomeFavoriteStores';
import HomeQuotes from './components/HomeQuotes';
import { fetchHomePageFeature, FETCH_HOME_FEATURE } from '../../LandingActions';

import { type HomeProps } from './Home.types';

import styles from './Home.styles';

const Home = ({
    fetchHomePageFeature,
  }: HomeProps
) => {
  useEffect(() => {
    fetchHomePageFeature(FETCH_HOME_FEATURE);
  }, []);

  return (
    <Home.Wrapper>
      <HomeHero />
      <HomeHowItWorks />
      <HomeFavoriteStores />
      <HomeQuotes />
    </Home.Wrapper>
  );
};

styles(Home);

const mapDispatchToProps = {
  fetchHomePageFeature,
};

export default compose(
  connect(null, mapDispatchToProps),
  withTranslation()
)(Home);
