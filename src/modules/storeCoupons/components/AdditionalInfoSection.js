// @flow
import * as React from 'react';
import styled from 'styled-components';

import AdditionalInfoContent from './AdditionalInfoContent';

import type { AdditionalInfoSectionProps } from '../models/StorePage';

const AdditionalInfoSection = ({
  title,
  content,
}: AdditionalInfoSectionProps) => {
  return (
    <AdditionalInfoSection.Wrapper>
      <h2>{title}</h2>
      {content.map(content => (
        <AdditionalInfoContent
          key={`section_content_${content.title || 'title'}_${content.bonus ||
            'bonus'}`}
          {...content}
        />
      ))}
    </AdditionalInfoSection.Wrapper>
  );
};

AdditionalInfoSection.Wrapper = styled.section`
  display: flex;
  flex-direction: column;

  padding: 15px 0;

  :not(:last-child) {
    border-bottom: 1px solid #dadde2;
  }

  > h2 {
    font-weight: bold;
    line-height: 24px;
    font-size: 20px;
    letter-spacing: 0.5px;
    color: #899197;

    padding-bottom: 10px;
  }
`;

export default AdditionalInfoSection;
