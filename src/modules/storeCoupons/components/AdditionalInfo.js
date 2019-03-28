//@flow
import * as React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';

// import AdditionalInfoSection from './AdditionalInfoSection';
import type { AdditionalInfoProps } from '../models/StorePage';
import { getAdditionalInfo } from '../StoreCouponsReducer';

const AdditionalInfo = ({ additionalInfo }: AdditionalInfoProps) => {
  return (
    <AdditionalInfo.Wrapper>
      {/* {additionalInfo.map(section => (
        <AdditionalInfoSection
          key={`section_${section.title}`}
          title={section.title || ''}
          content={section.content || ''}
        />
      ))} */}
      <div>
        <h2>Shipping</h2>
        <div
          dangerouslySetInnerHTML={{
            __html: additionalInfo.featured_store_shipping_content,
          }}
        />
      </div>
      <div>
        <h2>Secrets</h2>
        <div
          dangerouslySetInnerHTML={{
            __html: additionalInfo.featured_store_secrets_body,
          }}
        />
      </div>
      <div>
        <h2>Return</h2>
        <div
          dangerouslySetInnerHTML={{
            __html: additionalInfo.featured_store_returns_body,
          }}
        />
      </div>
    </AdditionalInfo.Wrapper>
  );
};

AdditionalInfo.Wrapper = styled.div`
  display: flex;
  flex-direction: column;

  padding: 15px;
`;

const mapStateToProps = state => ({
  additionalInfo: getAdditionalInfo(state),
});

const enhance = connect(mapStateToProps);

export default enhance(AdditionalInfo);
