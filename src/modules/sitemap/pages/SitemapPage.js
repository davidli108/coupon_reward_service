// @flow
import React, { useState, useEffect } from 'react';
import { compose } from 'recompose';
import { connect } from 'react-redux';
import { withTranslation } from 'react-i18next';
import { NavLink } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import styled from 'styled-components';
import breakpoint from 'styled-components-breakpoint';
import type { SitemapPageProps } from '../models/SitemapPage';
import { getFilteredList } from '@modules/app/AppReducer';
import {
  getFilteredStores,
  getCategories,
  getChars,
  getFilterBy,
} from '@modules/sitemap/SitemapReducer';
import * as actions from '../SitemapActions';
import PopularStores from '../components/PopularStores';
import SearchBar from '@components/SearchBar/SearchBar';
import { footerLinks } from '../constants';
import StoreLinksLoader from '../components/StoreLinksLoader';
import FooterLinksLoader from '../components/FooterLinksLoader';
import PopularStoresLoader from '../components/PopularStoresLoader';
import { getIsAuthenticated } from '@modules/auth/AuthReducer';

const SitemapPage = ({
  t,
  i18n,
  stores,
  chars,
  fetchAllStores,
  categories,
  fetchCategories,
  getFilteredList,
  setStoreFilter,
  filterBy,
  isAuthenticated,
}: SitemapPageProps) => {
  const [searchValue, setSearchValue] = useState('');
  const [links, setLinks] = useState([]);
  const [isLoadingCategories, setIsLoadingCategories] = useState(false);
  const [isLoadingStores, setIsLoadingStores] = useState(false);

  const onSearchChange = e => {
    setSearchValue(e.target.value);
  };

  const toggleCollapse = (index: number) => () => {
    const data = links.map((link: any, key: number) => ({
      ...link,
      collapsed: key === index ? !link.collapsed : link.collapsed,
    }));
    setLinks(data);
  };

  const handleFilterChange = (value: string) => () => {
    setStoreFilter(value);
  };

  useEffect(() => {
    setIsLoadingCategories(true);
    setIsLoadingStores(true);
    fetchCategories().then(() => setIsLoadingCategories(false));
    fetchAllStores().then(() => setIsLoadingStores(false));
  }, []);

  useEffect(() => {
    setLinks(Object.values(footerLinks(t, categories, isAuthenticated, i18n)));
  }, [categories]);

  return (
    <>
      <Helmet
        title={t('sitemap.meta.title')}
        meta={[
          {
            name: 'description',
            content: t('sitemap.meta.description'),
          },
        ]}
      />

      <SitemapPage.Wrapper>
        <SitemapPage.Title>{t('sitemap.popular_stores')}</SitemapPage.Title>

        {!isLoadingCategories && !isLoadingStores ? (
          <PopularStores />
        ) : (
          <SitemapPage.LoaderWrapper>
            {Array.apply(null, Array(4)).map((_, ind) => (
              <SitemapPage.LoaderItem key={ind}>
                <PopularStoresLoader />
              </SitemapPage.LoaderItem>
            ))}
          </SitemapPage.LoaderWrapper>
        )}

        <SitemapPage.ListHeader>
          <h3>{t('sitemap.all_stores')}</h3>
          <SitemapPage.SearchWrapper>
            <SearchBar
              onSet={onSearchChange}
              result={searchValue ? getFilteredList(searchValue) : []}
              value={searchValue}
            />
          </SitemapPage.SearchWrapper>
        </SitemapPage.ListHeader>

        <SitemapPage.Filters>
          {Object.keys(chars).map((char: string) => (
            <SitemapPage.FilterItem
              key={char}
              onClick={handleFilterChange(char)}
              isActive={filterBy === char}
              isDisabled={!chars[char]}
            >
              <span>{char}</span>
            </SitemapPage.FilterItem>
          ))}
        </SitemapPage.Filters>

        {!isLoadingStores && stores && stores.length ? (
          <SitemapPage.List itemsLength={stores.length}>
            {stores.map((item: any, key: number) => (
              <SitemapPage.ListItem key={key} itemsLength={stores.length}>
                <NavLink to={`/coupons/${item.short_name}`}>
                  {item.store_name}
                </NavLink>
              </SitemapPage.ListItem>
            ))}
          </SitemapPage.List>
        ) : (
          <SitemapPage.List itemsLength={20}>
            {Array.apply(null, Array(4)).map((item: any, key: number) => (
              <SitemapPage.ListItem key={key}>
                <StoreLinksLoader />
              </SitemapPage.ListItem>
            ))}
          </SitemapPage.List>
        )}
      </SitemapPage.Wrapper>

      <SitemapPage.FooterLinks>
        <SitemapPage.Wrapper>
          {!isLoadingStores &&
            !isLoadingCategories &&
            !!links.length &&
            links.map((category: any, key: number) => (
              <SitemapPage.Column key={key} collapsed={category.collapsed}>
                <h4 onClick={toggleCollapse(key)}>{category.name}</h4>
                {category.list.map((link: any, key: number) =>
                  !link.href ? (
                    <SitemapPage.FooterLink to={link.url} key={key}>
                      {link.name}
                    </SitemapPage.FooterLink>
                  ) : (
                    <SitemapPage.FooterHref href={link.url} key={key}>
                      {link.name}
                    </SitemapPage.FooterHref>
                  ),
                )}
              </SitemapPage.Column>
            ))}
          {(isLoadingCategories || isLoadingStores) &&
            Array.apply(null, Array(6)).map((item: any, key: number) => (
              <SitemapPage.Column key={key} collapsed={false}>
                <FooterLinksLoader />
              </SitemapPage.Column>
            ))}
        </SitemapPage.Wrapper>
      </SitemapPage.FooterLinks>
    </>
  );
};

SitemapPage.Wrapper = styled.div`
  padding: 15px;
  padding-bottom: 50px;
  display: flex;
  flex-flow: column nowrap;

  ${breakpoint('xl')`
    width: 1140px;
    margin: 0 auto;
  `}
`;

SitemapPage.Title = styled.h2`
  text-align: center;
  font-weight: 600;
  letter-spacing: 0.3px;
  color: #6b7480;

  ${breakpoint('xs')`
    font-size: 16px;
    line-height: 19px;
    margin: 10px 0 7px;
  `}

  ${breakpoint('sm')`
    font-size: 20px;
    line-height: 23px;
    margin: 10px 0 16px;
  `}

  ${breakpoint('md')`
    font-size: 25px;
    line-height: 29px;
    margin: 15px 0 6px;
  `}

  ${breakpoint('lg')`
    font-size: 31px;
    line-height: 36px;
    margin: 52px 0 24px;
  `}
`;

SitemapPage.ListHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 0 36px;

  h3 {
    margin: 0;
    color: ${props => props.theme.colors.blackExLight};
    font-size: 20px;
    line-height: 24px;
    letter-spacing: 0.5px;
    font-weight: 600;
  }

  ${breakpoint('xs')`
    h3 {
      display: none;
    }

    > div {
      width: 100%;
    }
  `}

  ${breakpoint('sm')`
    h3 {
      display: block;
    }

    > div {
      width: 360px;
    }
  `}
`;

SitemapPage.SearchWrapper = styled.div`
  width: 360px;

  > div {
    margin: 0;
    border-width: 2px;
    box-sizing: border-box;
  }
`;

SitemapPage.Filters = styled.ul`
  display: flex;
  margin: 0 0 40px;
  justify-content: space-between;

  ${breakpoint('xs')`
    flex-flow: row wrap;
  `}

  ${breakpoint('sm')`
    justify-content: center;
  `}

  ${breakpoint('lg')`
    justify-content: space-between;
  `}
`;

SitemapPage.FilterItem = styled.li`
  text-transform: uppercase;
  font-weight: 600;
  font-size: 15px;
  line-height: 18px;
  cursor: pointer;
  color: #b3bbc2;
  width: 28px;
  height: 28px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;

  :hover {
    font-size: 24px;
    color: ${props => props.theme.colors.blackExLight};
    background-color: #f4f6f7;
  }

  ${({ isActive }) =>
    isActive
      ? `
    font-size: 24px;
    color: #899197;
    background-color: #f4f6f7;
  `
      : ''}

  ${({ isDisabled }) =>
    isDisabled
      ? `
    opacity: .5;
    pointer-events: none;
  `
      : ''}

  ${breakpoint('xs')`
    flex: 1 0 8.3333%;
    max-width: 8.3333%;
  `}

  ${breakpoint('sm')`
    min-width: 26px;
    flex: 0;
    max-width: none;
  `}
`;

SitemapPage.List = styled.ul`
  display: flex;
  flex-flow: column wrap;
  padding: 0;
  max-height: ${({ itemsLength }) => Math.ceil(itemsLength / 4) * 26}px;

  ${breakpoint('xs')`
    display: block;
    max-height: none;
  `}

  ${breakpoint('sm')`
    display: flex;
    max-height: ${({ itemsLength }) => Math.ceil(itemsLength / 2) * 26 + 44}px;
  `}

  ${breakpoint('lg')`
    max-height: ${({ itemsLength }) => Math.ceil(itemsLength / 4) * 26}px;
  `}
`;

SitemapPage.ListItem = styled.li`
  width: 25%;

  a {
    font-size: 16px;
    line-height: 26px;
    text-decoration: underline;
    color: ${props => props.theme.colors.blackExLight};
    white-space: nowrap;
    max-width: 100%;
    display: block;
    overflow: hidden;
    text-overflow: ellipsis;
    box-sizing: border-box;
    padding: 0 20px 0 0;
  }

  ${breakpoint('xs')`
    width: auto;

    &:nth-child(${({ itemsLength }) => Math.ceil(itemsLength / 4)}n) {
      margin: 0 0 22px;
    }
  `}

  ${breakpoint('sm')`
    width: 50%;
  `}

  ${breakpoint('lg')`
    width: 25%;

    &:nth-child(${({ itemsLength }) => Math.ceil(itemsLength / 4)}n) {
      margin: 0;
    }
  `}
`;

SitemapPage.FooterLinks = styled.div`
  background-color: #f4f6f7;
  padding: 78px 0;

  > div {
    flex-flow: row nowrap;
  }

  ${breakpoint('xs')`
    flex-flow: row wrap;
    padding: 78px 15px;

    > div {
      flex-flow: row wrap;
      margin: 0 -15px;
      padding: 0;
    }
  `}

  ${breakpoint('lg')`
    > div {
      flex-flow: row nowrap;
      margin: 0 auto;
    }
  `}
`;

SitemapPage.Column = styled.div`
  flex: 1;
  color: #62707b;
  display: flex;
  flex-flow: column nowrap;
  transition: max-height 0.3s ease;
  overflow: hidden;
  box-sizing: border-box;
  ${({ collapsed }) => (collapsed ? 'max-height: 25px;' : 'max-height: 700px;')}

  h4 {
    display: flex;
    align-items: center;
    font-size: 13px;
    line-height: 15px;
    font-weight: 600;
    margin: 0 0 10px;
    text-transform: uppercase;
    cursor: pointer;

    ::after {
      content: '';
      display: inline-flex;
      border-right: 4px solid transparent;
      border-left: 4px solid transparent;
      transition: border 0.3s ease;
      margin: 0 0 0 8px;
      ${({ collapsed }) =>
        collapsed
          ? 'border-top: 7px solid #FF6B8C;'
          : 'border-bottom: 7px solid #FF6B8C;'}
    }
  }

  ${breakpoint('xs')`
    display: block;
    flex: 1 0 50%;
    max-width: 50%;
    flex-flow: row wrap;
    padding: 0 14px;
    margin: 0 0 40px;

    h4 {
      ::after {
        margin: 0 0 0 5px;
      }
    }
  `}

  ${breakpoint('sm')`
    flex: 1 0 33.3333%;
    max-width: 33.3333%;
  `}

  ${breakpoint('lg')`
    flex: 1;
    max-width: none;
    padding: 0;
  `}
`;

SitemapPage.FooterLink = styled(NavLink)`
  display: block;
  font-size: 13px;
  line-height: 23px;
  text-decoration: underline;
  white-space: nowrap;
  color: ${props => props.theme.colors.darkGray};
`;

SitemapPage.FooterHref = styled.a`
  display: block;
  font-size: 13px;
  line-height: 23px;
  text-decoration: underline;
  white-space: nowrap;
  color: ${props => props.theme.colors.darkGray};
`;

SitemapPage.LoaderWrapper = styled.div`
  display: flex;
  margin: 0 -15px 43px;
  padding: 0 0 41px;
  border-bottom: 1px solid #f0f1f4;
`;

SitemapPage.LoaderItem = styled.div`
  padding: 0 15px;
  box-sizing: border-box;
  flex: 1;
  position: relative;

  ::after {
    content: '';
    display: block;
    position: absolute;
    top: 50%;
    left: 100%;
    transform: translate(0, -50%);
    height: 140px;
    width: 1px;
    background-image: linear-gradient(
      to bottom,
      #b3bbc2 20%,
      rgba(255, 255, 255, 0) 0%
    );
    background-position: left;
    background-size: 1px 10px;
    background-repeat: repeat-y;
  }

  :last-child {
    ::after {
      background: 0 none;
    }
  }
`;

const mapStateToProps = state => ({
  stores: getFilteredStores(state),
  chars: getChars(state),
  categories: getCategories(state),
  getFilteredList: getFilteredList(state),
  filterBy: getFilterBy(state),
  isAuthenticated: getIsAuthenticated(state),
});

const mapDispatchToProps = {
  fetchCategories: actions.fetchCategories,
  fetchAllStores: actions.fetchAllStores,
  setStoreFilter: actions.setStoreFilter,
};

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withTranslation(),
)(SitemapPage);
