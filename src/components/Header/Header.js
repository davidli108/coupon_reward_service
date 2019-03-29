//@flow
import * as React from 'react';
import styled from 'styled-components';
import breakpoint from 'styled-components-breakpoint';
import { withTranslation } from 'react-i18next';

import SignInModal from '../../modules/auth/components/SignInModal';
import SignUpModal from '../../modules/auth/components/SignUpModal';
import ResetPasswordModal from '../../modules/auth/components/ResetPasswordModal';

import BurgerButton from './BurgerButton';
import HeaderItem from './HeaderItem';
import logo from './logo.svg';

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

const Header = ({ t }) => {
  const [isOpen, setOpen] = React.useState(false);
  const [currentModal, setCurrentModal] = React.useState(null);

  const items = [
    {
      bgColor: '#40c8e5',
      hoverBgColor: '#34a6bf',
      title: t('header.coupons'),
      link: '/coupons',
    },
    {
      bgColor: '#40c8e5',
      hoverBgColor: '#34a6bf',
      title: t('header.stores'),
      link: '/cashback-stores',
    },
    {
      bgColor: '#3ab7d1',
      hoverBgColor: '#ef65a0',
      title: t('header.getApp'),
      redirect:
        'https://chrome.google.com/webstore/detail/piggy-automatic-coupons-c/hfapbcheiepjppjbnkphkmegjlipojba?hl=en',
    },
    {
      bgColor: '#34a6bf',
      hoverBgColor: '#29899e',
      title: t('header.login'),
      onClick: () => setCurrentModal(modal.modalSignIn),
    },
    {
      bgColor: '#34a6bf',
      hoverBgColor: '#29899e',
      title: t('header.createAccount'),
      onClick: () => setCurrentModal(modal.modalSignUp),
    },
  ];
  return (
    <Header.Wrapper>
      <HeaderItem link="/">
        <Header.Logo src={logo} />
      </HeaderItem>
      <Header.Controls>{renderHeaderItems(items)}</Header.Controls>
      <Header.BurgerButtonWrapper>
        <BurgerButton isOpen={isOpen} onClick={() => setOpen(!isOpen)} />
      </Header.BurgerButtonWrapper>
      <Header.SlidingMenu isOpen={isOpen}>
        <div>
          <Header.Logo src={logo} />
          {renderHeaderItems(items)}
        </div>
      </Header.SlidingMenu>
      <Header.Overlay isOpen={isOpen} onClick={() => setOpen(false)} />

      {currentModal === modal.modalSignIn && (
        <SignInModal
          title={t('auth.signIn.title')}
          subTitle={t('auth.signIn.subTitle')}
          submitLabel={t('auth.signIn.button')}
          isActive={true}
          onRoutModalReset={() => setCurrentModal(modal.modalResetPassword)}
          onRoutModal={() => setCurrentModal(modal.modalSignUp)}
          closeModal={setCurrentModal.bind(null)}
        />
      )}
      {currentModal === modal.modalSignUp && (
        <SignUpModal
          title={t('auth.signUp.title')}
          subTitle={t('auth.signUp.subTitle')}
          submitLabel={t('auth.signUp.button')}
          linkTerms="https://www.joinpiggy.com/terms"
          isActive={true}
          onRoutModal={() => setCurrentModal(modal.modalSignIn)}
          closeModal={setCurrentModal.bind(null)}
        />
      )}
      {currentModal === modal.modalResetPassword && (
        <ResetPasswordModal
          title={t('auth.forgotPassword.title')}
          subTitle={t('auth.forgotPassword.subTitle')}
          submitLabel={t('auth.forgotPassword.button')}
          isActive={true}
          onRoutModal={() => setCurrentModal(modal.modalSignUp)}
          closeModal={setCurrentModal.bind(null)}
        />
      )}
    </Header.Wrapper>
  );
};

Header.Wrapper = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #40c8e5;
  width: 100%;
  height: 100px;
  z-index: 5;
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
  padding-left: 15px;
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

export default withTranslation()(Header);
