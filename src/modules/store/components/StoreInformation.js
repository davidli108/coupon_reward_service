//@flow
import * as React from 'react';
import styled from 'styled-components';

import StoreInformationSection from './StoreInformationSection';
import type { StoreInformationProps } from '../models/StorePage';

const StoreInformation = ({ info }: StoreInformationProps) => {
  return (
    <StoreInformation.Wrapper>
      {info.map(x => (
        <StoreInformationSection
          key={`store_information_${x.title || 'title'}`}
          {...x}
        />
      ))}
    </StoreInformation.Wrapper>
  );
};

StoreInformation.Wrapper = styled.div`
  display: flex;
  flex-direction: column;

  border: 1px solid #dadde2;
  border-radius: 5px;
`;

export default StoreInformation;
