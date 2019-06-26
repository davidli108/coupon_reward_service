// @flow
import React, { useState, useEffect } from 'react';
import { compose } from 'recompose';
import { withRouter } from 'react-router-dom';
import styled from 'styled-components';
import breakpoint from 'styled-components-breakpoint';
import { withTranslation } from 'react-i18next';
import { type Store } from '../models';

import SearchBar from '@components/SearchBar/SearchBar';
import Categories from './Categories';
import CategoriesMobile from './CategoriesMobile';
//import TagList from './TagList';

type StoreSidebarProps = {
  t: Function,
  match: Object,
  history: Object,
  title: string,
  storesAll: Store[],
  filter: string,
  search?: string,
  searchResult: Store[],
  onSetFilter: Function,
  onSetFilterClear: Function,
  onSearch: Function,
  searchIsLoading: boolean,
  categories: Object,
  getStore: Function,
  setIsLoadedStores: boolean => void,
  isLoadedCategories: boolean,
  setIsLoadedCategories: boolean => void,
  getFilteredList: any,
};

const StoreSidebar = ({
  t,
  match,
  history,
  title,
  filter,
  storesAll,
  search,
  searchResult,
  onSetFilter,
  onSetFilterClear,
  onSearch,
  searchIsLoading,
  categories,
  getStore,
  setIsLoadedStores,
  isLoadedCategories,
  setIsLoadedCategories,
  getFilteredList,
}: StoreSidebarProps) => {
  const [searchValue, setSearchValue] = useState('');
  const [activeCategory, setActiveCategory] = useState(match.params.name);

  const onSearchChange = e => {
    setSearchValue(e.target.value);
  };

  useEffect(() => {
    if (setIsLoadedStores) {
      setIsLoadedStores(false);
      getStore(match.params.name || '').then(() => {
        setIsLoadedStores(true);
        setIsLoadedCategories(true);
      });
    }
  }, []);

  useEffect(() => {
    if (!match.params.name && activeCategory) {
      history.push('/cashback-stores/');
      setActiveCategory('');
      setIsLoadedStores(false);
      getStore('').then(() => setIsLoadedStores(true));
    } else if (match.params.name && match.params.name !== activeCategory) {
      setActiveCategory(match.params.name);
      setIsLoadedStores(false);
      getStore(match.params.name).then(() => setIsLoadedStores(true));
    }
  });

  const onActiveCategory = shortName => {
    if (match.params.name !== shortName) {
      history.push(`/cashback-stores/${shortName}`);
      setActiveCategory(shortName);
      setIsLoadedStores(false);
      getStore(shortName).then(() => setIsLoadedStores(true));
    } else {
      history.push('/cashback-stores/');
      setActiveCategory('');
      setIsLoadedStores(false);
      getStore('').then(() => setIsLoadedStores(true));
    }
  };

  return (
    <StoreSidebar.Wrapper>
      <StoreSidebar.SearchWrapper>
        <SearchBar
          onSet={onSearchChange}
          result={searchValue ? getFilteredList(searchValue) : []}
          value={searchValue}
        />
      </StoreSidebar.SearchWrapper>
      <Categories
        categories={categories}
        title={t('header.stores')}
        activeCategory={activeCategory}
        onActiveCategory={onActiveCategory}
        isLoaded={isLoadedCategories}
      />
      <CategoriesMobile
        categories={categories}
        activeCategory={activeCategory}
        onActiveCategory={onActiveCategory}
      />
    </StoreSidebar.Wrapper>
  );
};

StoreSidebar.defaultProps = {
  categories: [],
  storesAll: [],
  searchResult: [],
};

StoreSidebar.Wrapper = styled.div`

  ${breakpoint('xs')`
    flex-basis: auto;
  `}

  ${breakpoint('md')`
    flex-basis: 390px;
  `}

  ${breakpoint('sm')`
    flex-basis: 321px;
    padding: 0 30px 0 0;
  `}

  ${breakpoint('lg')`
    flex-basis: 261px;
  `}
`;

StoreSidebar.SearchWrapper = styled.div`
  width: 100%;
`;

StoreSidebar.Content = styled.div`
  background: ${props => props.theme.colors.white};
  position: relative;

  ${breakpoint('xs')`
    margin: 0;
    border: 0.5px solid ${props => props.theme.colors.whiteLight};
    border-radius: 5px;
    padding: 12px 25px;
    box-shadow: ${props =>
      props.active && `2px 3px 22px ${props.theme.colors.blackAlpha}`};
    border-bottom: ${props => props.active && 'none'};
    border-bottom-left-radius: ${props => props.active && '0'};
    border-bottom-right-radius: ${props => props.active && '0'};
  `}

  ${breakpoint('sm')`
    margin: 0 0 25px 0;
    border: none;
    border-radius: 0;
    padding: 0;
    box-shadow: none;
  `}
`;

StoreSidebar.Title = styled.h3`
  line-height: 21px;
  font-size: 18px;
  font-weight: bold;
  letter-spacing: 0.45px;
  color: ${props => props.theme.colors.blackExLight};

  ${breakpoint('xs')`
    position: relative;
    box-sizing: border-box;
    border-radius: 5px;
    &::before{
      position: absolute;
      content: '';
      right: 0;
      top: 28%;
      border-radius: 10px;
      transition: transform 250ms linear;
      ${props => props.rotateIcon && 'transform: rotate(180deg)'};
      width: 0;
      height: 0;
      border-top: 11px solid ${props => props.theme.colors.grayTintsDark};
      border-left: 10px solid transparent;
      border-right: 10px solid transparent;
    }
  `}

  ${breakpoint('sm')`
    pointer-events: none;
    position: relative;
    border: none;
    box-sizing: border-box;
    border-radius: 0;
    &::before{
      display: none;
    }
  `}
`;

StoreSidebar.ClearFilter = styled.button`
  position: absolute;
  font-size: 13px;
  padding: 3px 5px;
  border-radius: 3px;
  outline: none;
  border: 1px solid ${props => props.theme.colors.blueDark};
  background: ${props => props.theme.colors.blue};
  color: ${props => props.theme.colors.white};
  cursor: pointer;

  ${breakpoint('xs')`
    top: 12px;
    right: 70px;
  `}
  ${breakpoint('sm')`
    top: 3px;
    right: 0;
  `}
`;

export default compose(
  withRouter,
  withTranslation(),
)(StoreSidebar);
