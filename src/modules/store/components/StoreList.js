// @flow
import React, { useState, useEffect } from 'react';
import { compose } from 'recompose';
import { Link, withRouter } from 'react-router-dom';
import styled from 'styled-components';
import breakpoint from 'styled-components-breakpoint';
import { withTranslation } from 'react-i18next';
import moment from 'moment';

import placeholder from '@modules/coupons/assets/image-placeholder.png';
import LoadMoreLoader from './loaders/LoadMoreLoader';
import { currencyLocaleFormat } from '@modules/localization/i18n';

// import verificationIcon from '../assets/verif.png';

import { type Store } from '../models';

type StoreListProps = {
  t: Function,
  match: Object,
  stores: Store[],
  onLoadMore: Function,
  storesCount: number,
  isLoadedStores: boolean,
  setIsLoadedStores: boolean => void,
  isLoadedMore: boolean,
  setIsLoadedMore: boolean => void,
};

const StoreList = ({
  t,
  match,
  stores,
  onLoadMore,
  storesCount,
  isLoadedStores,
  setIsLoadedStores,
  isLoadedMore,
  setIsLoadedMore,
}: StoreListProps) => {
  const [loadCount, setLoadCount] = useState(20);

  useEffect(() => {
    if (stores.length <= 20) {
      setLoadCount(20);
    }
  });

  const triggerEvent = (url: string) => () => {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
      pageCategory: 'Stores by Category',
      event: 'secondary_store_click',
      label: url,
    });
  };

  const onLoad = () => {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
      pageCategory: 'Stores by Category',
      event: 'load_more_stores',
      label: match.url,
    });

    if (isLoadedStores) {
      setIsLoadedStores(false);
      setIsLoadedMore(false);
      onLoadMore(match.params.name, loadCount).then(() => {
        setIsLoadedStores(true);
        setIsLoadedMore(true);
        setLoadCount(loadCount + 20);
      });
    }
  };

  return (
    <div>
      <StoreList.StoreContainer>
        {stores.length !== 0 &&
          stores.map(
            ({
              name,
              id,
              img,
              link,
              cashbackSave,
              shortName,
              payType,
              noCashBack,
              country,
              cashBackOk,
              textOverride,
            }: Object) => {
              const discount = cashBackOk
                ? payType === 1
                  ? currencyLocaleFormat(cashbackSave, country)
                  : `${cashbackSave}%`
                : '';
              const cashBackMessageText = noCashBack
                ? 'global.noCashBack'
                : cashBackOk
                ? payType === 1
                  ? 'global.amCashBack'
                  : 'global.upToCashBack'
                : 'global.instantSaving';
              const date = moment().format('MMMM | YYYY');

              return (
                <StoreList.StoreItem key={`list_item_${name}_${id}`}>
                  <StoreList.Box>
                    <StoreList.ImageWrapper>
                      <Link
                        to={`/coupons/${shortName}`}
                        onClick={triggerEvent(`/coupons/${shortName}`)}
                      >
                        <StoreList.Image
                          src={img || placeholder}
                          onError={e => {
                            e.target.onerror = null;
                            e.target.src = placeholder;
                          }}
                          alt={`${name || ''} ${t(
                            'storeCoupons.codes',
                          )} ${date.charAt(0).toUpperCase() + date.slice(1)}`}
                        />
                      </Link>
                    </StoreList.ImageWrapper>
                    <StoreList.Info>
                      <StoreList.Cash>
                        {textOverride
                          ? cashbackSave
                          : t(cashBackMessageText, { discount })}
                      </StoreList.Cash>
                      <StoreList.Link
                        to={`/coupons/${shortName}`}
                        onClick={triggerEvent(`/coupons/${shortName}`)}
                      >
                        {t('build.visitStore')}
                      </StoreList.Link>
                    </StoreList.Info>
                  </StoreList.Box>
                </StoreList.StoreItem>
              );
            },
          )}
      </StoreList.StoreContainer>
      <StoreList.LoadMoreButton onClick={onLoad}>
        {isLoadedStores ? (
          stores.length !== 0 && storesCount > stores.length ? (
            <p>{t('global.loadMoreStores')}</p>
          ) : (
            ''
          )
        ) : (
          <LoadMoreLoader />
        )}
      </StoreList.LoadMoreButton>
    </div>
  );
};

type FavoriteStoreListProps = {
  t: string => string,
  match: Object,
  stores: Store[],
  onLoadMore: Function,
  storesCount: number,
  isLoadedStores: boolean,
  setIsLoadedStores: boolean => void,
  isLoadedMore: boolean,
  setIsLoadedMore: boolean => void,
};

export const FavoriteStoreList = compose(
  withTranslation(),
  withRouter,
)(
  ({
    t,
    match,
    stores,
    onLoadMore,
    storesCount,
    isLoadedStores,
    setIsLoadedStores,
    isLoadedMore,
    setIsLoadedMore,
  }: FavoriteStoreListProps) => {
    const [loadCount, setLoadCount] = useState(20);

    useEffect(() => {
      if (stores.length <= 20) {
        setLoadCount(20);
      }
    });

    const onLoad = () => {
      if (isLoadedStores) {
        setIsLoadedStores(false);
        setIsLoadedMore(false);
        onLoadMore(match.params.name, loadCount).then(() => {
          setIsLoadedStores(true);
          setIsLoadedMore(true);
          setLoadCount(loadCount + 20);
        });
      }
    };

    return (
      <div>
        <StoreList.StoreContainer>
          {stores.length !== 0 &&
            stores.map(
              ({
                name,
                store_id,
                offer_img,
                link,
                cashback_text,
                short_name,
                store_name,
              }: Object) => (
                <StoreList.StoreItem
                  key={`list_item_${store_name}_${store_id}`}
                >
                  <StoreList.Box>
                    <StoreList.ImageWrapper>
                      <Link to={`/coupons/${short_name}`}>
                        <StoreList.Image
                          src={offer_img || placeholder}
                          onError={e => {
                            e.target.onerror = null;
                            e.target.src = placeholder;
                          }}
                          alt={`${store_name ||
                            ''} Coupon Codes ${moment().format(
                            'MMMM',
                          )} | ${moment().format('YYYY')}`}
                        />
                      </Link>
                    </StoreList.ImageWrapper>
                    <StoreList.Info>
                      <StoreList.Cash
                        dangerouslySetInnerHTML={{
                          __html: cashback_text
                            ? cashback_text.replace(
                                /(up to |jusqu'à |bis zu )/i,
                                '<span>$1</span>',
                              )
                            : '',
                        }}
                      />
                      <StoreList.Link to={`/coupons/${short_name}`}>
                        {t('build.visitStore')}
                      </StoreList.Link>
                    </StoreList.Info>
                  </StoreList.Box>
                </StoreList.StoreItem>
              ),
            )}
        </StoreList.StoreContainer>
        <StoreList.LoadMoreButton onClick={onLoad}>
          {isLoadedStores ? (
            stores.length !== 0 && storesCount > stores.length ? (
              <p>{t('global.loadMoreStores')}</p>
            ) : (
              ''
            )
          ) : (
            <LoadMoreLoader />
          )}
        </StoreList.LoadMoreButton>
      </div>
    );
  },
);

StoreList.defaultProps = {
  stores: [],
};

StoreList.Box = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;

  ${breakpoint('xs')`
    display: block;
  `}

  ${breakpoint('sx')`
    display: flex;
  `}
`;

StoreList.StoreContainer = styled.div`
  margin: 0;
`;

StoreList.PreloaderWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

StoreList.StoreItem = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  border: 1px solid ${props => props.theme.colors.whiteLight};
  border-bottom: none;
  box-sizing: border-box;

  &:first-child {
    border-top-right-radius: 5px;
    border-top-left-radius: 5px;
  }

  &:last-child {
    border-bottom: 1px solid ${props => props.theme.colors.whiteLight};
    border-bottom-right-radius: 5px;
    border-bottom-left-radius: 5px;
  }

  ${breakpoint('xs')`
    height: 216px;
    padding: 0 27px;
  `}

  ${breakpoint('sx')`
    padding: 0 35px;
    height: 196px;
  `}

  ${breakpoint('md')`
    padding: 0 27px 0 10px;
    height: 133px;
  `}

  ${breakpoint('lg')`
    padding: 0 43px 0 18px;
  `}

  ${breakpoint('xl')`
    padding: 0 62px 0 40px;
  `}
`;

StoreList.StoreNew = styled.span`
  position: absolute;
  left: 0;
  top: 0;
  padding: 3px 10px;
  background: ${props => props.theme.colors.whiteExLight};
  border-radius: 4px;
  font-weight: 500;
  line-height: 15px;
  font-size: 13px;
  text-align: center;
  color: ${props => props.theme.colors.blue};
`;

StoreList.ImageWrapper = styled.div`
  padding: 10px;
  box-sizing: border-box;

  ${breakpoint('xs')`
    width: 88px;
    margin: 0 auto;
  `}

  ${breakpoint('sx')`
    width: 88px;
    margin: 0;
  `}

  ${breakpoint('xl')`
    width: 112px;
  `}
`;

StoreList.Image = styled.img`
  display: block;
  width: auto;
  max-width: 100%;
  height: auto;
  max-height: 100%;
  object-fit: contain;

  ${breakpoint('md')`
   margin: 0 26px 0 0;
  `}

  ${breakpoint('lg')`
    
  `}
`;

StoreList.Info = styled.div`
  ${breakpoint('sm')`
    display: block;
  `}

  ${breakpoint('md')`
    flex: 1;
    min-width: 0;
    display: flex;
    align-items: center;
  `}
`;

StoreList.Cash = styled.p`
  font-weight: 300;
  font-size: 20px;
  flex: 1;
  text-align: center;
  color: ${props => props.theme.colors.blackLight};

  ${breakpoint('xs')`
    margin: 0 0 18px;
    font-size: 17px;
    
    > span {
      display: none;
    }
  `}

  ${breakpoint('sx')`
    margin: 0 0 16px;
    font-size: 20px;
  `}

  ${breakpoint('md')`
    font-size: 17px;
    margin: 0;
  `}

  ${breakpoint('lg')`
    > span {
      display: inline;
    }
  `}
`;

StoreList.Coupons = styled.p`
  margin: 30px 57px 0 0;
  font-weight: 500;
  line-height: 23px;
  color: ${props => props.theme.colors.grayDark};

  ${breakpoint('xs')`
    margin: 0 0 0 0;
    font-size: 12px;
  `}

  ${breakpoint('sm')`
    margin: 0 0 0 0;
    font-size: 13px;
  `}

  ${breakpoint('md')`
    margin: 0 0 0 0;
  `}

  ${breakpoint('lg')`
    margin: 30px 39px 0 0;
  `}
`;

StoreList.Link = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  background: ${props => props.theme.colors.greenMain};
  border: 2px solid transparent;
  box-sizing: border-box;
  border-radius: 4px;
  font-size: 17px;
  text-align: center;
  letter-spacing: 0.51px;
  color: ${props => props.theme.colors.white};
  cursor: pointer;
  margin: 0 0 0 10px;
  transition: background 205ms linear;

  &:hover {
    background: ${props => props.theme.colors.white};
    color: ${props => props.theme.colors.greenMain};
    border-color: ${props => props.theme.colors.greenMain} !important;
  }

  ${breakpoint('xs')`
    margin: 0;
    height: 40px;
  `}

  ${breakpoint('sx')`
    width: 191px;
  `}

  ${breakpoint('md')`
    width: 170px;
  `}

  ${breakpoint('xl')`
    width: 184px;
  `}
`;

StoreList.LoadMoreButton = styled.div`
  width: 100%;
  display: flex;
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

export default compose(withTranslation(), withRouter)(StoreList);
