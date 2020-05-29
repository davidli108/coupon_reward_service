// @flow
import React, { useEffect, useState } from 'react';
import { withRouter } from 'react-router-dom';
import styled from 'styled-components';
import { compose } from 'recompose';
import { withTranslation } from 'react-i18next';
import { Helmet } from 'react-helmet';
import { isMobile } from 'react-device-detect';
import Cookie from 'js-cookie';
import moment from 'moment';
import { connect } from 'react-redux';

import { getIsExtensionInstalled } from '../../modules/app/AppReducer';
import { getIsAuthenticated } from '@modules/auth/AuthReducer';

import ModalAnimation from '../ModalAnimation';
import InstallOverlay from '@components/InstallOverlay/InstallOverlay';
import breakpoint from 'styled-components-breakpoint';

type ModalActivateCouponsProps = {
  t: Function,
  match: Object,
  title: string,
  isActive: boolean,
  logo: string,
  callback: Function,
  isAuthenticated: boolean,
  isExtensionInstalled: boolean,
  code: string,
};

const isChrome = !!window.chrome;

const ModalActivateCoupons = ({
  t,
  match,
  title,
  isActive,
  logo,
  callback,
  isAuthenticated,
  isExtensionInstalled,
  code,
}: ModalActivateCouponsProps) => {
  const [showActivateModal, setShowActivateModal] = useState(false);
  const [modalMounted, setModalMounted] = useState(false);
  const [showInstallOverlay, setInstallOverlay] = useState(false);

  const triggerEvent = () => {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
      pageCategory: 'Web Modal - Start Install',
      event: 'install_screen_load',
      label: match.url,
    });
  };

  useEffect(() => {
    if (
      isActive &&
      isChrome &&
      !isMobile &&
      !isExtensionInstalled &&
      !isAuthenticated &&
      !showInstallOverlay &&
      !Boolean(Cookie.get('installProcessed')) &&
      title !== 'Amazon'
    ) {
      setModalMounted(true);
      setTimeout(() => {
        setShowActivateModal(isActive);
        triggerEvent();
      });
      Cookie.set('installProcessed', true, {
        expires: moment()
          .add(1, 'days')
          .toDate(),
      });
    } else {
      callback();
    }
  }, [isActive]);

  const handleClick = e => {
    e.preventDefault();
    setShowActivateModal(false);
    setTimeout(() => {
      setModalMounted(false);
      setInstallOverlay(true);
    }, 300);

    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
      pageCategory: 'Web Modal - Start Install',
      event: 'start_install',
      label: match.url,
    });
  };

  const installCallback = () => {
    setInstallOverlay(false);
    if (code) {
      callback();
    } else {
      callback(true);
    }
  };

  const dismissModal = e => {
    e.preventDefault();
    setShowActivateModal(false);
    setTimeout(() => {
      setModalMounted(false);
      callback();
    }, 300);

    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
      pageCategory: 'Web Modal - Start Install',
      event: 'cancel_install_exit',
      label: match.url,
    });
  };

  return (
    <>
      <Helmet>
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>
      {modalMounted && (
        <ModalActivateCoupons.Wrapper isActive={showActivateModal}>
          <ModalActivateCoupons.Overlay
            onClick={dismissModal}
            isActive={showActivateModal}
          />
          <ModalActivateCoupons.Container isActive={showActivateModal}>
            <ModalAnimation
              storeName={title}
              storeLogo={logo}
              handleClick={handleClick}
              dismissModal={dismissModal}
            />
          </ModalActivateCoupons.Container>
        </ModalActivateCoupons.Wrapper>
      )}
      {showInstallOverlay && (
        <InstallOverlay
          code={code}
          isActive={showInstallOverlay}
          callback={installCallback}
        />
      )}
    </>
  );
};

ModalActivateCoupons.Wrapper = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100% !important;
  height: 100% !important;
  margin: unset !important;
  z-index: 1050;
  display: flex;
  justify-content: center;
  pointer-events: ${({ isActive }) => (isActive ? 'auto' : 'none')};
`;

ModalActivateCoupons.Overlay = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  background: ${props => props.theme.colors.modalOverlayBg};
  height: 100% !important;
  width: 100% !important;
  max-width: unset !important;
  margin: 0 !important;
  cursor: pointer;
  transition: opacity 0.3s ease;
  opacity: ${({ isActive }) => Number(Boolean(isActive))};
`;

ModalActivateCoupons.Container = styled.div`
  position: absolute;
  transition: all 0.3s ease-in-out;
  transform: translate3d(
    0,
    ${({ isActive }) => (isActive ? '135px' : '-100vh')},
    0
  );

  ${breakpoint('xs')`
    max-width: 100%;
  `}

  ${breakpoint('md')`
    margin: 30px auto;
  `}

  ${breakpoint('lg')`
    margin: 30px auto;
  `}
`;

const mapStateToProps = state => ({
  isAuthenticated: getIsAuthenticated(state),
  isExtensionInstalled: getIsExtensionInstalled(state),
});

export default compose(
  connect(mapStateToProps, null),
  withTranslation(),
  withRouter,
)(ModalActivateCoupons);
