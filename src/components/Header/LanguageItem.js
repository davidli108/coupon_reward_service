//@flow
import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';
import styled from 'styled-components';
import { withTranslation } from 'react-i18next';

import { IoMdArrowDropdown } from 'react-icons/io';

type HeaderItemMyAccountProps = {
  i18n: any,
  history: Object,
  bgColor?: string,
  hoverBgColor?: string,
  title: string,
};

const HeaderItemMyAccount = ({
  i18n,
  history,
  bgColor,
  hoverBgColor,
  title,
}: HeaderItemMyAccountProps) => {
  const [isDrop, setIsDrop] = useState(false);

  const items = [
    {
      title: 'US',
      onClick: () => i18n.changeLanguage('en'),
    },
    {
      title: 'GB',
      onClick: () => i18n.changeLanguage('gb'),
    },
    {
      title: 'FR',
      onClick: () => i18n.changeLanguage('fr'),
    },
    {
      title: 'DE',
      onClick: () => i18n.changeLanguage('de'),
    },
  ];

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
        {items.map(i => (
          <HeaderItemMyAccount.DropdownItem
            key={`key_${i.title}`}
            onClick={() => {
              i.onClick();
              setIsDrop(false);
            }}
          >
            {i.title}
          </HeaderItemMyAccount.DropdownItem>
        ))}
      </HeaderItemMyAccount.DropdownWrapper>
    </HeaderItemMyAccount.Wrapper>
  );
};

HeaderItemMyAccount.Wrapper = styled.div`
  height: 100%;

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
  position: relative;
  display: ${props => (props.isShow ? 'flex' : 'none')};
  flex-direction: column;
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.175);
  border-radius: 4px;
  background-color: white;
  z-index: 9999;
`;

HeaderItemMyAccount.DropdownItem = styled.div`
  padding: 15px 0 15px 10px;
  font-size: 20px;
  font-weight: 500;
  cursor: pointer;

  &:hover {
    background-color: #29899e;
    color: white;
  }
`;

export default withRouter(withTranslation()(HeaderItemMyAccount));
