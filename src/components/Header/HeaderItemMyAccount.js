// @flow
import React, { useState } from 'react';
import { withTranslation } from 'react-i18next';
import { withRouter } from 'react-router-dom';
import styled from 'styled-components';
import { FaChevronDown } from 'react-icons/fa';

type HeaderItemMyAccountProps = {
  t: any,
  title: string,
  logout: Function,
  i18n: Object,
};

const HeaderItemMyAccount = ({
  t,
  title,
  logout,
  i18n,
}: HeaderItemMyAccountProps) => {
  const [isDrop, setIsDrop] = useState(false);
  const doLogout = () => {
    logout();
    setIsDrop(false);
  };

  return (
    <HeaderItemMyAccount.Wrapper onMouseLeave={() => setIsDrop(false)}>
      <HeaderItemMyAccount.Separator />
      <p onMouseOver={() => setIsDrop(true)}>
        <span>{title}</span>
        <FaChevronDown />
      </p>
      <HeaderItemMyAccount.DropdownWrapper
        isShow={isDrop}
        isDe={i18n.language === 'de'}
      >
        <HeaderItemMyAccount.DropdownItem href="/account/earnings">
          <span>{t('coupons.earnings')}</span>
        </HeaderItemMyAccount.DropdownItem>

        <HeaderItemMyAccount.DropdownItem href="/account/preferences">
          <span>{t('header.settings')}</span>
        </HeaderItemMyAccount.DropdownItem>

        <HeaderItemMyAccount.DropdownItem onClick={doLogout}>
          <span>{t('header.signOut')}</span>
        </HeaderItemMyAccount.DropdownItem>
      </HeaderItemMyAccount.DropdownWrapper>
    </HeaderItemMyAccount.Wrapper>
  );
};

HeaderItemMyAccount.Wrapper = styled.div`
  height: 100%;
  width: fit-content;
  z-index: 5;
  font-weight: bold;
  position: relative;
  display: flex;
  align-items: center;

  p {
    font-size: 16px;
    padding: 0 10px;
    color: #00ba4a;
    letter-spacing: 0.53px;
    font-weight: 700;
    display: flex;
    align-items: center;
    height: 35px;
    border-radius: 5px;
    position: relative;
    background: 0 0;
    transition: all 0.3s ease;
    box-sizing: border-box;
    cursor: pointer;
    border: 2px solid #00ba4a;

    svg {
      width: 12px;
      margin: 0 0 0 5px;
    }

    &::before,
    &::after {
      content: '';
      background: #00dc58;
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
  }

  &:hover {
    p {
      background: 0 0;
      color: #fff;
      border: 2px solid transparent;

      &::after {
        height: 100%;
        left: 0;
        top: 0;
        width: 100%;
      }
    }
  }
`;

HeaderItemMyAccount.Separator = styled.div`
  display: block;
  width: 3px;
  height: 3px;
  border-radius: 50%;
  background: #000;
  margin: 0 18px;
`;

HeaderItemMyAccount.DropdownWrapper = styled.div`
  display: ${props => (props.isShow ? 'flex' : 'none')};
  flex-direction: column;
  padding: 5px 0;
  position: absolute;
  right: 0;
  top: 100%;
  min-width: 100%;
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.175);
  border-radius: 4px;
  background-color: white;
`;

HeaderItemMyAccount.DropdownItem = styled.a`
  font-size: 16px;
  padding: 0 15px;
  color: #899197;
  letter-spacing: 0.53px;
  font-weight: 700;
  display: flex;
  align-items: center;
  height: 35px;
  border-radius: 5px;
  position: relative;
  background: 0 0;
  transition: all 0.3s ease;
  box-sizing: border-box;
  cursor: pointer;

  span {
    position: relative;
    z-index: 1;
  }

  &::before,
  &::after {
    content: '';
    background: #899197;
    position: absolute;
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
    background: 0 0;
    color: #fff;

    &::after {
      height: 100%;
      left: 0;
      top: 0;
      width: 100%;
    }
  }
`;

export default withRouter(withTranslation()(HeaderItemMyAccount));