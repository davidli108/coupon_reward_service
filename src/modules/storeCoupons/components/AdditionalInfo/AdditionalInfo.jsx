// @flow
import React, { useMemo } from 'react';

import type { AdditionalInfoProps } from '../../models/StorePage';
import CouponCodeTable from '../CouponCodeTable';

const AdditionalInfo = ({
  t,
  additionalInfo,
  store,
  terms,
}: AdditionalInfoProps) => {
  const couponCodeTableData = useMemo(() => store.offers_data ? store.offers_data.filter((offer) => offer.coupon_code).map((offer) => ({
    offerName: offer.offer_name,
    offerCode: offer.coupon_code,
    expireDate: offer.show_exp_date,
  })) : [], [store.offers_data]);

  return (
    <AdditionalInfo.Wrapper>
      <AdditionalInfo.ContentWrapper
        className={'content-info'}
        isShow={additionalInfo.featured_store_secrets_body}
      >
        <AdditionalInfo.ContentWrapper
          isShow={store.store_description && store.store_description.trim()}
        >
          <h2>
            {store.store_name} {t('global.overview')}
          </h2>
          <AdditionalInfo.Content
            dangerouslySetInnerHTML={{
              __html: store.store_description,
            }}
          />
        </AdditionalInfo.ContentWrapper>
      </AdditionalInfo.ContentWrapper>

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

      <AdditionalInfo.ContentWrapper className={'content-info'} isShow={terms}>
        <h2>{t('storeCoupons.terms')}</h2>
        <AdditionalInfo.Content
          dangerouslySetInnerHTML={{
            __html: terms,
          }}
        />
      </AdditionalInfo.ContentWrapper>

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
      <AdditionalInfo.ContentWrapper
        isShow={couponCodeTableData.length >= 5}
      >
        <h2>{t('storeCoupons.popularDiscountCode', { storeName: store.store_name })}</h2>
        <CouponCodeTable
          couponCodeData={couponCodeTableData}
        />
      </AdditionalInfo.ContentWrapper>
    </AdditionalInfo.Wrapper>
  );
};

export default AdditionalInfo;
