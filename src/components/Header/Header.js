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
import { getIsAuthenticated, isCookieSet } from '@modules/auth/AuthReducer';
import SignInModal from '@modules/auth/components/SignInModal';
import SignUpModal from '@modules/auth/components/SignUpModal';
import ResetPasswordModal from '@modules/auth/components/ResetPasswordModal';
import { getLocaleConfig } from '@modules/localization/i18n';
import { getStoresList, setExtensionInstalled } from '@modules/app/AppActions';

import BurgerButton from './BurgerButton';
import HeaderItem from './HeaderItem';
import HeaderItemMyAccount from './HeaderItemMyAccount';
import logo from './logo.svg';
import axios from 'axios';
import AppConfig from '@config/AppConfig';
import { MdArrowForward } from 'react-icons/md';
import { getOrigin, isMainSite } from '@modules/auth/AuthHelper';

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
  direct?: boolean,
  onClick?: Function,
  border?: string,
  separator?: boolean,
};

const renderHeaderItems = (items: Array<renderHeaderItemsProps>) =>
  items.map(
    ({
      bgColor,
      hoverBgColor,
      title,
      link,
      redirect,
      direct,
      onClick,
      border,
      separator,
    }) => (
      <HeaderItem
        bgColor={bgColor}
        hoverBgColor={hoverBgColor}
        key={title}
        link={link}
        border={border}
        separator={separator}
        direct={direct}
        redirect={redirect}
        onClick={onClick}
      >
        <span>{title}</span>
        <MdArrowForward />
      </HeaderItem>
    ),
  );

type HeaderProps = {
  t: Function,
  isCookieSet: Function,
  isAuthenticated: Boolean,
  location: Object,
  signOut: Function,
  setLoggedOut: Function,
  authenticate: Function,
  getStoresList: any => Promise<Object>,
  setExtensionInstalled: Function,
};

const Header = ({
  t,
  isCookieSet,
  isAuthenticated,
  location,
  signOut,
  setLoggedOut,
  authenticate,
  getStoresList,
  setExtensionInstalled,
}: HeaderProps) => {
  const [isOpen, setOpen] = useState(false);
  const [currentModal, setCurrentModal] = useState(null);

  const localeConfig = getLocaleConfig();
  const getExtension = () => axios.get(AppConfig.extension.chrome);

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

  const checkIfExtensionIsInstalled = () => {
    getExtension().then(
      () => {
        setExtensionInstalled(true);
      },
      () => {
        setExtensionInstalled(false);
      },
    );
  };

  const logout = () => {
    document.location.href = `${AppConfig.apiUrl}/auth/signout${
      !isMainSite() ? `?origin=${getOrigin()}` : ''
    }`;
  };

  useEffect(() => {
    if (!isCookieSet) {
      setLoggedOut();
    } else {
      authenticate();
    }
    checkIfExtensionIsInstalled();
  }, [location]);

  useEffect(() => {
    const body = document.body;
    if (body)
      body.style.overflowY = currentModal !== null || isOpen ? 'hidden' : '';
  }, [currentModal, isOpen]);

  useEffect(() => {
    getStoresList();
  }, []);

  const items = [
    {
      activeClass: isActiveCoupons() ? 'active' : '',
      hoverBgColor: '#02a6bf',
      title: t('header.coupons'),
      link: '/coupons',
      onClick: () => setOpen(false),
    },
    {
      activeClass:
        location.pathname.indexOf('/cashback-stores') + 1 ? 'active' : '',
      hoverBgColor: '#02a6bf',
      title: t('header.stores'),
      link: '/cashback-stores',
      onClick: () => setOpen(false),
    },
  ];

  const authItems = [
    {
      bgColor: '#02a6bf',
      hoverBgColor: '#01899e',
      title: t('header.createAccount'),
      separator: true,
      onClick: () => {
        setCurrentModal(modal.modalSignUp);
        setOpen(false);
      },
    },
    {
      bgColor: '#34a6bf',
      hoverBgColor: '#29899e',
      border: '2px',
      title: t('header.login'),
      onClick: () => {
        setCurrentModal(modal.modalSignIn);
        setOpen(false);
      },
    },
  ];

  const mobileMyAccount = [
    {
      bgColor: '#40c8e5',
      hoverBgColor: '#02a6bf',
      title: t('header.updateAccount'),
      redirect: '/account/update',
      direct: true,
    },
    {
      bgColor: '#40c8e5',
      hoverBgColor: '#02a6bf',
      title: t('header.checkEarnings'),
      redirect: '/account/earnings',
      direct: true,
    },
    {
      bgColor: '#40c8e5',
      hoverBgColor: '#02a6bf',
      title: t('header.storeFavorites'),
      redirect: '/account/favorites',
      direct: true,
    },
    {
      bgColor: '#40c8e5',
      hoverBgColor: '#02a6bf',
      title: t('header.settings'),
      redirect: '/account/preferences',
      direct: true,
    },
    {
      bgColor: '#40c8e5',
      hoverBgColor: '#02a6bf',
      title: t('header.passwordReset'),
      redirect: '/account/passwordreset',
      direct: true,
    },
    {
      bgColor: '#40c8e5',
      hoverBgColor: '#02a6bf',
      title: t('header.signOut'),
      onClick: logout,
    },
  ];

  return (
    <Header.Wrapper>
      <Header.Container>
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
        <Header.BurgerButtonWrapper onClick={() => setOpen(!isOpen)}>
          <BurgerButton isOpen={isOpen} onClick={() => setOpen(!isOpen)} />
        </Header.BurgerButtonWrapper>
        <Header.SlidingMenu isOpen={isOpen}>
          <div>
            {renderHeaderItems(items)}
            {localeConfig.isAuthenticationAvailable &&
              isAuthenticated &&
              renderHeaderItems(mobileMyAccount)}
            {localeConfig.isAuthenticationAvailable &&
              !isAuthenticated &&
              renderHeaderItems(authItems)}
          </div>
        </Header.SlidingMenu>
        <Header.Overlay isOpen={isOpen} onClick={() => setOpen(false)} />

        {currentModal === modal.modalSignIn && (
          <SignInModal
            onRouteModalReset={() => setCurrentModal(modal.modalResetPassword)}
            onRouteModal={() => setCurrentModal(modal.modalSignUp)}
            closeModal={() => setCurrentModal(null)}
          />
        )}
        {currentModal === modal.modalSignUp && (
          <SignUpModal
            onRouteModal={() => setCurrentModal(modal.modalSignIn)}
            closeModal={() => setCurrentModal(null)}
          />
        )}
        {currentModal === modal.modalResetPassword && (
          <ResetPasswordModal
            onRouteModal={() => setCurrentModal(modal.modalSignUp)}
            closeModal={() => setCurrentModal(null)}
          />
        )}
      </Header.Container>
    </Header.Wrapper>
  );
};

Header.Wrapper = styled.header`
  font-family: Roboto, Arial, sans-serif;
  letter-spacing: 0.3px;
  font-weight: 400;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 60px;
  box-sizing: border-box;
  z-index: 5;

  ${breakpoint('lg')`
    height: 85px;
  `}
`;

Header.Container = styled.div`
  width: 1170px;
  box-sizing: border-box;
  padding: 0 15px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;

  ${breakpoint('lg')`
    > div:first-child {
      margin: 0;    
    }
  `}
`;

Header.MobileRegister = styled.div`
  display: flex;
  margin: 0 50px 0 0;

  > div {
    > a {
      margin: 0;
      width: 89px;
    }
  }

  ${breakpoint('lg')`
    display: none;
  `}
`;

Header.Overlay = styled.div`
  display: ${({ isOpen }) => (isOpen ? 'block' : 'none')};
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  z-index: 4;
  background: rgba(0, 0, 0, 0.4);

  ${breakpoint('lg')`
    display: none;
  `}
`;

Header.Logo = styled.img`
  display: block;
  cursor: pointer;
`;

Header.BurgerButtonWrapper = styled.div`
  position: absolute;
  right: 20px;
  top: 19px;
  z-index: 7;
  width: 40px;
  height: 35px;
  display: flex;
  align-items: center;
  justify-content: center;

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
  width: ${({ isOpen }) => (isOpen ? '366px' : '0')};
  height: 100%;
  background: #fff;
  overflow: hidden;
  transition: 0.5s;
  z-index: 6;
  max-width: 100%;
  box-shadow: ${({ isOpen }) =>
    isOpen ? '0 4px 24px rgba(0, 0, 0, .25);' : 'none;'};

  > div {
    display: flex;
    flex-direction: column;
    padding: 55px 25px 45px 30px;

    > div {
      width: 100%;
      height: 60px;

      &:nth-child(4) {
        border-bottom: 1px solid rgba(255, 255, 255, 0.5);
      }

      &:hover {
        background: none;
      }

      > a {
        color: #374b5a;
        font-weight: 500;
        font-size: 16px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        flex: 1;
        padding: 0;
        margin: 0;
        border: 0;

        svg {
          width: 24px;
          height: 24px;
          fill: #b3bbc2;
          display: block;
        }

        &:hover {
          color: #006f7f;
        }

        &:last-child {
          margin: 0;
        }
      }
    }
  }

  ${breakpoint('lg')`
    display: none;
  `}

  ${breakpoint('xs')`
    width: ${({ isOpen }) => (isOpen ? '350px' : '0')};
  `}

  ${breakpoint('sx')`
    width: ${({ isOpen }) => (isOpen ? '363px' : '0')};
  `}
`;

const mapStateToProps = state => ({
  isAuthenticated: getIsAuthenticated(state),
  isCookieSet: isCookieSet(),
});

const mapDispatchToProps = {
  signOut: actions.signOut,
  setLoggedOut: actions.setLoggedOut,
  authenticate: actions.authenticate,
  getStoresList: getStoresList,
  setExtensionInstalled: setExtensionInstalled,
};

export default compose(
  connect(
    mapStateToProps,
    mapDispatchToProps,
  ),
  withRouter,
  withTranslation(),
)(Header);
