// @flow
import React, {useEffect} from 'react';
import {withTranslation} from 'react-i18next';
import { compose } from 'recompose';
import { connect } from 'react-redux';
import {Helmet} from 'react-helmet';

import {metaTags, openGraph} from '@config/SeoTags';

import HomeHero from './components/HomeHero';
import HomeHowItWorks from './components/HomeHowItWorks';
import HomeFavoriteStores from './components/HomeFavoriteStores';
import HomeQuotes from './components/HomeQuotes';
import { fetchHomePageFeature, FETCH_HOME_FEATURE } from '../../LandingActions';

import { type HomeProps } from './Home.types';

import styles from './Home.styles';

const Home = ({
  t,
  fetchHomePageFeature,
}: HomeProps) => {
  useEffect(() => {
    fetchHomePageFeature(FETCH_HOME_FEATURE);
  }, []);

  return (
    <Home.Wrapper>
      <Helmet
        title={t('homepage.page.title')}
        meta={[
          ...metaTags({description: t('homepage.page.description')}),
          ...openGraph({
            title: t('homepage.page.title'),
            description: t('homepage.page.description'),
          }),
        ]}
      />
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
