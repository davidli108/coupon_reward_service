//@flow
import * as React from 'react';
import styled from 'styled-components';

import type { StoreInformation } from '../models/StorePage';

const StoreInformationSection = ({ title, body }: StoreInformation) => {
  return (
    <StoreInformationSection.Wrapper>
      <h2>{title}</h2>
      <p>{body}</p>
    </StoreInformationSection.Wrapper>
  );
};

StoreInformationSection.Wrapper = styled.div`
  display: flex;
  flex-direction: column;

  padding: 25px;

  > h2 {
    font-weight: bold;
    line-height: 21px;
    font-size: 18px;
    letter-spacing: 0.45px;
    color: #b1b1b1;
  }

  > p {
    line-height: 23px;
    font-size: 16px;
    letter-spacing: 0.1px;
    color: #b1b1b1;

    padding-top: 15px;
  }
`;

export default StoreInformationSection;
