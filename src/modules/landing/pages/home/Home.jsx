// @flow
import React, { useEffect } from 'react';
import { withTranslation } from 'react-i18next';
import { compose } from 'recompose';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';

import { metaTags, openGraph } from '@config/SeoTags';
import { getIsLoaded, getHomePageSetting } from '@modules/landing/LandingReducer';
import { fetchHomePageFeature } from '@modules/landing/LandingActions';
import { hreflangMetas } from '@modules/localization/i18n';

import HomeHero from './components/HomeHero';
import HomeHowItWorks from './components/HomeHowItWorks';
import HomeFavoriteStores from './components/HomeFavoriteStores';
import HomeQuotes from './components/HomeQuotes';

import { type HomeProps } from './Home.types';

import styles from './Home.styles';
import GeneralLoader from '../../../../components/GeneralLoader';

const Home = ({
  t,
  visible = true,
  isLoaded,
  fetchHomePageFeature,
  homePageSetting,
}: HomeProps) => {
  useEffect(() => {
    if (!homePageSetting) {
      fetchHomePageFeature();
    }
  }, []);

  return (
    <Home.Wrapper visible={visible}>
      <Helmet
        title={t('homepage.page.title')}
        meta={[
          ...metaTags({ description: t('homepage.page.description') }),
          ...openGraph({
            title: t('homepage.page.title'),
            description: t('homepage.page.description'),
          }),
        ]}
      >
        {hreflangMetas.map(item => (
          <link
            rel="alternate"
            hreflang={item.hreflang}
            href={`${item.url}`}
            key={item.hreflang}
          />
        ))}
      </Helmet>
      { isLoaded ?
        <>
          <HomeHero/>
          <HomeHowItWorks/>
          <HomeFavoriteStores/>
          <HomeQuotes/>
        </> : <GeneralLoader/>
      }
    </Home.Wrapper>
  );
};

styles(Home);

const mapStateToProps = state => ({
  isLoaded: getIsLoaded(state),
  homePageSetting: getHomePageSetting(state),
});

const mapDispatchToProps = {
  fetchHomePageFeature: fetchHomePageFeature,
};

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withTranslation(),
)(Home);
