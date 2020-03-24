// @flow
import React from 'react';
import { withTranslation } from 'react-i18next';
import { withRouter } from 'react-router-dom';
import styled from 'styled-components';
import { FiLogOut } from 'react-icons/fi';
import ico1 from './ico1.svg';
import ico2 from './ico2.svg';
import ico3 from './ico3.svg';
import { MdArrowForward } from 'react-icons/md';

import { IconContext } from 'react-icons';

type HeaderItemMyAccountDetailsProps = {
  t: any,
  logout: Function,
  i18n: Object,
};

const HeaderItemMyAccountDetails = ({
  t,
  logout,
  i18n,
}: HeaderItemMyAccountDetailsProps) => {
  const doLogout = () => {
    logout();
  };

  return (
    <div>
      <HeaderItemMyAccountDetails.DropdownItem href="/account/update">
        <HeaderItemMyAccountDetails.ico src={ico1} />
        <span>{t('header.accountDetails')}</span>
        <MdArrowForward />
      </HeaderItemMyAccountDetails.DropdownItem>

      <HeaderItemMyAccountDetails.DropdownItem href="/account/earnings">
        <HeaderItemMyAccountDetails.ico src={ico2} />
        <span>{t('header.earningSaving')}</span>
        <MdArrowForward />
      </HeaderItemMyAccountDetails.DropdownItem>

      <HeaderItemMyAccountDetails.DropdownItem href="/account/favorites">
        <HeaderItemMyAccountDetails.ico src={ico3} />
        <span>{t('header.favoriteStores')}</span>
        <MdArrowForward />
      </HeaderItemMyAccountDetails.DropdownItem>

      <HeaderItemMyAccountDetails.DropdownItem onClick={doLogout}>
        <span>{t('header.signOut')}</span>
        <IconContext.Provider value={{ size: '1.5em' }}>
          <div>
            <FiLogOut />
          </div>
        </IconContext.Provider>
      </HeaderItemMyAccountDetails.DropdownItem>
    </div>
  );
};

HeaderItemMyAccountDetails.Wrapper = styled.div`
  height: 100%;
  width: fit-content;
  z-index: 5;
  font-weight: 500;
  position: relative;
  display: flex;
  align-items: center;
  margin: 0 0 0 10px;

  p {
    font-size: 16px;
    line-height: 19px;
    padding: 5px 10px;
    color: #00ba4a;
    letter-spacing: 0.53px;
    margin: 0;
    font-weight: 700;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 5px;
    position: relative;
    background: 0 0;
    transition: all 0.3s ease;
    cursor: pointer;
    border: 2px solid #00ba4a;
    outline: 0;

    &::before,
    &::after {
      content: '';
      background: #00ba4a;
      position: absolute;
      z-index: -1;
      border-radius: 5px;
    }

    &::after {
      content: '';
      transition: all 0.3s ease;
      height: 0;
      left: 50%;
      top: 50%;
      width: 0;
    }

    &:hover {
      background: 0;
      color: #fff;
      border: 2px solid transparent;
      outline: 0;

      &::after {
        height: 100%;
        left: 0;
        top: 0;
        width: 100%;
      }
    }

    svg {
      width: 12px;
      margin: 0 0 0 5px;
    }
  }

  &:hover {
    p {
      background: #00ba4a;
      color: #fff;
      outline: 0;
      border-radius: 5px;
      border: 2px solid #00ba4a;

      &::after {
        height: 100%;
        left: 0;
        top: 0;
        width: 100%;
      }
    }
  }
`;

HeaderItemMyAccountDetails.DropdownWrapper = styled.div`
  display: ${props => (props.isShow ? 'flex' : 'none')};
  flex-direction: column;
  position: absolute;
  right: 0;
  top: 100%;
  min-width: 250px;
  box-shadow: 0 10px 24px rgba(0, 0, 0, 0.2);
  border-radius: 5px;
  background-color: white;
  border: 1px solid ${props => props.theme.colors.whiteLight};
  box-sizing: border-box;
  margin-top: 10px;

  &::after,
  &::before {
    bottom: 100%;
    right: 10%;
    border: solid transparent;
    content: ' ';
    height: 0;
    width: 0;
    position: absolute;
    pointer-events: none;
    z-index: 100;
  }

  &::after {
    border-color: rgba(255, 255, 255, 0);
    border-bottom-color: ${props => props.theme.colors.white};
    border-width: 5px;
    margin-right: -5px;
  }

  &::before {
    border-color: rgba(218, 221, 226, 0);
    border-bottom-color: ${props => props.theme.colors.whiteLight};
    border-width: 6px;
    margin-right: -6px;
  }
`;

HeaderItemMyAccountDetails.DropdownItem = styled.a`
  font-size: 14px;
  padding: 0 15px;
  color: #62707b;
  letter-spacing: 0.53px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 60px;
  box-sizing: border-box;
  cursor: pointer;
  transition: 0.3s;

  > span {
    width: 70%;
    text-align: left;
  }

  svg {
    width: 24px;
    height: 24px;
    fill: #b3bbc2;
  }

  &:hover {
    color: #00ba4a;

    svg {
      fill: #00ba4a;
    }
  }

  &:nth-of-type(4) {
    width: 80%;
    margin: 0 auto;
    padding: 0;
    height: 60px;
    border-top: 1px solid #f0f1f4;
    justify-content: flex-start;
    color: #b3bbc2;

    > span {
      width: auto;
      margin-right: 10px;
    }

    svg {
      width: inherit;
      height: inherit;
      fill: transparent;
    }

    &:hover {
      color: #00ba4a;

      svg {
        fill: transparent;
      }
    }
  }
`;

HeaderItemMyAccountDetails.ico = styled.img`
  display: block;
  cursor: pointer;
`;

export default withRouter(withTranslation()(HeaderItemMyAccountDetails));
