// @flow
import React from 'react';

import type { AdditionalInfoProps } from '../../models/StorePage';

const AdditionalInfo = ({
  t,
  additionalInfo,
  store,
  terms,
}: AdditionalInfoProps) => {
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
    </AdditionalInfo.Wrapper>
  );
};

export default AdditionalInfo;
