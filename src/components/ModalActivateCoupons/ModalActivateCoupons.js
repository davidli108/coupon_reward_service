// @flow
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import breakpoint from 'styled-components-breakpoint';
import { MdClose } from 'react-icons/md';
import piggy from './piggy.svg';
import icon from './piggy-icon.svg';
import Cookie from 'js-cookie';
import moment from 'moment';
import { connect } from 'react-redux';
import { getIsAuthenticated } from '@modules/auth/AuthReducer';
import InstallOverlay from '@components/InstallOverlay/InstallOverlay';
import AppConfig from '@config/AppConfig';
import axios from 'axios';
import { compose } from 'recompose';
import { withTranslation } from 'react-i18next';

type ModalActivateCouponsProps = {
  title: string,
  subTitle: string,
  isActive: boolean,
  logo: string,
  callback: Function,
  isAuthenticated: boolean,
};

const isChrome = !!window.chrome;

const ModalActivateCoupons = ({
  t,
  title,
  subTitle,
  isActive,
  logo,
  callback,
  isAuthenticated,
}: ModalActivateCouponsProps) => {
  const [showActivateModal, setShowActivateModal] = useState(false);
  const [showInstallOverlay, setInstallOverlay] = useState(false);

  const getExtension = () => axios.get(AppConfig.extension.chrome);

  useEffect(() => {
    if (
      isActive &&
      isChrome &&
      !isAuthenticated &&
      !showInstallOverlay &&
      !Boolean(Cookie.get('installProcessed'))
    ) {
      getExtension().then(
        () => {
          callback();
        },
        () => {
          setShowActivateModal(isActive);
          Cookie.set('installProcessed', true, {
            expires: moment()
              .add(1, 'days')
              .toDate(),
          });
        },
      );
    } else {
      callback();
    }
  }, [isActive]);

  const handleClick = () => {
    setShowActivateModal(false);
    setInstallOverlay(true);
  };

  const installCallback = () => {
    setInstallOverlay(false);
    callback();
  };

  return (
    <>
      {showActivateModal && (
        <ModalActivateCoupons.Wrapper isActive={showActivateModal}>
          <ModalActivateCoupons.Overlay
            onClick={callback}
            isActive={isActive}
          />
          <ModalActivateCoupons.Container isActive={isActive}>
            <ModalActivateCoupons.Content>
              <MdClose onClick={callback} />
              <ModalActivateCoupons.Icon src={icon} />
              <h2>{t('coupons.activateModal.title')}</h2>
              <ModalActivateCoupons.Store>
                <img src={logo} alt={title} />
              </ModalActivateCoupons.Store>
              <div>{t('coupons.activateModal.content')}</div>
              <p>{t('coupons.activateModal.couponAbout', { title })}</p>
              <button onClick={handleClick}>
                {t('coupons.activateModal.button')}
              </button>
              <ModalActivateCoupons.Piggy src={piggy} />
            </ModalActivateCoupons.Content>
          </ModalActivateCoupons.Container>
        </ModalActivateCoupons.Wrapper>
      )}
      {showInstallOverlay && (
        <InstallOverlay
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
  height: 100%;
  width: 100%;
  cursor: pointer;
  transition: opacity 0.3s ease;
  opacity: ${({ isActive }) => Number(Boolean(isActive))};
`;

ModalActivateCoupons.Piggy = styled.img`
  position: absolute;
  right: 0;
  bottom: 0;
  display: block;
  padding: 0 !important;
`;

ModalActivateCoupons.Icon = styled.img`
  position: absolute;
  top: 17px;
  left: 15px;
  display: block;
  width: 12px;
  height: 15px;
`;

ModalActivateCoupons.Container = styled.div`
  max-width: 600px;
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
    max-width: 600px;
    margin: 30px auto;
  `}
`;

ModalActivateCoupons.Store = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 50px !important;
  width: 160px;
  height: 30px;
  padding: 0 !important;

  > img {
    padding: 0 !important;
    display: block;
    max-width: 160px;
    max-height: 130px;
  }
`;

ModalActivateCoupons.Content = styled.div`
  position: relative;
  padding: 58px 0 67px;
  box-shadow: 0 30px 60px ${props => props.theme.colors.blackAlphaDark};
  background-color: ${props => props.theme.colors.white};
  border-radius: 5px;
  overflow: hidden;
  outline: 0;
  width: 600px;
  max-width: none;
  box-sizing: border-box;

  ${breakpoint('xs')`

  `}

  ${breakpoint('sx')`

  `}

  > svg {
    position: absolute;
    top: 3px;
    right: 3px;
    cursor: pointer;
    width: 40px;
    height: 40px;
    padding: 10px;
    box-sizing: border-box;
    color: ${props => props.theme.colors.whiteDark};
    transition: color .3s ease;

    &:hover {
      color: ${props => props.theme.colors.blackGray};
    }
  }

  > div {
    max-width: 360px;
    font-size: 16px;
    line-height: 26px;
    text-align: center;
    letter-spacing: .2px;
    margin: 0 auto 26px;
    color: ${props => props.theme.colors.darkGray};
  }

  > h2 {
    padding: 0 0 50px;
    font-size: 35px;
    font-weight: bold;
    text-align: center;
    position: relative;
    z-index: 1;
    color: ${props => props.theme.colors.blackLight};

    ${breakpoint('xs')`

    `}

    ${breakpoint('sx')`

    `}

    ${breakpoint('xl')`

    `}
  }

  > p {
    padding: 0 70px;
    font-weight: bold;
    font-size: 17px;
    line-height: 26px;
    text-align: center;
    margin: 0 0 17px;
    letter-spacing: .44;
    color: ${props => props.theme.colors.blackLight};

    ${breakpoint('xs')`
      
    `}

    ${breakpoint('sx')`
      
    `}
  }

  > button {
    width: 400px;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 0;
    border-radius: 5px;
    font-weight: bold;
    font-size: 22px;
    cursor: pointer;
    line-height: 30px;
    color: ${props => props.theme.colors.white};
    margin: 0 auto;
    box-shadow: 0px 10px 14px ${props => props.theme.colors.blackAlpha};
    background-color: ${props => props.theme.colors.pinkLight};
    transition: background .3s ease;

    &:focus {
      outline: none;
    }

    &:hover {
      background-color: ${props => props.theme.colors.pinkDark};
    }
  }
`;

const mapStateToProps = state => ({
  isAuthenticated: getIsAuthenticated(state),
});

export default compose(
  connect(
    mapStateToProps,
    null,
  ),
  withTranslation(),
)(ModalActivateCoupons);
