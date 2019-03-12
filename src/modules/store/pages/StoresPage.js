// @flow
import React from 'react';
import { Helmet } from 'react-helmet';
import styled from 'styled-components';
import breakpoint from 'styled-components-breakpoint';

import StoreSidebar from '../components/StoreSidebar';
import StoreMain from '../components/StoreMain';

import targetIcon from '../assets/target.png';
import walmartIcon from '../assets/walmart.png';
import macysIcon from '../assets/macys.png';

type StoresPageProps = {
  stores: {
    name: string,
    newStore: boolean,
    offer: string,
    deals: string,
    logo: string,
    url: string,
  }[],
  categories: {
    title: string,
    number: string,
  }[],
};

const StoresPage = ({ stores, categories }: StoresPageProps) => (
  <React.Fragment>
    <Helmet>
      <title>Stores</title>
    </Helmet>

    <StoresPage.Wrapper>
      <StoresPage.Container>
        <StoresPage.Box>
          <StoresPage.Title>
            Browse among more than 1000 stores
          </StoresPage.Title>
          <StoreSidebar categories={categories} />
          <StoreMain stores={stores} />
        </StoresPage.Box>
      </StoresPage.Container>
    </StoresPage.Wrapper>
  </React.Fragment>
);

StoresPage.Wrapper = styled.section`
  position: relative;

  ${breakpoint('xs')`
    padding: 21px 0 75px 0;
  `}
  @media (min-width: 413px) {
    padding: 25px 0 75px 0;
  }
  ${breakpoint('md')`
    padding: 36px 0 75px 0;
  `}
  ${breakpoint('lg')`
    padding: 41px 0 75px 0;
  `}
  ${breakpoint('xl')`
    padding: 57px 0 75px 0;
  `}
`;

StoresPage.Container = styled.div`
  max-width: 1141px;
  margin: 0 auto;
  padding: 0 15px;
  ${breakpoint('sm')`
    padding: 0 40px;
  `}
  ${breakpoint('md')`
    padding: 0 15px;
  `}
`;

StoresPage.Title = styled.h3`
  margin: 0 0 18px 0;
  text-align: center;
  line-height: 29px;
  font-weight: bold;
  font-size: 25px;
  color: #374b5a;
  ${breakpoint('xs')`
    display: block;
    font-size: 17px;
    padding: 0;
  `}
  @media (min-width: 413px) {
    font-size: 22px;
  }
  ${breakpoint('sm')`
    display: none;
    font-size: 25px;
    padding: 7px 0 0 0;
  `}
`;

StoresPage.Box = styled.div`
  display: flex;
  width: 100%;
  ${breakpoint('xs')`
    flex-direction: column;
  `}
  ${breakpoint('sm')`
    flex-direction: row;
  `}
`;

StoresPage.defaultProps = {
  stores: [
    {
      name: 'Target',
      logo: targetIcon,
      newStore: true,
      deals: '258456 Deals',
      offer: '+12% Cash Back',
      url: 'https://target.com',
    },
    {
      name: 'Welmart',
      logo: walmartIcon,
      newStore: true,
      deals: '258422 Deals',
      offer: '+1% Cash Back',
      url: 'https://welmart.com',
    },
    {
      name: 'Macus',
      logo: macysIcon,
      newStore: false,
      deals: '211156 Deals',
      offer: '+50% Cash Back',
      url: 'https://macus.com',
    },
  ],
  categories: [
    { title: 'Accessories', number: '101' },
    { title: 'Beauty', number: '200002' },
    { title: 'Clothing', number: '9991' },
    { title: 'Computers', number: '2' },
    { title: 'Department', number: '10' },
  ],
};

export default StoresPage;
