// @flow
import React from 'react';
import { withTranslation } from 'react-i18next';
import { compose } from 'recompose';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';

import { metaTags, openGraph } from '@config/SeoTags';
import { getIsLoaded } from '@modules/landing/LandingReducer';
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
}: HomeProps) => {

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
});

export default compose(
  connect(mapStateToProps, null),
  withTranslation(),
)(Home);
