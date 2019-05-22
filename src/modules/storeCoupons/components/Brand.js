// @flow
import * as React from 'react';
import styled from 'styled-components';
import breakpoint from 'styled-components-breakpoint';
import { connect } from 'react-redux';
import moment from 'moment';

import BrandHeader from './BrandHeader';
import BrandContent from './BrandContent';
import placeholder from '@modules/coupons/assets/image-placeholder.png';
import BrandImageLoader from './loaders/BrandImageLoader';
import BrandXlLoader from './loaders/BrandXlLoader';

import type { BrandProps } from '../models/StorePage';

import { getStore } from '../StoreCouponsReducer';

const Brand = ({ store, isLoaded, offersCount, reviews }: BrandProps) => (
  <>
    <Brand.Wrapper>
      {isLoaded ? (
        <Brand.BrandImageWrapper href={store.store_info_link} target="_blank">
          <img
            src={
              store.store_logo_image_path
                ? `https://d2umvgb8hls1bt.cloudfront.net${
                    store.store_logo_image_path
                  }`
                : placeholder
            }
            onError={e => {
              e.target.onerror = null;
              e.target.src = placeholder;
            }}
            alt={`${store.store_name || ''} Coupon Codes ${moment().format(
              'MMMM',
            )} | ${moment().format('YYYY')}`}
          />
        </Brand.BrandImageWrapper>
      ) : (
        <BrandImageLoader />
      )}
      <Brand.WrapFlexBox>
        {isLoaded ? (
          <>
            <BrandHeader offersCount={offersCount} />
            <Brand.XlWrapper>
              <Brand.NoWrapFlexBoxWithBorder>
                <BrandContent
                  storeName={store.store_name}
                  stars={5}
                  reviewsCount={reviews}
                />
              </Brand.NoWrapFlexBoxWithBorder>
            </Brand.XlWrapper>
          </>
        ) : (
          <BrandXlLoader />
        )}
      </Brand.WrapFlexBox>
    </Brand.Wrapper>
    <Brand.MdWrapper>
      <Brand.NoWrapFlexBoxWithBorder>
        <BrandContent
          storeName={store.store_name}
          stars={5}
          reviewsCount={reviews}
        />
      </Brand.NoWrapFlexBoxWithBorder>
    </Brand.MdWrapper>
  </>
);

Brand.Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-flow: column nowrap;

  ${breakpoint('sx')`
    flex-flow: row nowrap;

    > a {
      padding: 0 15px;
    }
  `}

  ${breakpoint('lg')`
    height: auto;
    width: 100%;
  `}

  padding-top: 15px;
`;

Brand.BrandImageWrapper = styled.a`
  width: 100%;
  margin-right: 30px;
  padding: 25px 0;
  display: flex;
  justify-content: center;
  align-items: center;

  border: 1px solid #dadde2;
  border-radius: 5px;

  ${breakpoint('sx')`
    width: 250px;
    height: 100%;
    padding: 0;
  `}

  ${breakpoint('md')`
    width: 300px;
    height: 150px;
  `}

  ${breakpoint('xl')`
    width: 250px;
    height: 280px;
  `}

  > img {
    height: auto;
    width: auto;
    max-width: 100%;
    max-height: 100%;
  }
`;

Brand.NoWrapFlexBox = styled.div`
  display: flex;
  flex-direction: column;

  ${breakpoint('lg')`
    flex-flow: row nowrap;
    justify-content: space-between;
    align-items: baseline;

    width: 100%;
    padding: 10px 0;
  `}

  ${breakpoint('md')`
    flex-direction: row;
  `}
`;

Brand.NoWrapFlexBoxWithBorder = styled(Brand.NoWrapFlexBox)`
  ${breakpoint('md')`
    border: 1px dashed #00CBE9;
    border-radius: 5px;
    padding: 8px 20px;

    align-items: center;

    height: auto;

    > * {
      padding: 0;
    }
  `}
`;

Brand.XlWrapper = styled.div`
  width: 100%;
  display: none;

  ${breakpoint('xl')`
    display: flex;
  `}
`;

Brand.MdWrapper = styled.div`
  margin-top: 10px;
  display: flex;

  ${breakpoint('sm')`
    margin-top: 30px;
  `}

  ${breakpoint('xl')`
    display: none;
  `}
`;

Brand.WrapFlexBox = styled.div`
  display: flex;
  flex-flow: column nowrap;

  ${breakpoint('md')`
    flex-flow: row wrap;
    align-items: center;

    width: calc(100% - 270px);
  `}
`;

const mapStateToProps = state => ({
  store: getStore(state),
});

const enhance = connect(mapStateToProps);

export default enhance(Brand);
