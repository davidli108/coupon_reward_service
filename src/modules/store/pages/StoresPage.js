// @flow
import React from 'react';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import styled from 'styled-components';
import breakpoint from 'styled-components-breakpoint';

import StoreSidebar from '../components/StoreSidebar';
import StoreMain from '../components/StoreMain';

import { type Store, type Categories } from '../models';
import { loadMore } from '../StoreActions';
import { getStores } from '../StoreReducer';

type StoresPageProps = {
  stores: Store[],
  categories: Categories[],
  onLoadMore: Function,
};

const StoresPage = ({
  stores,
  categories,
  onLoadMore,
}: StoresPageProps) => {

  return (
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
            <StoreMain
              stores={stores}
              onLoadMore={onLoadMore}
            />
          </StoresPage.Box>
        </StoresPage.Container>
      </StoresPage.Wrapper>
    </React.Fragment>
  )
};

StoresPage.Wrapper = styled.section`
  position: relative;

  ${breakpoint('xs')`
    padding: 21px 0 75px 0;
  `}

  ${breakpoint('sx')`
    padding: 25px 0 75px 0;
  `}

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
  color: ${props => props.theme.colors.blackLight};

  ${breakpoint('xs')`
    display: block;
    font-size: 17px;
    padding: 0;
  `}

  ${breakpoint('sx')`
    font-size: 22px;
  `}

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
  categories: [
    { title: 'Accessories', number: 101 },
    { title: 'Beauty', number: 200002 },
    { title: 'Clothing', number: 9991 },
    { title: 'Computers', number: 2 },
    { title: 'Department', number: 10 },
  ],
  onLoadMore: Function,
};

const mapStateToProps = state => ({
  stores: getStores(state),
})

const mapDispatchToProps = {
  onLoadMore: loadMore,
};

export default connect(mapStateToProps, mapDispatchToProps)(StoresPage);
