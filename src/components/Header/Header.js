// @flow
import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { compose } from 'recompose';
import styled from 'styled-components';
import breakpoint from 'styled-components-breakpoint';
import { withTranslation } from 'react-i18next';

import { isCouponCategory } from '@config/CategoriesConfig';
import * as actions from '@modules/auth/AuthActions';
import { getIsAuthenticated } from '@modules/auth/AuthReducer';
import SignInModal from '@modules/auth/components/SignInModal';
import SignUpModal from '@modules/auth/components/SignUpModal';
import ResetPasswordModal from '@modules/auth/components/ResetPasswordModal';
import { getLocaleConfig } from '@modules/localization/i18n';

import BurgerButton from './BurgerButton';
import HeaderItem from './HeaderItem';
import HeaderItemMyAccount from './HeaderItemMyAccount';
import logo from './logo.svg';

import Cookie from 'js-cookie';

const modal = {
  modalSignIn: 'modalSignIn',
  modalSignUp: 'modalSignUp',
  modalResetPassword: 'modalResetPassword',
};

type renderHeaderItemsProps = {
  bgColor?: string,
  hoverBgColor?: string,
  title: string,
  link?: string,
  redirect?: string,
  onClick?: Function,
};

const renderHeaderItems = (items: Array<renderHeaderItemsProps>) =>
  items.map(({ bgColor, hoverBgColor, title, link, redirect, onClick }) => (
    <HeaderItem
      bgColor={bgColor}
      hoverBgColor={hoverBgColor}
      key={title}
      link={link}
      redirect={redirect}
      onClick={onClick}
    >
      {title}
    </HeaderItem>
  ));

type HeaderProps = {
  t: Function,
  isAuthenticated: boolean,
  location: Object,
  logout: Function,
  signInCf: Function,
};

const Header = ({
  t,
  isAuthenticated,
  location,
  logout,
  signInCf,
}: HeaderProps) => {
  const [isOpen, setOpen] = useState(false);
  const [currentModal, setCurrentModal] = useState(null);
  const [cfProcessed, setCfProcessed] = useState(false);

  const localeConfig = getLocaleConfig();

  const isActiveCoupons = () => {
    const isCouponsLocation = location.pathname.indexOf('/coupons') + 1;
    const param = location.pathname.slice(9) || '';

    if (isCouponsLocation && !param) {
      return true;
    } else if (isCouponsLocation && isCouponCategory(param)) {
      return true;
    }
    return false;
  };

  useEffect(() => {
    if (!cfProcessed && Cookie.get('cf')) {
      setCfProcessed(true);
      signInCf();
    }
  }, []);

  const items = [
    {
      bgColor: isActiveCoupons() ? '#03b6d1' : '#40c8e5',
      hoverBgColor: '#02a6bf',
      title: t('header.coupons'),
      link: '/coupons',
      onClick: () => setOpen(false),
    },
    {
      bgColor:
        location.pathname.indexOf('/cashback-stores') + 1
          ? '#03b6d1'
          : '#40c8e5',
      hoverBgColor: '#02a6bf',
      title: t('header.stores'),
      link: '/cashback-stores',
      onClick: () => setOpen(false),
    },
  ];

  const authItems = [
    {
      bgColor: '#34a6bf',
      hoverBgColor: '#29899e',
      title: t('header.login'),
      onClick: () => setCurrentModal(modal.modalSignIn),
    },
    {
      bgColor: '#02a6bf',
      hoverBgColor: '#01899e',
      title: t('header.createAccount'),
      onClick: () => setCurrentModal(modal.modalSignUp),
    },
  ];

  return (
    <Header.Wrapper>
      <HeaderItem redirect="/" direct>
        <Header.Logo src={logo} alt="Join Piggy Logo" />
      </HeaderItem>
      <Header.Controls>
        {renderHeaderItems(items)}
        {localeConfig.isAuthenticationAvailable && isAuthenticated && (
          <HeaderItemMyAccount
            bgColor="#34a6bf"
            hoverBgColor="#29899e"
            title={t('header.myAccount')}
            logout={logout}
          />
        )}
        {localeConfig.isAuthenticationAvailable &&
          !isAuthenticated &&
          renderHeaderItems(authItems)}
      </Header.Controls>
      <Header.BurgerButtonWrapper>
        <BurgerButton isOpen={isOpen} onClick={() => setOpen(!isOpen)} />
      </Header.BurgerButtonWrapper>
      <Header.SlidingMenu isOpen={isOpen}>
        <div>
          <Header.Logo src={logo} alt="Join Piggy Logo" />
          {renderHeaderItems(items)}
        </div>
      </Header.SlidingMenu>
      <Header.Overlay isOpen={isOpen} onClick={() => setOpen(false)} />

      {currentModal === modal.modalSignIn && (
        <SignInModal
          onRouteModalReset={() => setCurrentModal(modal.modalResetPassword)}
          onRouteModal={() => setCurrentModal(modal.modalSignUp)}
          closeModal={setCurrentModal.bind(null)}
        />
      )}
      {currentModal === modal.modalSignUp && (
        <SignUpModal
          onRouteModal={() => setCurrentModal(modal.modalSignIn)}
          closeModal={setCurrentModal.bind(null)}
        />
      )}
      {currentModal === modal.modalResetPassword && (
        <ResetPasswordModal
          onRouteModal={() => setCurrentModal(modal.modalSignUp)}
          closeModal={setCurrentModal.bind(null)}
        />
      )}
    </Header.Wrapper>
  );
};

Header.Wrapper = styled.header`
  font-family: Roboto, Arial, sans-serif;
  letter-spacing: 0.3px;
  font-weight: 400;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #40c8e5;
  width: 100%;
  height: 100px;
  z-index: 5;
  border-bottom: 1px solid #32b2c5;
`;

Header.Overlay = styled.div`
  display: ${({ isOpen }) => (isOpen ? 'block' : 'none')};
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: black;
  opacity: 0.4;
  width: 100%;
  height: 100%;
  z-index: 3;
`;

Header.Logo = styled.img`
  height: 70px;
  width: 210px;
  cursor: pointer;
`;

Header.BurgerButtonWrapper = styled.div`
  position: absolute;
  right: 0;
  z-index: 7;

  ${breakpoint('lg')`
    display: none;
  `}
`;

Header.Controls = styled.div`
  height: 100%;
  display: none;
  align-items: center;

  ${breakpoint('lg')`
    display: flex;
  `}
`;

Header.SlidingMenu = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 0;
  right: 0;
  width: ${({ isOpen }) => (isOpen ? '350px' : '0')};
  height: 100%;
  background: #00c8e5;
  overflow: hidden;
  transition: 0.5s;
  z-index: 6;
  max-width: 100%;

  > div {
    display: flex;
    flex-direction: column;
    padding: 45px 30px;

    > div {
      width: 100%;
      height: 60px;
      background: #00c8e5;

      &:nth-child(4) {
        border-bottom: 1px solid rgba(255, 255, 255, 0.5);
      }

      &:hover {
        background: none;
      }

      > a {
        font-size: 15px;

        &:hover {
          color: #006f7f;
        }
      }
    }
  }

  ${breakpoint('lg')`
    display: none;
  `}
`;

const mapStateToProps = state => ({
  isAuthenticated: getIsAuthenticated(state),
});

const mapDispatchToProps = {
  logout: actions.logout,
  signInCf: actions.signInCf,
};

export default compose(
  connect(
    mapStateToProps,
    mapDispatchToProps,
  ),
  withRouter,
  withTranslation(),
)(Header);
