// @flow
import React, {useEffect} from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { compose } from 'recompose';
import ouibounce from 'ouibounce';

import { updateElementClassList } from '@config/Utils';
import NeverOverpayAgain from '../../lp/NeverOverpayAgain';
import {type HomePageExitIntentProps} from '../HomePage.types';
import { getIsExtensionInstalled } from '@modules/app/AppReducer';

const HomePageExitIntent = ({
  isExtensionInstalled,
  isLandingMinimized,
  setIsLandingMinimized,
  unmountLanding,
}: HomePageExitIntentProps) => {
  const html: any = document && document.documentElement;
  const options: any = {
    timer: null,
    exitIntent: null,
  };

  const handleMouseLeave = () => {
    minimizeLanding();
    options.timer && clearTimeout(options.timer);
    options.exitIntent && options.exitIntent.disable();
  };

  const minimizeLanding = () => {
    setIsLandingMinimized(true);
    updateElementClassList({
      element: 'body',
      className: 'landing-minimized',
      add: true,
    });
  };

  const activateEventListener = () => {
    if (!options.exitIntent) {
      if (html) {
        options.exitIntent = ouibounce(html, {
          aggressive: true,
          sensitivity: 100,
          callback: handleMouseLeave,
        });
      }
    }
  };

  useEffect(() => {
    if (!isExtensionInstalled) {
      activateEventListener();

      options.timer = setTimeout(() => {
          if (!isLandingMinimized) {
            minimizeLanding();
          }
      }, 30000);
    }

    return () => {
      options.exitIntent && options.exitIntent.disable();
      options.timer && clearTimeout(options.timer);
      updateElementClassList({
        element: 'body',
        className: 'landing-minimized,active',
        add: false,
      });
    };
  }, []);

  return !isExtensionInstalled
    ? <NeverOverpayAgain
        unmountLanding={unmountLanding}
        minimizeLanding={minimizeLanding}
        isLandingMinimized={isLandingMinimized}
    />
    : null;
};

const mapStateToProps = state => ({
  isExtensionInstalled: getIsExtensionInstalled(state),
});

export default compose(
  connect(mapStateToProps, null),
  withRouter
)(HomePageExitIntent);
