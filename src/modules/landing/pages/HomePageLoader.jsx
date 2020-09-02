// @flow
import React, { useState } from 'react';
import queryString from 'query-string';

import Home from './home/Home';
import HomePage from './homepage/HomePage';
import HomePageExitIntent from './homepage/components/HomePageExitIntent';

type HomePageLoaderProps = {
  setShowHeaderFooter: Function,
  isEN: boolean,
};

const HomePageLoader = ({
  isEN,
  setShowHeaderFooter,
}: HomePageLoaderProps) => {
  const params = queryString.parse(document.location.search) || {};
  const [isLandingMinimized, setIsLandingMinimized] = useState(false);
  const [isLandingMounted, setIsLandingMounted] = useState(Boolean(params.lp));

  const unmountLanding = () => {
    setIsLandingMounted(false);
    setShowHeaderFooter(true);
  };

  if (isEN) {
    return (
      <>
        { isLandingMounted && (
          <HomePageExitIntent
            unmountLanding={unmountLanding}
            isLandingMinimized={isLandingMinimized}
            setIsLandingMinimized={setIsLandingMinimized}
          />
        )}

        { (isLandingMinimized || !isLandingMounted) && (
          <>
            <HomePage />
          </>
        )}
      </>
    );
  }

  return <Home />;
};

export default HomePageLoader;
