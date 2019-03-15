//@flow
import * as React from 'react';
import styled from 'styled-components';
import breakpoint from 'styled-components-breakpoint';

import BrandHeader from './BrandHeader';
import BrandContent from './BrandContent';

import type { BrandProps } from '../models/StorePage';

const Brand = ({ store, offers, extension }: BrandProps) => {
  return (
    <Brand.Wrapper>
      <Brand.BrandImageWrapper>
        <img
          src="http://www.legacypowerwashing.com/wp-content/uploads/2015/11/macys-logo-fix.png"
          alt="brand-logo"
        />
      </Brand.BrandImageWrapper>
      <Brand.WrapFlexBox>
        <BrandHeader
          storeName={store.name}
          offers={offers}
          isFollowed={store.isFollowed}
        />
        <Brand.NoWrapFlexBoxWithBorder>
          <BrandContent
            storeName={store.name}
            stars={extension.stars}
            reviewsCount={extension.reviewsCount}
          />
        </Brand.NoWrapFlexBoxWithBorder>
      </Brand.WrapFlexBox>
    </Brand.Wrapper>
  );
};

Brand.Wrapper = styled.div`
  display: flex;
  flex-direction: column;

  ${breakpoint('xl')`
    flex-flow: row nowrap;

    height: auto;
    width: 100%;
  `}

  padding-top: 15px;
`;

Brand.BrandImageWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 150px;

  border: 1px solid #dadde2;
  border-radius: 5px;

  ${breakpoint('xl')`
    width: 270px;
    height: 270px;
  `}

  > img {
    height: auto;
    width: auto;
    max-width: 100%;
    max-height: 100%;

    ${breakpoint('xl')`
      width: 140px;
      height: 140px;
    `}
  }
`;

Brand.NoWrapFlexBox = styled.div`
  display: flex;
  flex-flow: column nowrap;

  ${breakpoint('xl')`
    flex-flow: row nowrap;
    justify-content: space-between;
    align-items: baseline;

    width: 100%;
    padding: 10px 0;
  `}
`;

Brand.NoWrapFlexBoxWithBorder = styled(Brand.NoWrapFlexBox)`
  ${breakpoint('xl')`
      border: 1px dashed #00CBE9;
      border-radius: 5px;
      margin-left: 30px;
      padding: 8px 20px;

      align-items: center;

      height: auto;

      > * {
        padding: 0;
      }
    `}
`;

Brand.WrapFlexBox = styled.div`
  display: flex;
  flex-flow: column nowrap;

  ${breakpoint('xl')`
    flex-flow: row wrap;
    align-items: center;

    width: calc(100% - 270px);
  `}
`;

export default Brand;
