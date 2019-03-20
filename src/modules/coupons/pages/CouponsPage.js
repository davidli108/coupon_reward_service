//@flow
import * as React from 'react';
import styled from 'styled-components';

import SearchBar from '@modules/store/components/Search';
import TodaysFeaturedCoupon from '../components/TodaysFeaturedCoupon';
import StoreList from '../components/StoreList';
import Content from '../components/Content';

import type { CouponsPageProps } from '../models/CouponsPage';

const CouponsPage = ({
  featuredCoupon,
  filters,
  stores,
  coupons,
}: CouponsPageProps) => {
  return (
    <CouponsPage.Wrapper>
      <SearchBar />

      <TodaysFeaturedCoupon {...featuredCoupon} />
      <StoreList stores={stores} />
      <Content
        categories={filters.categories}
        stores={filters.stores}
        coupons={coupons}
      />
    </CouponsPage.Wrapper>
  );
};

CouponsPage.Wrapper = styled.div`
  display: flex;
  flex-flow: column nowrap;

  padding: 10px;
`;

CouponsPage.defaultProps = {
  featuredCoupon: {
    storeName: 'Macy',
    highestCashbackPercent: 4,
    discountPercent: 20,
    description: `Sports Shoes - For all the unstoppable man looking for adventure.`,
    isFavorited: false,
  },
  stores: [
    {
      logo: 'https://logo.clearbit.com/sportingnews.com',
      cashback: 3,
    },
    {
      logo: 'https://logo.clearbit.com/zx-ventures.com',
      cashback: 4,
    },
    {
      logo: 'https://logo.clearbit.com/bc.edu',
      cashback: 6,
    },
    {
      logo: 'https://logo.clearbit.com/bgr.com',
      cashback: 99,
    },
    {
      logo: 'https://logo.clearbit.com/hgtv.com',
      cashback: 34,
    },
    {
      logo: 'https://logo.clearbit.com/ew.com',
      cashback: 21,
    },
    {
      logo: 'https://logo.clearbit.com/xhamster.com',
      cashback: 23,
    },
  ],

  filters: {
    stores: [
      { title: 'MACY´S', value: 12 },
      { title: 'SEARS', value: 13 },
      { title: 'UDEMY', value: 14 },
      { title: 'VERIZON', value: 15 },
      { title: 'WALLGREENS', value: 16 },
      { title: 'MACY´S', value: 17 },
      { title: 'SEARS', value: 18 },
      { title: 'UDEMY', value: 19 },
      { title: 'VERIZON', value: 10 },
    ],
    categories: [
      { title: 'Accessories', value: 122 },
      { title: 'Automotive', value: 1222 },
      { title: 'Baby', value: 123 },
      { title: 'Beauty', value: 34 },
      { title: 'Books & Media', value: 58 },
      { title: 'Business & Office', value: 0 },
      { title: 'Cell Phones', value: 54 },
      { title: 'Clothing', value: 212 },
      { title: 'Computers', value: 39 },
      { title: 'Department Stores', value: 74 },
    ],
  },

  coupons: [
    {
      logo: 'https://logo.clearbit.com/xhamster.com',
      discount: 5,
      cashback: 15,
      expDate: '01/02/2019',
    },
    {
      logo: 'https://logo.clearbit.com/ew.com',
      discount: 5,
      cashback: 15,
      expDate: '01/02/2019',
    },
    {
      logo: 'https://logo.clearbit.com/hgtv.com',
      discount: 5,
      cashback: 15,
      expDate: '01/02/2019',
    },
    {
      logo: 'https://logo.clearbit.com/bc.edu',
      discount: 5,
      cashback: 15,
      expDate: '01/02/2019',
    },
    {
      logo: 'https://logo.clearbit.com/sportingnews.com',
      discount: 5,
      cashback: 15,
      expDate: '01/02/2019',
    },
    {
      logo: 'https://logo.clearbit.com/bgr.com',
      discount: 5,
      cashback: 15,
      expDate: '01/02/2019',
    },
    {
      logo: 'https://logo.clearbit.com/xhamster.com',
      discount: 5,
      cashback: 15,
      expDate: '01/02/2019',
    },
  ],
};

export default CouponsPage;
