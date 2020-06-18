// @flow
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import breakpoint from 'styled-components-breakpoint';
import { connect } from 'react-redux';
import moment from 'moment';
import BrandHeader from './BrandHeader';
import BrandContent from './BrandContent';
import placeholder from '@modules/coupons/assets/image-placeholder.png';
import BrandImageLoader from './loaders/BrandImageLoader';
import BrandXlLoader from './loaders/BrandXlLoader';
import type { BrandProps } from '../models/StorePage';
import { getStore } from '../StoreCouponsReducer';
import AppConfig from '@config/AppConfig';
import { isAmazonStore } from '@config/Utils';
import CouponCode from './CouponCode';
import {
  currencyLocaleFormat,
  setDecimalFormat,
} from '@modules/localization/i18n';

const Brand = ({
  t,
  store,
  i18n,
  coupon_code,
  offer_link,
  store_name,
  isAuthenticated,
  isExtensionInstalled,
  store_logo,
  isLoaded,
  offersCount,
  reviews,
  extensionActive,
}: BrandProps) => {
  const [isAmazon, setIsAmazon] = useState(false);
  const discount = store.store_cashback_ok
    ? store.store_numeric_type === 1
      ? currencyLocaleFormat(
          store.store_discount.replace(/[$£€]/, ''),
          store.store_country_code,
        )
      : `${store.store_discount.replace('%', '')}%`
    : '';

  useEffect(() => {
    if (isAmazonStore(store.store_name)) {
      setIsAmazon(true);
    }
  }, [store]);

  return (
    <>
      <Brand.Wrapper>
        {isLoaded ? (
          <Brand.BrandImageWrapper>
            <Brand.BrandImageWrapperLink
              href={!isAmazon ? store.store_info_link : undefined}
              target={!isAmazon ? '_blank' : undefined}
            >
              <Brand.BrandImageWrapperHolder
                src={
                  store.store_logo_image_path
                    ? `${AppConfig.cloudUrl}${store.store_logo_image_path}`
                    : placeholder
                }
                onError={e => {
                  e.target.onerror = null;
                  e.target.src = placeholder;
                }}
                alt={`${store.store_name || ''} ${t(
                  'storeCoupons.codes',
                )} ${moment().format('MMMM')} | ${moment().format('YYYY')}`}
              />
            </Brand.BrandImageWrapperLink>

            <Brand.CashBackActivateButton>
              {!isAmazon && (
                <CouponCode
                  t={t}
                  i18n={i18n}
                  code={coupon_code}
                  link={store.store_info_link}
                  store={store.store_name}
                  isAuthenticated={isAuthenticated}
                  isExtensionInstalled={isExtensionInstalled}
                  logo={
                    store.store_logo_image_path
                      ? `${AppConfig.cloudUrl}${store.store_logo_image_path}`
                      : placeholder
                  }
                  isVisit={true}
                />
              )}
              <Brand.CashBackActivate>
                {isAmazon && t('global.noCashBack')}
                {!isAmazon &&
                  (discount && discount !== '%'
                    ? t('global.activateCashback', {
                        discount: setDecimalFormat(discount),
                      })
                    : t('global.instantSaving'))}
              </Brand.CashBackActivate>
            </Brand.CashBackActivateButton>
          </Brand.BrandImageWrapper>
        ) : (
          <BrandImageLoader />
        )}
        <Brand.WrapFlexBox>
          {isLoaded ? (
            <>
              <BrandHeader offersCount={offersCount} />
              {!extensionActive && !isAmazon && (
                <Brand.XlWrapper>
                  <Brand.NoWrapFlexBoxWithBorder>
                    <BrandContent
                      storeName={store.store_name}
                      stars={5}
                      reviewsCount={reviews}
                    />
                  </Brand.NoWrapFlexBoxWithBorder>
                </Brand.XlWrapper>
              )}
            </>
          ) : (
            <BrandXlLoader />
          )}
        </Brand.WrapFlexBox>
      </Brand.Wrapper>
      {!extensionActive && (
        <Brand.MdWrapper>
          <Brand.NoWrapFlexBoxWithBorder>
            <BrandContent
              storeName={store.store_name}
              stars={5}
              reviewsCount={reviews}
            />
          </Brand.NoWrapFlexBoxWithBorder>
        </Brand.MdWrapper>
      )}
    </>
  );
};

Brand.Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-flow: column nowrap;
  padding-top: 15px;

  ${breakpoint('md')`
    flex-flow: row nowrap;
  `}
`;

Brand.BrandImageWrapperLink = styled.a`
  display: flex;
  flex: 1 0 auto;
  align-items: center;
  justify-content: center;
  padding: 0 25px;
  width: 100%;
  box-sizing: border-box;
`;

Brand.BrandWrapperBtn = styled.div`
  width: 100%;

  > div > div {
    margin: 0 auto !important;
  }
`;
Brand.BrandImageWrapper = styled.div`
  width: 100%;
  margin-right: 30px;
  padding: 25px 0;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  align-items: center;
  border: 1px solid ${props => props.theme.colors.whiteLight};
  border-radius: 5px;
  overflow: hidden;
  box-sizing: border-box;
  margin-bottom: 20px;

  ${breakpoint('sm')`
    width: 340px;
    height: 340px;
  `}

  ${breakpoint('md')`
    width: 280px;
    height: 280px;
    margin-bottom: 0;
  `}

  ${breakpoint('lg')`
    width: 280px;
    height: 320px;
  `}

  > div > div[class*='CouponCode__Wrapper'] {
    width: 220px;
    height: 40px;
    margin: 20px auto !important;
    max-width: unset !important;

    ${breakpoint('md')`
      width: 140px;
    `}

    ${breakpoint('lg')`
      width: 80%;
      height: 45px;
      font-size: 16px;
    `}
  }
`;

Brand.BrandImageWrapperHolder = styled.img`
  height: auto;
  width: auto;
  max-width: 100%;
  max-height: 165px;
`;

Brand.NoWrapFlexBox = styled.div`
  display: flex;
  flex-direction: column;

  ${breakpoint('lg')`
    flex-flow: row nowrap;
    justify-content: space-between;
    align-items: baseline;
    width: 100%;
    padding: 10px 0;
  `}

  ${breakpoint('md')`
    flex-direction: row;
  `}

  @media (min-width: 768px) and (max-width: 1024px) {
    padding: 8px 20px;
  }

  @media (max-width: 768px) {
    padding: 0;
  }
`;

Brand.NoWrapFlexBoxWithBorder = styled(Brand.NoWrapFlexBox)`
  ${breakpoint('md')`
    border: 1px dashed ${props => props.theme.colors.blue};
    border-radius: 5px;
    padding: 8px 20px;
    align-items: center;
    height: auto;

    > * {
      padding: 0;
    }
  `}

  @media (min-width: 768px) and (max-width: 1024px) {
    padding: 8px 20px;
  }

  @media (max-width: 768px) {
    padding: 0;
  }
`;

Brand.XlWrapper = styled.div`
  width: 100%;
  display: flex;
  height: 220px;
`;

Brand.MdWrapper = styled.div`
  margin-top: 10px;
  display: none;

  ${breakpoint('sm')`
    margin-top: 30px;
  `}

  ${breakpoint('xl')`
    display: none;
  `}
`;

Brand.WrapFlexBox = styled.div`
  display: flex;
  flex-flow: column nowrap;
  width: 100%;

  ${breakpoint('xl')`
    display: block;
  `}

  ${breakpoint('md')`
    flex-flow: row wrap;
    align-items: center;
    width: 100%
  `}

  ${breakpoint('lg')`
    width: calc(100% - 310px);
  `}
`;

Brand.ShopNow = styled.a`
  @media (max-width: 425px) {
    padding: 13px 140px;
  }

  @media (max-width: 375px) {
    padding: 13px 110px;
  }

  @media (max-width: 320px) {
    padding: 13px 80px;
  }

  text-decoration: none;
  box-sizing: border-box;
  letter-spacing: 0.5px;
  color: ${props => props.theme.colors.greenLight};
  font-size: 17px;
  font-weight: 500;
  text-align: center;
  padding: 13px 60px;
  border-radius: 4px;
  background-color: ${props => props.theme.colors.greenMain};
  box-shadow: inset 0px 1px 2px rgba(255, 255, 255, 0.5),
    inset 0px -1px 5px rgba(0, 0, 0, 0.0584805),
    inset 0px -2px 0px rgba(255, 255, 255, 0.213315);
  float: right;
  margin-bottom: 11px;
`;

Brand.CashBackActivate = styled.p`
  font-style: normal;
  font-weight: 500;
  font-size: 15px;
  line-height: 120%;
  text-align: center;
  letter-spacing: -0.188889px;
  color: ${props => props.theme.colors.black};
`;

Brand.CashBackActivateButton = styled.div`
  height: auto;
  width: 100%;

  > div > div[class*='CouponCode__Button'] {
    width: 220px;
    height: 40px;
    margin: 20px auto !important;
    max-width: unset !important;

    ${breakpoint('md')`
      width: 140px;
    `}

    ${breakpoint('lg')`
      width: 100%;
      height: 45px;
      font-size: 16px;
      margin: 0 auto 20px!important;
    `}
  }
`;

Brand.ShopNowImgArrow = styled.img`
  padding-left: 11px;
`;

const mapStateToProps = state => ({
  store: getStore(state),
});

const enhance = connect(mapStateToProps);

export default enhance(Brand);
