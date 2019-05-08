//@flow
import * as React from 'react';
import styled from 'styled-components';
import breakpoint from 'styled-components-breakpoint';
import { connect } from 'react-redux';
import { compose } from 'recompose';
import { withTranslation } from 'react-i18next';

// import AdditionalInfoSection from './AdditionalInfoSection';
import type { AdditionalInfoProps } from '../models/StorePage';
import { getAdditionalInfo, getStore } from '../StoreCouponsReducer';

const AdditionalInfo = ({ t, additionalInfo, store }: AdditionalInfoProps) => {
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
      <AdditionalInfo.ContentWrapper isShow={store.store_description}>
        <h2>{store.store_name}</h2>
        <AdditionalInfo.Content>
          <p
            dangerouslySetInnerHTML={{
              __html: store.store_description,
            }}
          />
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
  padding: 15px;
  margin-top: 10px;
  color: #899197;
  line-height: 20px;

  h2 {
    margin-bottom: 10px;
    font-size: 20px;
    font-weight: 600;
  }

  h2,
  h5,
  p {
    color: #899197 !important;
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
    border-bottom: 2px solid #e3e6e9;
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

const mapStateToProps = state => ({
  additionalInfo: getAdditionalInfo(state),
  store: getStore(state),
});

export default compose(
  connect(mapStateToProps),
  withTranslation(),
)(AdditionalInfo);
