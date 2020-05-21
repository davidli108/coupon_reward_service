// @flow
import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { compose } from 'recompose';
import styled, { withTheme } from 'styled-components';
import breakpoint from 'styled-components-breakpoint';
import { withTranslation } from 'react-i18next';
import queryString from 'query-string';

import { isCouponCategory } from '@config/CategoriesConfig';
import * as actions from '@modules/auth/AuthActions';
import { getIsAuthenticated, isCookieSet } from '@modules/auth/AuthReducer';
import SignInModal from '@modules/auth/components/SignInModal';
import SignUpModal from '@modules/auth/components/SignUpModal';
import ResetPasswordModal from '@modules/auth/components/ResetPasswordModal';
import { getLocaleConfig } from '@modules/localization/i18n';
import { getStoresList, setExtensionInstalled } from '@modules/app/AppActions';
import {
  getFilteredList,
  getIsExtensionInstalled,
} from '@modules/app/AppReducer';

import BurgerButton from './BurgerButton';
import HeaderItem from './HeaderItem';
import HeaderItemMyAccount from './HeaderItemMyAccount';
import logo from './logo.svg';
import axios from 'axios';
import AppConfig from '@config/AppConfig';
import { MdArrowForward } from 'react-icons/md';
import { getOrigin, isMainSite } from '@modules/auth/AuthHelper';
import SearchBar from '@components/SearchBar/SearchBar';
import HeaderItemMyAccountDetails from './HeaderItemMyAcccoutDetails';

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
  fontFamily?: string,
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
  i18n: Object,
  isCookieSet: Function,
  isAuthenticated: Boolean,
  location: Object,
  signOut: Function,
  match: Object,
  setLoggedOut: Function,
  authenticate: Function,
  getStoresList: any => Promise<Object>,
  setExtensionInstalled: Function,
  getFilteredList: Function,
  theme: Object,
  history: Object,
};

const Header = ({
  t,
  i18n,
  isCookieSet,
  isAuthenticated,
  location,
  signOut,
  match,
  setLoggedOut,
  authenticate,
  getStoresList,
  setExtensionInstalled,
  getFilteredList,
  theme,
  history,
}: HeaderProps) => {
  const [isOpen, setOpen] = useState(false);
  const [currentModal, setCurrentModal] = useState(null);
  const [searchValue, setSearchValue] = useState('');
  const [signUpEmail, setSignUpEmail] = useState('');

  const localeConfig = getLocaleConfig();
  const getExtension = () => axios.get(AppConfig.extension.chrome);

  const onSearchChange = e => {
    setSearchValue(e.target.value);
  };

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

    if (location.pathname === '/register') {
      const params = queryString.parse(location.search);
      if (params.e) {
        setSignUpEmail(params.e);
        history.push('/register');
      }

      setCurrentModal(modal.modalSignUp);
    }
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
      hoverBgColor: '{theme.colors.skyLightBlue}',
      title: t('header.coupons'),
      link: '/coupons',
      onClick: () => setOpen(false),
    },
    {
      activeClass:
        location.pathname.indexOf('/cashback-stores') + 1 ? 'active' : '',
      hoverBgColor: '{theme.colors.skyLightBlue}',
      title: t('header.stores'),
      link: '/cashback-stores',
      onClick: () => setOpen(false),
    },
  ];

  const authItems = [
    {
      bgColor: '{theme.colors.skyBlue}',
      hoverBgColor: '{theme.colors.skyDarkBlue}',
      title: t('header.signIn'),
      onClick: () => {
        setCurrentModal(modal.modalSignIn);
        setOpen(false);
      },
    },
    {
      bgColor: '{theme.colors.skyLightBlue}',
      hoverBgColor: '{theme.colors.skyLightDark}',
      title: t('header.createAccount'),
      border: '2px',
      onClick: () => {
        setCurrentModal(modal.modalSignUp);
        setOpen(false);
      },
    },
  ];

  const subHeaderItems = [
    {
      title: t('header.coupons'),
      link: '/coupons',
      onClick: () => setOpen(false),
    },
    {
      title: t('header.stores'),
      link: '/cashback-stores',
      onClick: () => setOpen(false),
    },
  ];

  return (
    <Header.Wrapper>
      <Header.Container>
        <Header.LogoWrapper>
          <HeaderItem redirect="/" direct>
            <Header.Logo src={logo} alt="Join Piggy Logo" />
          </HeaderItem>
          <SearchBar
            onSet={onSearchChange}
            result={searchValue ? getFilteredList(searchValue) : []}
            value={searchValue}
            setSearchValue={setSearchValue}
          />
        </Header.LogoWrapper>

        <Header.ControlsWrap>
          <Header.Controls>
            {localeConfig.isAuthenticationAvailable && isCookieSet && (
              <HeaderItemMyAccount
                bgColor={theme.colors.skyBlue}
                hoverBgColor={theme.colors.skyDarkBlue}
                title={t('header.myAccount')}
                logout={logout}
              />
            )}
            <Header.AuthItems>
              {localeConfig.isAuthenticationAvailable &&
                !isCookieSet &&
                renderHeaderItems(authItems)}
            </Header.AuthItems>
          </Header.Controls>
        </Header.ControlsWrap>
        <Header.BurgerButtonWrapper onClick={() => setOpen(!isOpen)}>
          <BurgerButton isOpen={isOpen} onClick={() => setOpen(!isOpen)} />
        </Header.BurgerButtonWrapper>
        <Header.SlidingMenu isOpen={isOpen}>
          <div>
            <Header.LoginWarp>
              {localeConfig.isAuthenticationAvailable &&
                !isCookieSet &&
                renderHeaderItems(authItems)}
            </Header.LoginWarp>

            {renderHeaderItems(items)}
            <Header.MyAccount>
              {localeConfig.isAuthenticationAvailable && isCookieSet && (
                <HeaderItemMyAccountDetails logout={logout} />
              )}
            </Header.MyAccount>
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
            signUpEmail={signUpEmail}
          />
        )}
        {currentModal === modal.modalResetPassword && (
          <ResetPasswordModal
            onRouteModal={() => setCurrentModal(modal.modalSignUp)}
            closeModal={() => setCurrentModal(null)}
          />
        )}
      </Header.Container>

      {match.path === '/' && (
        <Header.SubNav>{renderHeaderItems(subHeaderItems)}</Header.SubNav>
      )}
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
  z-index: 15;
  box-shadow: 0 4px 34px rgba(0, 0, 0, 0.1);
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  background: ${props => props.theme.colors.white};

  ${breakpoint('ss')`
    height: 65px;
  `}

  &::before {
    content: '';
    display: block;
    position: absolute;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    z-index: 1;
    box-shadow: 0 0 40px rgba(0, 0, 0, 0.05);
    background-color: #fff;
  }
`;

Header.LogoWrapper = styled.div`
  display: flex;
  align-items: center;

  ${breakpoint('xs')`
    width: calc(100% - 40px);
    justify-content: space-between;
  `}

  ${breakpoint('md')`
    width: auto;
    justify-content: flex-start;
  `}
`;

Header.Container = styled.div`
  width: 1170px;
  box-sizing: border-box;
  padding: 0 15px;
  margin: 0 auto;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  position: relative;
  z-index: 2;
  height: 100%;

  > div:first-child {
    margin-right: auto;
  }
  ${breakpoint('lg')`
    justify-content: space-between;

    > div:first-child {
      margin: 0;
    }
  `}
`;

Header.AuthItems = styled.div`
  display: flex;

  a {
    font-size: 14px;
  }

  span {
    font-family: ${({ theme }) => theme.fonts.montserrat} !important;
  }
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
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  z-index: 4;

  ${breakpoint('lg')`
    display: none;
  `};
`;

Header.Logo = styled.img`
  display: block;
  cursor: pointer;
`;

Header.BurgerButtonWrapper = styled.div`
  position: absolute;
  right: 10px;
  top: 14px;
  z-index: 7;
  width: 40px;
  height: 35px;
  display: flex;
  align-items: center;
  justify-content: center;

  ${breakpoint('ss')`
    right: 20px;
    top: 15px;
  `}

  ${breakpoint('md')`
    display: none;
  `}
`;

Header.ControlsWrap = styled.div`
  height: 100%;
  align-items: center;

  ${breakpoint('lg')`
    display: flex;
  `}
`;

Header.Controls = styled.div`
  height: 100%;
  display: none;
  align-items: center;

  ${breakpoint('md')`
    display: flex;
    margin-left: -30px;
  `}
`;

Header.ControlLogin = styled.div`
  display: flex;
  margin: 0 25px 0 5px;

  ${breakpoint('ss')`
    margin: 0 50px 0 10px;
  `}

  ${breakpoint('lg')`
    margin-right: 0px;
  `}

  a {
    padding: 6px 15px;

    ${breakpoint('ss')`
      padding: 6px 30px;
    `}

    ${breakpoint('lg')`
      padding: 5px 10px;
    `}

    ${breakpoint('xl')`
      padding: 5px 30px;
    `}
  }
`;

Header.SlidingMenu = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 0;
  right: 0;
  width: ${({ isOpen }) => (isOpen ? '366px' : '0')};
  height: 100vh;
  background: ${props => props.theme.colors.white};
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

      &:nth-child(3) {
        border-bottom: 1px solid ${props => props.theme.colors.whitenLight};
        margin-bottom: 20px;
      }

      &:hover {
        background: none;
      }

      > ${HeaderItem.NavLink} {
        color: ${props => props.theme.colors.blackLight};
        font-weight: 500;
        font-size: 16px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        flex: 1;
        padding: 0;
        margin: 0;
        border: 0;
        height: 60px;
        transition: 0.3s;

        svg {
          width: 24px;
          height: 24px;
          fill: ${props => props.theme.colors.lightDark};
          display: block;
        }

        &:hover {
          color: ${props => props.theme.colors.greenBlank};

          svg {
            fill: ${props => props.theme.colors.greenBlank};
          }
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
    width: 100%;
    left: 0;
    right: 0;
    top: 0;
    height: auto;
    box-shadow: ${({ isOpen }) =>
      isOpen ? '0 4px 24px rgba(0, 0, 0, .25);' : 'none;'};
    transform: translate3d(0, ${({ isOpen }) => (isOpen ? '0' : '-100%')}, 0);
  `}
`;

Header.LoginWarp = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: inherit;
  margin-top: 20px;

  ${HeaderItem.Wrapper} {
    width: 48%;

    > a {
      width: 100%;
      border: 2px solid ${props => props.theme.colors.greenBlank};
    }
  }
`;

Header.MyAccount = styled.div`
  a {
    padding: 0;

    span {
      width: 70%;
    }

    &:nth-of-type(4) {
      width: 100%;
      border: 0;
      justify-content: flex-end;
      margin: 0;
    }
  }
`;

Header.SubNav = styled.div`
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  height: 40px;
  display: none;
  z-index: 0;
  justify-content: center;
  background-color: #fff;
  box-shadow: 0 0 40px rgba(0, 0, 0, 0.05);
  padding: 0;

  ${breakpoint('md')`
    display: flex;
    padding: 0;
  `}

  ${breakpoint('xl')`
    padding: 0 110px 0 0;
  `}

  div {
    margin: 0;
  }

  a {
    padding: 0 40px;
    border: 0;
    height: 40px;
    font-weight: 500;
    font-size: 14px;
    color: ${({ theme }) => theme.colors.darkGray};
    text-decoration: none;

    ::after,
    ::before {
      display: none;
    }

    &:hover {
      color: inherit;
    }

    &.active {
      color: ${({ theme }) => theme.colors.greenBlank};
    }

    ${breakpoint('md')`
      display: flex;

      svg {
        display: none;
      }
    `}
  }
`;

const mapStateToProps = state => ({
  isAuthenticated: getIsAuthenticated(state),
  isCookieSet: isCookieSet(),
  isExtensionInstalled: getIsExtensionInstalled(state),
  getFilteredList: getFilteredList(state),
});

const mapDispatchToProps = {
  signOut: actions.signOut,
  setLoggedOut: actions.setLoggedOut,
  authenticate: actions.authenticate,
  getStoresList: getStoresList,
  setExtensionInstalled: setExtensionInstalled,
};

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withRouter,
  withTheme,
  withTranslation(),
)(Header);
