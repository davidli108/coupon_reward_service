// @flow
import React, { useState, useEffect } from 'react';
import { compose } from 'recompose';
import { withRouter } from 'react-router-dom';
import styled from 'styled-components';
import breakpoint from 'styled-components-breakpoint';
import { withTranslation } from 'react-i18next';

import SignInModal from '@modules/auth/components/SignInModal';
import SignUpModal from '@modules/auth/components/SignUpModal';
import ResetPasswordModal from '@modules/auth/components/ResetPasswordModal';
import {
  getLocaleConfig,
  redirectToEnOrigin,
} from '@modules/localization/i18n';
import { FavoriteStoreList } from '@modules/store/components/StoreList';

import Controls from './Controls';
import CategoriesMobile from './CategoriesMobile';
import Categories from './Categories';
import EmptyFavoritesIcon from './EmptyFavoritesIcon';
import Coupons from '../components/Coupons';

import CategoriesLoader from '../components/loaders/CategoriesLoader';
import { getCategories } from '../../sitemap/constants';

const modal = {
  modalSignIn: 'modalSignIn',
  modalSignUp: 'modalSignUp',
  modalResetPassword: 'modalResetPassword',
};

type ContentProps = {
  t: string => string,
  i18n: Function,
  history: Object,
  match: Object,
  categories: Object,
  getFilteredDeals: Object,
  loadMore: Function,
  fetchCategories: () => Promise<number>,
  getCouponsByCategory: string => Promise<number>,
  getDealsFilter: Object,
  setDealsFilter: Object,
  resetCoupons: Function,
  offersCount: number,
  isLoaded: boolean,
  setIsLoaded: boolean => void,
  getAllDeals: Object,
  favoriteStores: any[],
  isAuthenticated: boolean,
};

const Content = ({
  t,
  i18n,
  history,
  match,
  categories,
  getFilteredDeals,
  loadMore,
  fetchCategories,
  getCouponsByCategory,
  getDealsFilter,
  setDealsFilter,
  resetCoupons,
  offersCount,
  isLoaded,
  setIsLoaded,
  getAllDeals,
  favoriteStores,
  isAuthenticated,
}: ContentProps) => {
  const [loadCount, setLoadCount] = useState(20);
  const [isLoadedCategories, setIsLoadedCategories] = useState(false);
  const [activeCategory, setActiveCategory] = useState(match.params.name);
  const [currentModal, setCurrentModal] = useState(null);

  const localeConfig = getLocaleConfig();

  useEffect(() => {
    setIsLoaded(false);
    getCouponsByCategory(match.params.name || '').then(() => {
      setIsLoaded(true);
      setIsLoadedCategories(true);
    });
  }, []);

  useEffect(() => {
    if (!match.params.name && activeCategory) {
      setActiveCategory('');
      setIsLoaded(false);
      getCouponsByCategory('').then(() => setIsLoaded(true));
      setLoadCount(20);
    } else if (match.params.name && activeCategory !== match.params.name) {
      setActiveCategory(match.params.name);
      setIsLoaded(false);
      getCouponsByCategory(match.params.name).then(() => setIsLoaded(true));
      setLoadCount(20);
    }
  });

  const onLoadMore = () => {
    const { name } = match.params;

    if (isLoaded) {
      setIsLoaded(false);
      loadMore(name ? `${name}/${loadCount}` : loadCount).then(() => {
        setIsLoaded(true);
        setLoadCount(loadCount + 20);
      });
    }

    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
      pageCategory: 'Coupons by Category',
      event: 'load_more_coupons',
      label: match.url,
    });
  };

  const onActiveCategory = shortName => {
    resetCoupons();
    if (match.params.name !== shortName) {
      history.push(`/coupons/${shortName}`);
      setActiveCategory(shortName);
      setIsLoaded(false);
      getCouponsByCategory(shortName).then(() => setIsLoaded(true));
      setLoadCount(20);
    } else {
      history.push('/coupons/');
      setActiveCategory('');
      setIsLoaded(false);
      getCouponsByCategory('').then(() => setIsLoaded(true));
      setLoadCount(20);
    }
  };

  return (
    <div>
      <Controls
        getDealsFilter={getDealsFilter}
        setDealsFilter={setDealsFilter}
      />
      <CategoriesMobile
        categories={categories}
        activeCategory={activeCategory}
        onActiveCategory={onActiveCategory}
      />
      <Content.Grid isFavoritesTab={getDealsFilter === 'favoriteStores'}>
        {isLoadedCategories ? (
          <Content.CategoriesWrapper>
            <Categories
              type="categories"
              categories={getCategories(t, i18n, categories.categories)}
              title={t('categories.name')}
              activeCategory={activeCategory}
              onActiveCategory={onActiveCategory}
            />
            <Categories
              type="stores"
              categories={categories.stores}
              title={t('header.stores')}
              activeCategory={activeCategory}
              onActiveCategory={onActiveCategory}
            />
          </Content.CategoriesWrapper>
        ) : (
          <Content.CategoriesWrapper>
            <CategoriesLoader />
          </Content.CategoriesWrapper>
        )}
        <Content.CouponsWrapper>
          {getDealsFilter === 'favoriteStores' && (
            <>
              {(favoriteStores || []).length > 0 && (
                <div style={{ padding: '10px 0' }}>
                  <FavoriteStoreList
                    stores={favoriteStores}
                    onLoadMore={onLoadMore}
                    storesCount={favoriteStores.length}
                    isLoadedStores={true}
                    setIsLoadedStores={() => null}
                    isLoadedMore={true}
                    setIsLoadedMore={() => null}
                  />
                </div>
              )}

              {(favoriteStores || []).length === 0 && (
                <Content.AuthenticateSectionWrapper>
                  <EmptyFavoritesIcon />

                  {isAuthenticated ? (
                    <Content.AuthenticateLabel>
                      {t('coupons.followAnyStore')}
                    </Content.AuthenticateLabel>
                  ) : (
                    <Content.AuthenticateLabel>
                      <Content.AuthenticateControl
                        onClick={() => {
                          if (localeConfig.isAuthenticationAvailable) {
                            setCurrentModal(modal.modalSignIn);
                          } else {
                            redirectToEnOrigin();
                          }
                        }}
                      >
                        {t('coupons.login')}
                      </Content.AuthenticateControl>
                      <span> {t('coupons.or')} </span>
                      <Content.AuthenticateControl
                        onClick={() => {
                          if (localeConfig.isAuthenticationAvailable) {
                            setCurrentModal(modal.modalSignUp);
                          } else {
                            redirectToEnOrigin();
                          }
                        }}
                      >
                        {t('coupons.register')}
                      </Content.AuthenticateControl>
                      <span> {t('coupons.favoriteStoresAndDeals')}</span>
                    </Content.AuthenticateLabel>
                  )}
                </Content.AuthenticateSectionWrapper>
              )}
            </>
          )}

          {isLoaded ? (
            offersCount !== 0 ? (
              <Coupons coupons={getFilteredDeals} />
            ) : (
              getDealsFilter !== 'favoriteStores' && (
                <Content.NoData>{t('coupons.noCouponsFound')}</Content.NoData>
              )
            )
          ) : activeCategory ? (
            <Coupons
              coupons={getFilteredDeals}
              isLoad={getFilteredDeals && getFilteredDeals.length !== 0}
            />
          ) : offersCount !== 0 ? (
            <Coupons
              coupons={getFilteredDeals}
              isLoad={getFilteredDeals && getFilteredDeals.length !== 0}
            />
          ) : (
            getDealsFilter !== 'favoriteStores' && (
              <Coupons coupons={getFilteredDeals} />
            )
          )}

          <Content.LoadMoreDeals
            onClick={onLoadMore}
            isShow={
              isLoaded &&
              getFilteredDeals &&
              getFilteredDeals.length !== 0 &&
              getAllDeals &&
              getAllDeals.length !== 0 &&
              offersCount > getAllDeals.length
            }
          >
            {t('global.loadMoreCoupons')}
          </Content.LoadMoreDeals>
        </Content.CouponsWrapper>
      </Content.Grid>

      {currentModal === modal.modalSignIn && (
        <SignInModal
          onRouteModalReset={() => setCurrentModal(modal.modalResetPassword)}
          onRouteModal={() => setCurrentModal(modal.modalSignUp)}
          closeModal={setCurrentModal.bind(null)}
        />
      )}
      {currentModal === modal.modalSignUp && (
        <SignUpModal
          onRouteModal={() => setCurrentModal(modal.modalSignIn)}
          closeModal={setCurrentModal.bind(null)}
        />
      )}
      {currentModal === modal.modalResetPassword && (
        <ResetPasswordModal
          onRouteModal={() => setCurrentModal(modal.modalSignUp)}
          closeModal={setCurrentModal.bind(null)}
        />
      )}
    </div>
  );
};

Content.Grid = styled.div`
  ${breakpoint('sx')`
    width: ${props => (props.isFavoritesTab ? '100' : '105')}%;
  `}

  ${breakpoint('md')`
    display: flex;
    justify-content: space-between;
    width: 100%;
    margin: 0 10px;

    > div:last-child {
      width: calc(100% - 220px) !important;
      padding-right: ${props => (props.isFavoritesTab ? '10px' : '0')};
    }
  `}

  ${breakpoint('lg')`
    > div:last-child {
      margin-right: ${props => (props.isFavoritesTab ? '10px' : '0')};
    }
  `}
`;

Content.FollowAnyStoreLabel = styled.p`
  margin-top: 100px;
  margin-left: 80px;
  font-size: 25px;
  color: #adb8c0;
`;

Content.CategoriesWrapper = styled.div`
  display: none;

  ${breakpoint('md')`
    width: 215px;
    margin-right: 5px;
    display: flex;
    flex-flow: column nowrap;

    > :not(:first-child) {
      border-top: 1px solid #D8D8D8;
    }
  `}

  ${breakpoint('lg')`
    width: 24%;
  `}
`;

Content.CouponsWrapper = styled.div`
  display: flex;
  flex-direction: column;

  img {
    padding-right: 60px;
  }
`;

Content.Coupons = styled.div`
  min-height: 400px;
  display: flex;
  flex-flow: column nowrap;

  ${breakpoint('sx')`
    flex-flow: row wrap;
    justify-content: flex-start;

    > div {
      width: calc(50% - 16px);
      margin-right: 16px;
    }
  `}

  ${breakpoint('lg')`
    > div {
      width: calc(50% - 30px);
    }
  `}

  ${breakpoint('xl')`
    > div {
      width: calc(33% - 30px);
    }
  `}
`;

Content.LoadMoreDeals = styled.p`
  display: ${props => (props.isShow ? 'flex' : 'none')};
  justify-content: center;
  font-weight: bold;
  font-size: 18px;
  text-align: center;
  letter-spacing: 0.45px;
  color: ${props => props.theme.colors.whiteDark};
  background: transparent;
  border: none;
  outline: none;
  cursor: pointer;

  transition: color 205ms linear;

  p {
    line-height: 80px;
  }

  &:hover {
    color: ${props => props.theme.colors.grayDark};

    text-decoration: underline;
  }
`;

Content.Preloader = styled.img`
  line-height: 21px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 200px;
  text-align: center;
`;

Content.NoData = styled.div`
  width: 100%;
  margin-top: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: bold;
  line-height: 21px;
  font-size: 25px;
  letter-spacing: 0.45px;
  color: #adb8c0;
  cursor: pointer;

  ${breakpoint('lg')`
    width: 95%;
  `}
`;

Content.AuthenticateSectionWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 20px 40px;
  background: #fafbfc;
  border: 1px solid #dadde2;
  border-radius: 5px;
  margin-top: 30px;

  ${breakpoint('sx')`
    padding: 35px 40px;
    margin-top: 40px;
  `}

  ${breakpoint('md')`
    padding: 50px 40px;
    margin-top: 20px;
  `}

  ${breakpoint('lg')`
    padding: 62px 40px;
  `}

  ${breakpoint('xl')`
    padding: 76px 40px;
  `}
`;

Content.AuthenticateLabel = styled.p`
  margin-top: 13px;
  color: #899197;
  font-size: 16px;
  letter-spacing: 0.3px;
  text-align: center;
  line-height: 150%;
`;

Content.AuthenticateControl = styled.span`
  color: #7ed321;
  text-decoration-line: underline;
  cursor: pointer;
`;

export default compose(withTranslation(), withRouter)(Content);
