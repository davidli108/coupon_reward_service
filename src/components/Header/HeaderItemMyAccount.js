// @flow
import React, { useState } from 'react';
import { withTranslation } from 'react-i18next';
import { IoMdArrowDropdown } from 'react-icons/io';
import { withRouter } from 'react-router-dom';
import styled from 'styled-components';

type HeaderItemMyAccountProps = {
  bgColor?: string,
  hoverBgColor?: string,
  t: any,
  title: string,
  logout: Function,
};

const HeaderItemMyAccount = ({
  t,
  bgColor,
  hoverBgColor,
  title,
  logout,
}: HeaderItemMyAccountProps) => {
  const [isDrop, setIsDrop] = useState(false);
  const doLogout = () => {
    logout();
    setIsDrop(false);
  };

  return (
    <HeaderItemMyAccount.Wrapper
      bgColor={bgColor}
      hoverBgColor={hoverBgColor}
      onMouseLeave={() => setIsDrop(false)}
    >
      <p onMouseOver={() => setIsDrop(true)}>
        {title}
        <IoMdArrowDropdown />
      </p>
      <HeaderItemMyAccount.DropdownWrapper isShow={isDrop}>
        <HeaderItemMyAccount.DropdownItem href="/account/earnings">
          {t('coupons.earnings')}
        </HeaderItemMyAccount.DropdownItem>

        <HeaderItemMyAccount.DropdownItem href="/account/referrals">
          {t('header.inviteFriends')}
        </HeaderItemMyAccount.DropdownItem>

        <HeaderItemMyAccount.DropdownItem href="/account/preferences">
          {t('header.settings')}
        </HeaderItemMyAccount.DropdownItem>

        <HeaderItemMyAccount.DropdownItem onClick={doLogout}>
          {t('header.signOut')}
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
  background: ${({ bgColor }) => bgColor || '#40c8e5'};

  p {
    display: flex;
    align-items: center;
    box-sizing: border-box;

    width: 100%;
    height: 100%;
    padding: 0 15px;

    color: white;
    font-size: 20px;
    font-family: Roboto, sans-serif;

    cursor: pointer;

    &:hover {
      background: ${({ hoverBgColor }) => hoverBgColor || 'inherit'};
    }
  }
`;

HeaderItemMyAccount.DropdownWrapper = styled.div`
  display: ${props => (props.isShow ? 'flex' : 'none')};
  flex-direction: column;
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.175);
  border-radius: 4px;
  background-color: white;
`;

HeaderItemMyAccount.DropdownItem = styled.a`
  display: block;
  padding: 15px 0 15px 10px;
  font-size: 20px;
  font-weight: 500;
  cursor: pointer;
  color: black;

  &:hover {
    background-color: #29899e;
    color: white;
  }
`;

export default withRouter(withTranslation()(HeaderItemMyAccount));
