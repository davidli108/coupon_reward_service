// @flow
import React from 'react';
import { Helmet } from 'react-helmet';
import styled from 'styled-components';

import StoreSidebar from '../components/StoreSidebar';
import StoreMain from '../components/StoreMain';

type StoresPageProps = {
  stores: {
    name: string,
    offer: string,
    logo: string,
    url: string,
  }[],
  categories: {
    title: string,
    number: string,
  }[],
};

const StoresPage = ({ stores, categories }: StoresPageProps) => (
  <div>
    <Helmet>
      <title>Stores</title>
    </Helmet>

    <StoresPage.Wrapper>
      <StoresPage.Container>
        <StoresPage.Box>
          <StoreSidebar categories={categories} />
          <StoreMain stores={stores} />
        </StoresPage.Box>
      </StoresPage.Container>
    </StoresPage.Wrapper>
  </div>
);

StoresPage.Wrapper = styled.div`
  position: relative;
  padding: 50px 0 0 0;
`;

StoresPage.Container = styled.div`
  max-width: 1100px;
  margin: 0 auto;
`;

StoresPage.Box = styled.div`
  display: flex;
`;

StoresPage.defaultProps = {
  stores: [
    {
      name: 'Target',
      logo: '',
      offer: '+12% Cash Back',
      url: 'https://target.com',
    },
    {
      name: 'Welmart',
      logo: '',
      offer: '+12% Cash Back',
      url: 'https://welmart.com',
    },
    {
      name: 'Macus',
      logo: '',
      offer: '+12% Cash Back',
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
