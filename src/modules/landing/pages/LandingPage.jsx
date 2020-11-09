// @flow
import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { compose } from 'recompose';
import ouibounce from 'ouibounce';

import Home from './home/Home';
import HomePage from './homepage/HomePage';
import { getHomePageSetting } from '../LandingReducer';
import { SHOW_BOTH_NEW_AND_OLD_HOMEPAGE } from '../common/constants';

type LandingPageProps = {
  isExtensionInstalled: boolean,
  homePageSetting: string,
};

const LandingPage = ({
  isExtensionInstalled,
  homePageSetting,
}: LandingPageProps) => {
  const [exitIntent, setExitIntent] = useState(null);
  const [isOldHomePageVisible, setIsOldHomePageVisible] = useState(false);

  const html: any = document && document.documentElement;

  const handleMouseLeave = () => {
    setIsOldHomePageVisible(false);
    setExitIntent(null);
  };

  const activateEventListener = () => {
    if (!exitIntent) {
      if (html) {
        setExitIntent(
          ouibounce(html, {
            aggressive: true,
            sensitivity: 100,
            callback: handleMouseLeave,
          }),
        );
      }
    }
  };

  useEffect(() => {
    if (
      !isExtensionInstalled ||
      homePageSetting === SHOW_BOTH_NEW_AND_OLD_HOMEPAGE
    ) {
      setIsOldHomePageVisible(true);
      activateEventListener();

      setTimeout(() => {
        if (isOldHomePageVisible) {
          setIsOldHomePageVisible(false);
          setExitIntent(null);
        }
      }, 30000);
    }
  }, []);

  return isExtensionInstalled ? (
    <HomePage />
  ) : (
    <>
      <Home visible={isOldHomePageVisible} />
      <HomePage visible={!isOldHomePageVisible} />
    </>
  );
};

const mapStateToProps = state => ({
  isExtensionInstalled: state.app.isExtensionInstalled,
  homePageSetting: getHomePageSetting(state),
});

export default compose(connect(mapStateToProps))(LandingPage);
