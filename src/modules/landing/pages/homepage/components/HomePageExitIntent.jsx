// @flow
import React, { useEffect, useState } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { compose } from 'recompose';
import ouibounce from 'ouibounce';

import { updateElementClassList, ScriptLoader } from '@config/Utils';
import NeverOverpayAgain from '../../lp/NeverOverpayAgain';
import { type HomePageExitIntentProps } from '../HomePage.types';
import { getIsExtensionInstalled } from '@modules/app/AppReducer';
import BonusModal from '../../lp/BonusModal';

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
  const [isModalShown, setIsModalShown] = useState(false);
  const [modalData, setModalData] = useState(null);
  const [bonusesFetched, setBonusesFetched] = useState(false);
  const bonusJs = new ScriptLoader({ src: '/js/bonus.js', global: 'bonus' });

  const handleMouseLeave = () => {
    if (modalData && modalData.ApplicableBonusModals.length > 0) {
      setIsModalShown(true);
    } else {
      minimizeLanding();
    }
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

  const maximizeLanding = () => {
    setIsLandingMinimized(false);
    updateElementClassList({
      element: 'body',
      className: 'landing-minimized',
      add: false,
    });
    updateElementClassList({
      element: 'body',
      className: 'landing-maximized',
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
    bonusJs
      .load()
      .then(() => {
        window.bonus
          .getBonusProgramsByActivationPrompt(window.bonus.LP_INSTALL_BONUS)
          .then(data => {
            setModalData(data.programModals);
          })
          .catch(error => {
            console.log('Error Fetching Programs ' + error);
          })
          .finally(_ => setBonusesFetched(true));
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  useEffect(() => {
    if (!isExtensionInstalled) {
      activateEventListener();
    }

    if (
      modalData &&
      modalData.ApplicableBonusModals &&
      modalData.ApplicableBonusModals.length === 0
    ) {
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
  }, [modalData]);

  return !isExtensionInstalled ? (
    <>
      <NeverOverpayAgain
        unmountLanding={unmountLanding}
        minimizeLanding={minimizeLanding}
        maximizeLanding={maximizeLanding}
        isLandingMinimized={isLandingMinimized}
        isModalShown={isModalShown}
        setIsModalShown={setIsModalShown}
        bonusesFetched={bonusesFetched}
      />

      {isModalShown && <BonusModal data={modalData} />}
    </>
  ) : null;
};

const mapStateToProps = state => ({
  isExtensionInstalled: getIsExtensionInstalled(state),
});

export default compose(
  connect(mapStateToProps, null),
  withRouter,
)(HomePageExitIntent);
