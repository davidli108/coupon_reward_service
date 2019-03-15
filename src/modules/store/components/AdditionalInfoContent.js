//@flow
import * as React from 'react';
import styled from 'styled-components';

import type { AdditionalInfoContentProps } from '../models/StorePage';

const AdditionalInfoContent = ({
  title,
  body,
  bonus,
}: AdditionalInfoContentProps) => {
  return (
    <AdditionalInfoContent.Wrapper>
      {title && <h3>{title}</h3>}
      {body && <p>{body}</p>}
      {bonus && <h4>{bonus}</h4>}
    </AdditionalInfoContent.Wrapper>
  );
};

AdditionalInfoContent.Wrapper = styled.div`
  display: flex;
  flex-direction: column;

  padding: 15px 0;

  > h3 {
    line-height: 21px;
    font-size: 18px;
    font-weight: bold;
    letter-spacing: 0.45px;

    padding-bottom: 15px;

    color: #899197;
  }

  > h4 {
    font-weight: bold;
    line-height: 15px;
    font-size: 13px;

    padding-top: 15px;

    color: #899197;
  }

  > p {
    line-height: 21px;
    font-size: 16px;

    color: #b1b1b1;
  }
`;

export default AdditionalInfoContent;
