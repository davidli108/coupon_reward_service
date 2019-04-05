//@flow
import * as React from 'react';
import { compose } from 'recompose';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { withTranslation } from 'react-i18next';

import StoreInformationSection from './StoreInformationSection';
import type { StoreInformationProps } from '../models/StorePage';
import { getStore } from '../StoreCouponsReducer';

const StoreInformation = ({ t, store }: StoreInformationProps) => {
  return (
    <StoreInformation.Wrapper>
      <StoreInformationSection
        key={`store_${store.store_id}`}
        title="About"
        body={t('storeCoupons.viewLatestCoupons')}
      />
    </StoreInformation.Wrapper>
  );
};

StoreInformation.Wrapper = styled.div`
  margin-top: 50px;
  display: flex;
  flex-direction: column;

  border: 1px solid #dadde2;
  border-radius: 5px;
`;

const mapStateToProps = state => ({
  store: getStore(state),
});

export default compose(
  connect(mapStateToProps),
  withTranslation(),
)(StoreInformation);
