// @flow
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import breakpoint from 'styled-components-breakpoint';
import { FiChevronsRight } from 'react-icons/fi';
import { connect } from 'react-redux';
import { compose } from 'recompose';
import { withTranslation } from 'react-i18next';
import { getSortedCashbackRate } from './constant';
import type { AdditionalInfoProps } from '../models/StorePage';
import { getCurrencySymbol } from '@modules/localization/i18n';
import { isAmazonStore } from '@config/Utils';
import {
  getAdditionalInfo,
  getStore,
  getCashbackRates,
} from '../StoreCouponsReducer';

const AdditionalInfo = ({
  t,
  additionalInfo,
  store,
  cashbackRates,
}: AdditionalInfoProps) => {
  const [isAmazon, setIsAmazon] = useState(false);

  useEffect(() => {
    if (isAmazonStore(store.store_name)) {
      setIsAmazon(true);
    }
  }, [store]);

  const getCashback = () => {
    return isAmazon
      ? `${t('global.noCashBack')} `
      : store.store_discount_print_sidebar &&
          store.store_discount_print_sidebar.replace(
            /\$/g,
            getCurrencySymbol() || '$',
          );
  };

  return (
    <AdditionalInfo.Wrapper>
      {cashbackRates.length > 0 ? (
        <AdditionalInfo.ContentWrapper isShow={true} className="categories">
          <AdditionalInfo.CashBackUl>
            <h2>{t('storeCoupons.cashBackCategories')}</h2>
            {getSortedCashbackRate(cashbackRates, true).map(v => (
              <AdditionalInfo.CashBackLi key={v.category_name}>
                <a href={v.int_url} target={'_blank'}>
                  {v.category_name}
                </a>
                <span>
                  <a href={v.int_url} target={'_blank'}>
                    {v.cashback_rate}
                  </a>
                </span>
              </AdditionalInfo.CashBackLi>
            ))}
          </AdditionalInfo.CashBackUl>
        </AdditionalInfo.ContentWrapper>
      ) : null}

      <AdditionalInfo.ContentWrapper
        className={'content-info'}
        isShow={additionalInfo.featured_store_secrets_body}
      >
        <h2>{t('storeCoupons.secrets')}</h2>
        <AdditionalInfo.Content
          dangerouslySetInnerHTML={{
            __html: additionalInfo.featured_store_secrets_body,
          }}
        />
      </AdditionalInfo.ContentWrapper>

      <AdditionalInfo.Separator
        isShow={additionalInfo.featured_store_secrets_body}
      />

      <AdditionalInfo.ContentWrapper
        className={'content-info'}
        isShow={additionalInfo.featured_store_secrets_body}
      >
        {!isAmazon && (
          <AdditionalInfo.Content>
            <AdditionalInfo.ContentLink
              href={store.store_info_link}
              target="_blank"
            >
              {t('header.shop', {
                storeName: store.store_name,
                cashBack: getCashback(),
              })}
              <FiChevronsRight />
            </AdditionalInfo.ContentLink>
          </AdditionalInfo.Content>
        )}

        <AdditionalInfo.ContentWrapper isShow={store.store_description.trim()}>
          <h2>{store.store_name}</h2>
          <AdditionalInfo.Content>
            <p>{store.store_description}</p>
          </AdditionalInfo.Content>
        </AdditionalInfo.ContentWrapper>
      </AdditionalInfo.ContentWrapper>

      <AdditionalInfo.Separator
        isShow={additionalInfo.featured_store_secrets_body}
      />

      <AdditionalInfo.ContentWrapper
        className={'content-info'}
        isShow={additionalInfo.featured_store_returns_body}
      >
        <h2>{t('storeCoupons.returnPolicy')}</h2>
        <AdditionalInfo.Content
          dangerouslySetInnerHTML={{
            __html: additionalInfo.featured_store_returns_body,
          }}
        />

        <AdditionalInfo.ContentWrapper
          isShow={additionalInfo.featured_store_shipping_content}
        >
          <h2>{t('storeCoupons.shipping')}</h2>
          <AdditionalInfo.Content
            dangerouslySetInnerHTML={{
              __html: additionalInfo.featured_store_shipping_content,
            }}
          />
        </AdditionalInfo.ContentWrapper>
      </AdditionalInfo.ContentWrapper>

      <AdditionalInfo.Separator
        isShow={additionalInfo.featured_store_returns_body}
      />
    </AdditionalInfo.Wrapper>
  );
};

AdditionalInfo.Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 15px 0px;
  margin-top: 10px;
  color: ${props => props.theme.colors.blackExLight};
  line-height: 20px;

  h2 {
    margin-bottom: 10px;
    font-size: 20px;
    font-weight: 600;
  }

  .content-info {
    margin-right: 20px;

    @media (max-width: 768px) {
      margin: 0 15px;
    }
  }

  h2,
  h5,
  p {
    color: ${props => props.theme.colors.blackExLight} !important;
    line-height: 20px;
  }

  ${breakpoint('sm')`
    flex-direction: row;
    margin-top: 0;
  `}

  ${breakpoint('lg')`
    flex-direction: column;
    margin-top: 0;
  `}

  @media (max-width: 768px) {
    .categories {
      display: none;
    }
  }
`;

AdditionalInfo.ContentLink = styled.a`
  font-size: 18px;
  line-height: 25px;
  letter-spacing: 0.5px;
  font-weight: bold;
  text-decoration: underline;
  color: ${props => props.theme.colors.blackExLight};

  &:hover {
    text-decoration: none;
  }
`;

AdditionalInfo.Content = styled.div`
  margin-bottom: 30px;

  h5 {
    margin-top: 20px;
    font-size: 16px;
    font-weight: 600;
  }

  p {
    margin-top: 10px;
    font-weight: 300;
  }
`;

AdditionalInfo.Separator = styled.div`
  ${breakpoint('lg')`
    width: 60%;
    margin-bottom: 30px;
    display: ${props => (props.isShow ? 'flex' : 'none')};
    border-bottom: 2px solid ${props => props.theme.colors.darkBlueBlank};
  `}
`;

AdditionalInfo.ContentWrapper = styled.div`
  width: 100%;
  margin: 0;
  flex-grow: 1;
  display: ${props => (props.isShow ? 'flex' : 'none')};
  flex-direction: column;

  iframe {
    width: 95%;
  }
`;

AdditionalInfo.CashBackLi = styled.li`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 0.5em;

  a {
    font-style: normal;
    font-weight: 500;
    font-size: 13px;
    line-height: 32px;
    text-decoration-line: underline;
    color: ${props => props.theme.colors.darkGrayBlank};
  }

  span {
    font-style: normal;
    font-weight: 500;
    font-size: 13px;
    line-height: 32px;
    text-align: right;
    text-decoration-line: underline;
  }
`;

AdditionalInfo.CashBackUl = styled.ul`
  list-style: none;
  width: 262px;
  margin-bottom: 30px;

  h2 {
    font-style: normal;
    font-weight: bold;
    font-size: 20px;
    line-height: 24px;
    letter-spacing: 0.5px;
    color: ${props => props.theme.colors.blackExLight};
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

const mapStateToProps = state => ({
  additionalInfo: getAdditionalInfo(state),
  store: getStore(state),
  cashbackRates: getCashbackRates(state),
});

export default compose(
  connect(mapStateToProps),
  withTranslation(),
)(AdditionalInfo);
