//@flow
import * as React from 'react';
import styled from 'styled-components';
import breakpoint from 'styled-components-breakpoint';

import SearchBar from '../components/SearchBar';
import Brand from '../components/Brand';
import Offers from '../components/Offers';
import AdditionalInfo from '../components/AdditionalInfo';
import StoreInformation from '../components/StoreInformation';
import type { StorePageProps } from '../models/StorePage';

const StorePage = ({
  store,
  offers,
  extension,
  additionalInfo,
}: StorePageProps) => {
  return (
    <StorePage.Wrapper>
      <SearchBar name="storeSearch" placeholder="Search Stores" />
      <Brand store={store} offers={offers} extension={extension} />
      <StorePage.DesktopContent>
        <StorePage.ColumnNoWrapFlexBox order="2">
          <Offers offers={offers} />
        </StorePage.ColumnNoWrapFlexBox>
        <StorePage.ColumnNoWrapFlexBox order="1">
          <AdditionalInfo info={additionalInfo} />
        </StorePage.ColumnNoWrapFlexBox>
      </StorePage.DesktopContent>
      <StoreInformation info={store.info} />
    </StorePage.Wrapper>
  );
};

StorePage.Wrapper = styled.div`
  display: flex;
  flex-flow: column wrap;

  padding: 15px;

  ${breakpoint('xl')`
    width: 80%;
    margin: 0 auto;

    flex-flow: row wrap;
  `}
`;

StorePage.NoWrapFlexBox = styled.div`
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

StorePage.NoWrapFlexBoxWithBorder = styled(StorePage.NoWrapFlexBox)`
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

StorePage.DesktopContent = styled(StorePage.NoWrapFlexBox)`
  ${breakpoint('xl')`
    > div:first-child {
      width: calc(100% - 300px);
    }

    > div:last-child {
      width: 280px;
    }
  `}
`;

StorePage.ColumnNoWrapFlexBox = styled.div`
  ${breakpoint('xl')`
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: center;
    order: ${({ order }) => order};
    width: 100%;
  `}
`;

StorePage.defaultProps = {
  store: {
    name: 'Macy',
    isFollowed: false,
    info: [
      {
        title: 'Macy´s',
        body: `View the latest Online Coupons for Shoes below!
          Never miss a Shoes coupon or Cash Back opportunities
          from any of our 1,800 other stores with our Free Mobile App
          and Browser app! Any of Shoes's online coupons can be combined
          with Free, Automatic Rebates. Up to 7.0% Cash Back! Only from Piggy! Any of
          these Shoes coupon codes and promotions can be combined with our Automatic Cash
          Back at Shoes`,
      },
      {
        title: 'Cash Back not available:',
        body: `On email exclusive offers;
          Sales of products believed to be sold to parties reselling products offered by Macy´s;
          Use of coupons/promotional gift cards that are found outside of JoinPiggy.com or our browser App.`,
      },
    ],
  },
  offers: [
    {
      title:
        'Free Makeup Or Skin Care Gift With Any $55. This would be a second line.',
      cashbackPercent: 4,
      discountPercent: 7,
      expDate: '06/25/2019',
      usesToday: 4200,
      isDeal: true,
      isNew: true,
    },
    {
      title:
        'Free Makeup Or Skin Care Gift With Any $65. This would be a second line.',
      cashbackPercent: 25,
      discountPercent: 39,
      expDate: '01/12/2019',
      usesToday: 10,
      isDeal: true,
      isNew: false,
    },
    {
      title:
        'Free Makeup Or Skin Care Gift With Any $75. This would be a second line.',
      cashbackPercent: 8,
      discountPercent: 15,
      expDate: '06/01/2019',
      usesToday: 300,
      isCoupon: true,
      isNew: true,
      couponCode: '123123123',
    },
    {
      title:
        'Free Makeup Or Skin Care Gift With Any $85. This would be a second line.',
      cashbackPercent: 1,
      discountPercent: 1,
      expDate: '06/02/2025',
      usesToday: 1,
      isCoupon: true,
      couponCode: '98769876',
      isNew: true,
    },
    {
      title:
        'Get a $25 Bonus when you shop at Macy’s with Piggy and get gift cards.',
      value: '30 codes',
      isLimited: true,
      isBonus: true,
      isNew: true,
    },
  ],
  extension: {
    reviewsCount: '14,239',
    stars: 4.5,
  },
  specialConditions: {
    title: '',
    body: '',
  },
  additionalInfo: [
    {
      title: 'Return Policy',
      content: [
        {
          body:
            'Sign up for Free Sale Alerts and be the first to know when there is a huge discount. This way you can save up to 65%.',
          bonus: 'Plus get 7.0% Cash Back from Macy´s !',
        },
      ],
    },
    {
      title: 'Shopping Secrets',
      content: [
        {
          title: 'Sale alerts',
          body:
            'Sign up for Free Sale Alerts and be the first to know when there is a huge discount. This way you can save up to 65%.',
        },
        {
          title: '$100 Gift Certificate',
          body:
            'Every week you have the opportunity to get this certificate and you only need to enter once - they will include you in every drawing every week.',
        },
        {
          title: 'Sales Tax',
          body: 'They Handle all sale tax for orders that are in the US.',
        },
      ],
    },
    {
      title: "About Macy's",
      content: [
        {
          body: 'Free shipping on every order.',
          bonus: 'Shop Macy´s with 7.0% Cash Back',
        },
      ],
    },
  ],
};

export default StorePage;
