// @flow
import * as React from 'react';
import styled from 'styled-components';
import breakpoint from 'styled-components-breakpoint';
import { FiChevronsRight } from 'react-icons/fi';
import { connect } from 'react-redux';
import { compose } from 'recompose';
import { withTranslation } from 'react-i18next';
import { getSortedCashbackRate } from './constant';
// import AdditionalInfoSection from './AdditionalInfoSection';
import type { AdditionalInfoProps } from '../models/StorePage';
import { getCurrencySymbol } from '@modules/localization/i18n';
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
  return (
    <AdditionalInfo.Wrapper>
      {/* {additionalInfo.map(section => (
        <AdditionalInfoSection
          key={`section_${section.title}`}
          title={section.title || ''}
          content={section.content || ''}
        />
      ))} */}
      <AdditionalInfo.ContentWrapper
        isShow={additionalInfo.featured_store_secrets_body}
      >
        {cashbackRates.length > 0 ? (
          <AdditionalInfo.CashBackUl>
            <h2>{t('storeCoupons.cashBackCategories')}</h2>
            {getSortedCashbackRate(cashbackRates, true).map(v => (
              <AdditionalInfo.CashBackLi>
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
        ) : null}
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
        isShow={additionalInfo.featured_store_secrets_body}
      >
        <AdditionalInfo.Content>
          <AdditionalInfo.ContentLink
            href={store.store_info_link}
            target="_blank"
          >
            {t('header.shop', {
              storeName: store.store_name,
              cashBack:
                store.store_discount_print_sidebar &&
                store.store_discount_print_sidebar.replace(
                  /\$/g,
                  getCurrencySymbol() || '$',
                ),
            })}
            <FiChevronsRight />
          </AdditionalInfo.ContentLink>
        </AdditionalInfo.Content>
      </AdditionalInfo.ContentWrapper>

      <AdditionalInfo.Separator
        isShow={additionalInfo.featured_store_secrets_body}
      />

      <AdditionalInfo.ContentWrapper isShow={store.store_description}>
        <h2>{store.store_name}</h2>
        <AdditionalInfo.Content>
          <p>{store.store_description}</p>
        </AdditionalInfo.Content>
      </AdditionalInfo.ContentWrapper>
      <AdditionalInfo.Separator isShow={store.store_description} />
      <AdditionalInfo.ContentWrapper
        isShow={additionalInfo.featured_store_returns_body}
      >
        <h2>{t('storeCoupons.returnPolicy')}</h2>
        <AdditionalInfo.Content
          dangerouslySetInnerHTML={{
            __html: additionalInfo.featured_store_returns_body,
          }}
        />
      </AdditionalInfo.ContentWrapper>
      <AdditionalInfo.Separator
        isShow={additionalInfo.featured_store_returns_body}
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
  width: 95%;
  flex-grow: 1;
  margin-left: 15px;
  margin-right: 15px;
  display: ${props => (props.isShow ? 'flex' : 'none')};
  flex-direction: column;

  ${breakpoint('sm')`
    width: 33%;
  `}

  ${breakpoint('lg')`
    width: 100%;
    margin: 0;
  `}
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
