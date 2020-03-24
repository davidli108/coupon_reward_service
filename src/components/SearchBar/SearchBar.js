// @flow
import React, { useState } from 'react';
import styled from 'styled-components';
import breakpoint from 'styled-components-breakpoint';
import { withRouter } from 'react-router-dom';
import { withTranslation } from 'react-i18next';
import IconSearch from './icon-search.svg';
import IconClose from './icon-close.svg';
import SearchBarItems from './SearchBarItems';

type SearchBarProps = {
  t: Function,
  history: Object,
  onSet: Function,
  result: Object,
  value: string,
  setSearchValue: Function,
};

const SearchBar = ({
  t,
  history,
  value,
  onSet,
  result,
  setSearchValue,
}: SearchBarProps) => {
  const [isShowItems, setIsShowItems] = useState(false);
  const [refItemsWrapper, setRefItemsWrapper] = useState(null);
  const [refSearchBar, setRefSearchBar] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(-1);
  const [isMenuActive, setIsMenuActive] = useState(false);

  const html: HTMLElement | null = document.querySelector('html');

  const onCloseItems: EventListener = e => {
    const isOutClick =
      refItemsWrapper &&
      refSearchBar &&
      !refItemsWrapper.contains(e.target) &&
      !refSearchBar.contains(e.target);

    if (isOutClick && html) {
      setIsShowItems(false);
      setCurrentIndex(-1);
      html.removeEventListener('mousedown', onCloseItems);
    }
  };

  const onOpenItems = () => {
    if (!isShowItems && html) {
      setIsShowItems(true);
      setCurrentIndex(-1);
      html.addEventListener('mousedown', onCloseItems);
    }
  };

  const onKeyUp = e => {
    if (e.keyCode === 38) {
      setCurrentIndex(currentIndex > 0 ? currentIndex - 1 : currentIndex);
    }
    if (e.keyCode === 40) {
      setCurrentIndex(
        currentIndex < result.length - 1 ? currentIndex + 1 : currentIndex,
      );
    }
    if (e.keyCode === 13) {
      if (html) {
        html.removeEventListener('mousedown', onCloseItems);
      }
      if (currentIndex >= 0) {
        setIsShowItems(false);
        setCurrentIndex(-1);
        history.push(`/coupons/${result[currentIndex].short_name}`);
      }
    }
  };

  const toggleMenu = () => {
    setIsMenuActive(!isMenuActive);
  };

  return (
    <SearchBar.SearchShortMobile className={isMenuActive ? 'active' : ''}>
      <SearchBar.SearchButtonMobile onClick={toggleMenu}>
        <SearchBar.Icon src={IconSearch} alt="search" />
      </SearchBar.SearchButtonMobile>
      <SearchBar.SearchContent>
        <SearchBar.Wrapper ref={setRefSearchBar} onKeyUp={onKeyUp}>
          <SearchBar.Icon src={IconSearch} alt="search" />
          <SearchBar.Input
            type="text"
            name="search"
            value={value}
            onChange={e => {
              onSet(e);
              setCurrentIndex(-1);
            }}
            onClick={() => onOpenItems()}
            placeholder={t('global.search')}
            autoComplete="off"
          />
          <SearchBar.ItemsWrapper
            ref={setRefItemsWrapper}
            onClick={() => setIsMenuActive(false)}
          >
            {value && isShowItems ? (
              <SearchBarItems
                t={t}
                result={result}
                currentIndex={currentIndex}
                setCurrentIndex={setCurrentIndex}
                setIsShowItems={setIsShowItems}
                setSearchValue={setSearchValue}
              />
            ) : null}
          </SearchBar.ItemsWrapper>
        </SearchBar.Wrapper>
        <SearchBar.ButtonClose onClick={toggleMenu}>
          <img src={IconClose} alt="close" />
        </SearchBar.ButtonClose>
      </SearchBar.SearchContent>
      <SearchBar.Backdrop onClick={toggleMenu} />
    </SearchBar.SearchShortMobile>
  );
};

SearchBar.Wrapper = styled.div`
  position: absolute;
  left: 30px;
  top: 80px;
  display: flex;
  align-items: center;
  width: calc(100% - 60px);
  height: 40px;
  border: 1px solid ${props => props.theme.colors.whiteLight};
  margin: 0;
  border-radius: 5px;
  background: ${props => props.theme.colors.whitebg};
  transition: 0.3s;

  ${breakpoint('sm')`
    width: 300px;
    left: 160px;
    top: 5px;
  `}

  ${breakpoint('md')`
    width: 400px;
    left: 200px;
    top: 13px;
    visibility: hidden;
  `}

  ${breakpoint('lg')`
    position: relative;
    left: unset;
    top: unset;
    width: 330px;
    visibility: visible;
  `}

  ${breakpoint('xl')`
    position: relative;
    left: unset;
    top: unset;
    width: 330px;
  `}

  &:hover,
  &:focus {
    background: ${props => props.theme.colors.white};
    box-shadow: 0 4px 14px rgba(0, 0, 0, 0.15) !important;
  }
`;

SearchBar.Input = styled.input`
  display: block;
  border: none;
  width: 100%;
  padding: 11px 10px 11px 13px;
  border-bottom-left-radius: 5px;
  border-top-left-radius: 5px;
  line-height: 19px;
  font-size: 16px;
  letter-spacing: 0.571428px;
  outline: none;
  box-shadow: none !important;
  background: none !important;

  &::placeholder {
    color: ${props => props.theme.colors.darkSky};
  }
`;

SearchBar.Icon = styled.img`
  display: block;

  ${breakpoint('xs')`
    padding: 0  0 0 15px;
  `}
`;

SearchBar.SearchContent = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  padding: 0;
  margin: 0;
  list-style: none;
  transition: all 0.3s ease;
  z-index: 10;
  opacity: 0;
  pointer-events: none;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 10px 24px rgba(0, 0, 0, 0.2);
  width: 100%;
  height: 0;
  background: ${props => props.theme.colors.white};
  transition-property: all;
  transition-duration: 0.4s;
  transition-timing-function: cubic-bezier(0, 1, 0.5, 1);

  ${breakpoint('lg')`
      opacity: 1;
      position: unset;
      z-index:unset;
      pointer-events: unset;
      background: unset;
  `}
`;

SearchBar.ButtonClose = styled.button`
  display: block;
  border: 0;
  background: none;
  position: absolute;
  right: 5%;
  z-index: 11;
  width: 24px;
  height: 24px;
  cursor: pointer;
  outline: none;
  transition: 0.3s;

  &:hover {
    opacity: 0.7;
  }

  ${breakpoint('ss')`
    right: 10%;
  `}

  ${breakpoint('lg')`
    display: none;
  `}
`;
SearchBar.Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: ${props => props.theme.colors.black};
  opacity: 0;
  z-index: 1;
  pointer-events: none;
  cursor: pointer;
  transition: background-color 0.3s ease;
`;

SearchBar.SearchButtonMobile = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 35px;
  height: 35px;
  padding: 0;
  border: 1px solid ${props => props.theme.colors.whiteLight};
  border-radius: 5px;
  background: ${props => props.theme.colors.whitebg};
  cursor: pointer;
  transition: 0.3s;
  outline: none;

  > ${SearchBar.Icon} {
    padding: 0;
  }

  &:hover {
    background: ${props => props.theme.colors.whiteExLight};
  }

  ${breakpoint('lg')`
    display: none;
  `}
`;

SearchBar.SearchShortMobile = styled.div`
  &.active ${SearchBar.Backdrop} {
    opacity: 0.5;
    pointer-events: auto;
    ${breakpoint('lg')`
      display: none
    `}
  }

  &.active ${SearchBar.Wrapper} {
    visibility: visible;
    position: unset;
    left: unset;
    top: unset;
    width: 70%;

    ${breakpoint('lg')`
      position: relative;
      left: unset;
      top: unset;
      width: 330px;
      visibility: visible;
    `}
  }

  &.active ${SearchBar.SearchContent} {
    opacity: 1;
    pointer-events: auto;
    height: 85px;
    ${breakpoint('lg')`
      pointer-events: unset;
      height: unset;
    `}
  }
`;

SearchBar.ItemsWrapper = styled.div``;

export default withRouter(withTranslation()(SearchBar));
