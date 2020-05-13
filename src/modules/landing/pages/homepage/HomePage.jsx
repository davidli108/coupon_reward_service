// @flow
import React, {useEffect, useState} from 'react';
import {compose} from "recompose";
import {connect} from "react-redux";
import {withTranslation} from "react-i18next";
import {
  getFeaturedStore,
  getHomePageFeature,
  getTopDeals,
  getFeaturedCashback,
  getAmazonDeal,
  getCategories,
} from '@modules/landing/LandingReducer';
import {fetchHomePageFeature, FETCH_HOMEPAGE_FEATURE} from '@modules/landing/LandingActions';
import ModalActivateCoupons from '@components/ModalActivateCoupons/ModalActivateCoupons';

import HomePageCarousel from './components/HomePageCarousel';
import HomePageTopDeals from './components/HomePageTopDeals';
import HomePageFeaturedDeal from './components/HomePageFeaturedDeal';
import HomePageFeaturedCashBack from './components/HomePageFeaturedCashBack';
import HomePageCategories from './components/HomePageCategories';

import { type HomePageProps } from './HomePage.types';

import styles from './HomePage.styles';
import Cookie from "js-cookie";

const HomePage = ({
  t,
  match,
  topDeals,
  homePageFeaturedStore,
  featuredStore,
  featuredSCashback,
  amazonDeal,
  categories,
  fetchHomePageFeature,
  isAuthenticated,
  isExtensionInstalled,
}: HomePageProps) => {
  const [isLoaded, setIsLoaded] = useState(false);

  const [showActivateModal, setShowActivateModal] = useState(false);
  const [isModalShow, setIsModalShow] = useState(false);
  const [logo, setLogo] = useState('');
  const [link, setLink] = useState('');
  const [title, setTitle] = useState('');

  useEffect(() => {
    fetchHomePageFeature(FETCH_HOMEPAGE_FEATURE).then(() => setIsLoaded(true));
    setIsModalShow((isAuthenticated) || (isExtensionInstalled));
  }, [isAuthenticated, isExtensionInstalled]);

  const handleClick = (img: string, link: string, title: string) => {
    setLogo(img);
    setLink(link);
    setTitle(title);
    setShowActivateModal(true);

    if (showActivateModal && !isModalShow) {
      setIsModalShow(true);
    }

    if (Boolean(Cookie.get('installProcessed'))) {
      window.open(link, '_blank');
    }

  };

  const modalCallback = (dismiss: boolean) => {
    setShowActivateModal(false);
    if (!isModalShow) {
      setIsModalShow(true);
    } else if (!dismiss) {
      window.open(link, '_blank');
    }
  };

  return (
    <HomePage.Wrapper>
      <HomePage.Container>
        <HomePageCarousel handler={handleClick} t={t} isLoaded={isLoaded} storesData={{homePageFeaturedStore, featuredStore}}/>
        <HomePageTopDeals handler={handleClick} t={t} isLoaded={isLoaded} stores={topDeals}/>
        <HomePageFeaturedCashBack handler={handleClick} t={t} isLoaded={isLoaded} stores={featuredSCashback} />
        <HomePageFeaturedDeal handler={handleClick} t={t} isLoaded={isLoaded} stores={amazonDeal}/>
        <HomePageCategories t={t} isLoaded={isLoaded} categories={categories}/>
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
});

const mapDispatchToProps = {
  fetchHomePageFeature: fetchHomePageFeature,
};

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withTranslation(),
)(HomePage);