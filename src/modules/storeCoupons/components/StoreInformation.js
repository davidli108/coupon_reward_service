//@flow
import * as React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';

import StoreInformationSection from './StoreInformationSection';
import type { StoreInformationProps } from '../models/StorePage';
import { getStore } from '../StoreCouponsReducer';

const StoreInformation = ({ store }: StoreInformationProps) => {
  return (
    <StoreInformation.Wrapper>
      <StoreInformationSection
        key={`store_${store.store_id}`}
        title="About"
        body={store.store_description}
      />
    </StoreInformation.Wrapper>
  );
};

StoreInformation.Wrapper = styled.div`
  display: flex;
  flex-direction: column;

  border: 1px solid #dadde2;
  border-radius: 5px;
`;

const mapStateToProps = state => ({
  store: getStore(state),
});

const enhance = connect(mapStateToProps);

export default enhance(StoreInformation);
