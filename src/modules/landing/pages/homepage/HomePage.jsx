// @flow
import React, { useEffect, useState } from 'react';
import { withRouter } from 'react-router-dom';
import { compose } from 'recompose';
import { connect } from 'react-redux';
import { withTranslation } from 'react-i18next';
import Cookie from 'js-cookie';
import { Helmet } from 'react-helmet';
import queryString from 'query-string';

import {
  getFeaturedStore,
  getHomePageFeature,
  getTopDeals,
  getFeaturedCashback,
  getAmazonDeal,
  getCategories,
  getIsLoaded,
  getHomePageSetting,
} from '@modules/landing/LandingReducer';
import { fetchHomePageFeature } from '@modules/landing/LandingActions';
import ModalActivateCoupons from '@components/ModalActivateCoupons/ModalActivateCoupons';
import { metaTags, openGraph } from '@config/SeoTags';
import { useCurrentTld, hreflangMetas } from '@modules/localization/i18n';

import HomePageCarousel from './components/HomePageCarousel';
import HomePageTopDeals from './components/HomePageTopDeals';
import HomePageFeaturedDeal from './components/HomePageFeaturedDeal';
import HomePageFeaturedCashBack from './components/HomePageFeaturedCashBack';
import HomePageCategories from './components/HomePageCategories';
import GeneralLoader from '@components/GeneralLoader';

import { type HomePageProps } from './HomePage.types';

import styles from './HomePage.styles';

const HomePage = ({
  t,
  location,
  topDeals,
  homePageFeaturedStore,
  featuredStore,
  featuredSCashback,
  amazonDeal,
  categories,
  isLoaded,
  isAuthenticated,
  isExtensionInstalled,
  visible = true,
  fetchHomePageFeature,
  homePageSetting,
  isLandingMounted,
}: HomePageProps) => {
  const params = queryString.parse(location.search);

  const [showActivateModal, setShowActivateModal] = useState(false);
  const [isModalShow, setIsModalShow] = useState(false);
  const [logo, setLogo] = useState('');
  const [link, setLink] = useState('');
  const [title, setTitle] = useState('');

  useEffect(() => {
    if (!homePageSetting) {
      fetchHomePageFeature();
    }
  }, []);

  useEffect(() => {
    setIsModalShow(isAuthenticated || isExtensionInstalled);
  }, [isAuthenticated, isExtensionInstalled]);

  const isUK = useCurrentTld() === 'co.uk';

  const handleClick = (img: string, link: string, title: string) => {
    setLogo(img);
    setLink(link);
    setTitle(title);

    if (showActivateModal && !isModalShow) {
      setIsModalShow(true);
    }

    if (Boolean(Cookie.get('installProcessed'))) {
      window.open(`${link}${params.lp ? '&ref2=lp' : ''}`, '_blank');
    } else {
      setShowActivateModal(true);
    }
  };

  const modalCallback = (dismiss: boolean) => {
    setShowActivateModal(false);

    if (!dismiss) {
      window.open(`${link}${params.lp ? '&ref2=lp' : ''}`, '_blank');
    }
  };

  const topDealsAndFeaturedCashBack = [
    <HomePageTopDeals
      handler={handleClick}
      isLoaded={isLoaded}
      stores={topDeals}
    />,
    <HomePageFeaturedCashBack
      handler={handleClick}
      isLoaded={isLoaded}
      stores={featuredSCashback}
    />,
  ];

  if (isUK) {
    topDealsAndFeaturedCashBack.reverse();
  }

  return (
    <HomePage.Wrapper visible={visible} isLandingMounted={isLandingMounted}>
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
      {isLoaded ? (
        <>
          <HomePage.Container>
            <HomePage.Title>{t('homepage.page.h1')}</HomePage.Title>
            <HomePageCarousel
              handler={handleClick}
              isLoaded={isLoaded}
              storesData={{ homePageFeaturedStore, featuredStore }}
            />
            {topDealsAndFeaturedCashBack}
            <HomePageFeaturedDeal
              handler={handleClick}
              isLoaded={isLoaded}
              stores={amazonDeal}
            />
            <HomePageCategories isLoaded={isLoaded} categories={categories} />
          </HomePage.Container>

          {showActivateModal && (
            <ModalActivateCoupons
              isActive={showActivateModal}
              callback={modalCallback}
              title={title}
              logo={logo}
              code={''}
            />
          )}
        </>
      ) : (
        <GeneralLoader />
      )}
    </HomePage.Wrapper>
  );
};

styles(HomePage);

const mapStateToProps = state => ({
  isExtensionInstalled: state.app.isExtensionInstalled,
  isAuthenticated: state.auth.isAuthenticated,
  topDeals: getTopDeals(state),
  homePageFeaturedStore: getHomePageFeature(state),
  featuredStore: getFeaturedStore(state),
  featuredSCashback: getFeaturedCashback(state),
  amazonDeal: getAmazonDeal(state),
  categories: getCategories(state),
  isLoaded: getIsLoaded(state),
  homePageSetting: getHomePageSetting(state),
});

const mapDispatchToProps = {
  fetchHomePageFeature: fetchHomePageFeature,
};

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withTranslation(),
  withRouter,
)(HomePage);
