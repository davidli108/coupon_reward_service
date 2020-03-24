// @flow
import React from 'react';
import { withTranslation } from 'react-i18next';
import { withRouter } from 'react-router-dom';
import styled from 'styled-components';
import { FaCaretDown } from 'react-icons/fa';
import HeaderItemMyAccountDetails from './HeaderItemMyAcccoutDetails';

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
  return (
    <HeaderItemMyAccount.Wrapper>
      <p>
        <span>{title}</span>
        <FaCaretDown />
      </p>
      <HeaderItemMyAccount.DropdownWrapper isDe={i18n.language === 'de'}>
        <HeaderItemMyAccountDetails logout={logout} />
      </HeaderItemMyAccount.DropdownWrapper>
    </HeaderItemMyAccount.Wrapper>
  );
};

HeaderItemMyAccount.Wrapper = styled.div`
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
    letter-spacing: 0.53px;
    margin: 0;
    font-weight: 700;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 5px;
    position: relative;
    transition: all 0.3s ease;
    cursor: pointer;
    border: 2px solid ${props => props.theme.colors.greenBlank};
    outline: 0;
    border-color: ${props => props.theme.colors.greenBlank};
    color: ${props => props.theme.colors.greenBlank};
    background: 0 0;

    &::before,
    &::after {
      content: '';
      background: ${props => props.theme.colors.greenBlank};
      position: absolute;
      z-index: -1;
      border-radius: 5px;
    }

    &::after {
      content: '';
      transition: all 0.3s ease;
      height: 0;
      width: 0;
      left: 50%;
      top: 50%;
    }

    svg {
      width: 12px;
      margin: 0 0 0 5px;
    }

    &:hover {
      border-color: transparent;
      color: ${props => props.theme.colors.white};
      background: ${props => props.theme.colors.greenBlank};
      display: flex;

      &::after {
        height: 100%;
        width: 100%;
        left: 0;
        top: 0;
      }
    }
  }
`;

HeaderItemMyAccount.DropdownWrapper = styled.div`
  display: none;
  position: absolute;
  right: 0;
  top: 100%;
  min-width: 250px;
  padding-top: 10px;

  ${/* sc-selector */ HeaderItemMyAccount.Wrapper}:hover & {
    display: flex;
  }

  > div {
    min-width: 250px;
    flex-direction: column;
    box-shadow: 0 10px 24px rgba(0, 0, 0, 0.2);
    border-radius: 5px;
    background-color: white;
    border: 1px solid ${props => props.theme.colors.whiteLight};
    box-sizing: border-box;
    position: relative;

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
  }
`;

HeaderItemMyAccount.Separator = styled.div`
  display: block;
  width: 3px;
  height: 3px;
  border-radius: 50%;
  background: ${props => props.theme.colors.black};
  margin: 0 18px;
`;

HeaderItemMyAccount.DropdownItem = styled.a`
  font-size: 14px;
  padding: 0 15px;
  color: ${props => props.theme.colors.darkGray};
  letter-spacing: 0.53px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 60px;
  box-sizing: border-box;
  cursor: pointer;

  > span {
    width: 70%;
    text-align: left;
  }

  &:nth-of-type(4) {
    width: 80%;
    margin: 0 auto;
    padding: 0;
    height: 60px;
    border-top: 1px solid ${props => props.theme.colors.whitenLight};
    justify-content: flex-start;
    color: ${props => props.theme.colors.lightDark};

    > span {
      width: auto;
      margin-right: 10px;
    }
  }

  &:hover {
    color: ${props => props.theme.colors.greenBlank};
  }
`;

HeaderItemMyAccount.ico = styled.img`
  display: block;
  cursor: pointer;
`;

export default withRouter(withTranslation()(HeaderItemMyAccount));
