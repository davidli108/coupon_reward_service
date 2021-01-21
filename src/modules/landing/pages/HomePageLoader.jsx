// @flow
import React, { useState, useEffect } from 'react';
import queryString from 'query-string';
import { compose } from 'recompose';
import { connect } from 'react-redux';

import Home from './home/Home';
import HomePageExitIntent from './homepage/components/HomePageExitIntent';
import LandingPage from './LandingPage';
import { fetchHomePageFeature } from '../LandingActions';
import { getHomePageSetting } from '../LandingReducer';
import HomePage from './homepage/HomePage';
import {
  SHOW_OLD_HOMEPAGE,
  SHOW_NEW_HOMEPAGE,
  SHOW_BOTH_NEW_AND_OLD_HOMEPAGE,
} from '../common/constants';

type HomePageLoaderProps = {
  setShowFooter: Function,
  fetchHomePageFeature: any => Promise<Object>,
  homePageSetting: string,
};

const HomePageLoader = ({
  setShowFooter,
  fetchHomePageFeature,
  homePageSetting,
}: HomePageLoaderProps) => {
  const params = queryString.parse(document.location.search) || {};
  const [isLandingMinimized, setIsLandingMinimized] = useState(false);
  const [isLandingMounted, setIsLandingMounted] = useState(Boolean(params.lp));

  const unmountLanding = () => {
    setIsLandingMounted(false);
    setShowFooter(true);
  };

  useEffect(() => {
    fetchHomePageFeature();
  }, []);

  useEffect(() => {
    if (isLandingMinimized) {
      setShowFooter(true);
    }
  }, [isLandingMinimized]);

  if (Boolean(params.lp)) {
    return (
      <>
        {isLandingMounted && (
          <HomePageExitIntent
            unmountLanding={unmountLanding}
            isLandingMinimized={isLandingMinimized}
            setIsLandingMinimized={setIsLandingMinimized}
          />
        )}
        <HomePage isLandingMounted={isLandingMounted} />
      </>
    );
  }

  switch (homePageSetting) {
    case SHOW_NEW_HOMEPAGE:
      return <HomePage />;
    case SHOW_OLD_HOMEPAGE:
      return <Home />;
    case SHOW_BOTH_NEW_AND_OLD_HOMEPAGE:
      return <LandingPage />;

    default:
      return <HomePage />;
  }
};

const mapStateToProps = state => ({
  homePageSetting: getHomePageSetting(state),
});

const mapDispatchToProps = {
  fetchHomePageFeature: fetchHomePageFeature,
};

export default compose(connect(mapStateToProps, mapDispatchToProps))(
  HomePageLoader,
);
