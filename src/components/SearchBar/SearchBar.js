// @flow
import React, { useState } from 'react';
import styled from 'styled-components';
import breakpoint from 'styled-components-breakpoint';
import { withRouter } from 'react-router-dom';
import { withTranslation } from 'react-i18next';

import IconSearch from './icon-search.png';

import SearchBarItems from './SearchBarItems';

type SearchBarProps = {
  t: Function,
  history: Object,
  onSet: Function,
  result: Object,
  value: string,
  isLoading: boolean,
};

const SearchBar = ({
  t,
  history,
  value,
  onSet,
  result,
  isLoading,
}: SearchBarProps) => {
  const [isShowItems, setIsShowItems] = useState(false);
  const [refItemsWrapper, setRefItemsWrapper] = useState(null);
  const [refSearchBar, setRefSearchBar] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(-1);

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

  return (
    <SearchBar.Wrapper ref={setRefSearchBar} onKeyUp={onKeyUp}>
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
        pattern="[a-zA-Z0-9-]"
        autoComplete="off"
      />
      <SearchBar.Icon src={IconSearch} alt="search" />
      {/* $FlowFixMe */}
      <div ref={setRefItemsWrapper}>
        {value && isShowItems ? (
          <SearchBarItems
            t={t}
            result={result}
            isLoading={isLoading}
            currentIndex={currentIndex}
            setCurrentIndex={setCurrentIndex}
            setIsShowItems={setIsShowItems}
          />
        ) : null}
      </div>
    </SearchBar.Wrapper>
  );
};

SearchBar.Wrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
  border: 1px solid ${props => props.theme.colors.whiteLight};
  margin: 0 0 33px 0;
  border-radius: 5px;

  ${breakpoint('xs')`
    margin: 0 0 15px 0;
  `}

  ${breakpoint('sm')`
    margin: 0 0 33px 0;
  `}
`;

SearchBar.Input = styled.input`
  display: block;
  border: none;
  width: 100%;
  padding: 11px 10px 11px 20px;
  border-bottom-left-radius: 5px;
  border-top-left-radius: 5px;
  line-height: 19px;
  font-size: 16px;
  letter-spacing: 0.571428px;
  outline: none;
  box-shadow: none !important;

  &::placeholder {
    color: ${props => props.theme.colors.whiteDark};
  }
`;

SearchBar.Icon = styled.img`
  display: block;

  ${breakpoint('xs')`
    padding: 0 28px 0 0;
  `}

  ${breakpoint('sm')`
    padding: 0 20px 0 0;
  `}
`;

SearchBar.StoreWrapper = styled.div`
  position: absolute;
  background: ${props => props.theme.colors.white};
  z-index: 1;
  width: 100%;
  left: 0;
  top: 42px;
  border: 1px solid ${props => props.theme.colors.whiteLight};
  border-radius: 5px;
`;

SearchBar.Item = styled.div`
  display: flex;
  align-items: center;
  padding: 5px;
  cursor: pointer;

  &:hover {
    background: ${props => props.theme.colors.whiteExLight};
  }

  img {
    width: 80px;
    border: 1px solid ${props => props.theme.colors.whiteLight};
  }

  div {
    margin: 0 0 0 5px;

    h3 {
      margin: 0 0 5px 0;
      font-weight: bold;
    }

    p {
      font-size: 13px;
    }
  }
`;

export default withRouter(withTranslation()(SearchBar));
