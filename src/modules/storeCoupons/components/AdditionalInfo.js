//@flow
import * as React from 'react';
import styled from 'styled-components';

import AdditionalInfoSection from './AdditionalInfoSection';
import type { AdditionalInfoProps } from '../models/StorePage';

const AdditionalInfo = ({ info }: AdditionalInfoProps) => {
  return (
    <AdditionalInfo.Wrapper>
      {info.map(section => (
        <AdditionalInfoSection
          key={`section_${section.title}`}
          title={section.title}
          content={section.content}
        />
      ))}
    </AdditionalInfo.Wrapper>
  );
};

AdditionalInfo.Wrapper = styled.div`
  display: flex;
  flex-direction: column;

  padding: 15px;
`;

export default AdditionalInfo;
