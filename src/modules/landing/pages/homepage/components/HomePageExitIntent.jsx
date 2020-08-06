// @flow
import React, {useState, useEffect} from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { compose } from 'recompose';
import ouibounce from 'ouibounce';

import { updateElementClassList } from '@config/Utils';
import NeverOverpayAgain from '../../lp/NeverOverpayAgain';
import {type HomePageExitIntentProps} from '../HomePage.types';
import { getIsExtensionInstalled } from '@modules/app/AppReducer';
import { getIsAuthenticated } from '@modules/auth/AuthReducer';

const HomePageExitIntent = ({
  location,
  isAuthenticated,
  isExtensionInstalled,
}: HomePageExitIntentProps) => {
  const [isLandingMounted, setIsLandingMounted] = useState(false);
  const [isLandingVisible, setIsLandingVisible] = useState(false);
  const [isLandingMinimized, setIsLandingMinimized] = useState(false);
  const [exitIntent, setExitIntent] = useState(null);

  const html: any = document && document.documentElement;
  const options: any = {
    timer: null,
  };

  const handleMouseLeave = () => {
    minimizeLanding();
    options.timer && clearTimeout(options.timer);
    setExitIntent(null);
  };

  const minimizeLanding = () => {
    setIsLandingMinimized(true);
    updateElementClassList({
      element: 'body',
      className: 'no-scroll',
      add: false,
    });
    updateElementClassList({
      element: 'body',
      className: 'landing-minimized',
      add: true,
    });
  };

  const isSafeToRenderLandingPage = () =>
    isLandingMounted &&
    !isAuthenticated &&
    !isExtensionInstalled;

  const activateEventListener = () => {
    if (!exitIntent) {
      setIsLandingMounted(true);
      if (html) {
        setExitIntent(
          ouibounce(html, {
            aggressive: true,
            sensitivity: 100,
            callback: handleMouseLeave,
          })
        );
      }
    }
  };

  useEffect(() => {
    if (
      !isAuthenticated &&
      !isExtensionInstalled
    ) {
      setTimeout(() => setIsLandingVisible(true));
      updateElementClassList({
        element: 'body',
        className: 'no-scroll',
        add: true,
      });
      activateEventListener();

      options.timer = setTimeout(() => {
          if (!isLandingMinimized) {
            minimizeLanding();
          }
      }, 30000);
    }

    return () => {
      setExitIntent(null);
      setIsLandingMounted(false);
      updateElementClassList({
        element: 'body',
        className: 'landing-minimized,active',
        add: false,
      });
    };
  }, []);

  return isSafeToRenderLandingPage()
    ? <NeverOverpayAgain
        isLandingVisible={isLandingVisible}
        isLandingMinimized={isLandingMinimized}
        setIsLandingMounted={setIsLandingMounted}
        setIsLandingVisible={setIsLandingVisible}
    />
    : null;
};

const mapStateToProps = state => ({
  isAuthenticated: getIsAuthenticated(state),
  isExtensionInstalled: getIsExtensionInstalled(state),
});

export default compose(
  connect(mapStateToProps, null),
  withRouter
)(HomePageExitIntent);
