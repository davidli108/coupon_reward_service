//@flow
import * as React from 'react';

import styled from 'styled-components';
import breakpoint from 'styled-components-breakpoint';

import type { StoreListProps } from '../models/CouponsPage';

const StoreList = ({ stores }: StoreListProps) => {
  return (
    <StoreList.Wrapper>
      {stores.map(store => (
        <StoreList.Item key={`store_${store.offer_id}`}>
          <img src={store.store_logo} alt={store.store_name} />
          <p>{store.discount_print}</p>
        </StoreList.Item>
      ))}
    </StoreList.Wrapper>
  );
};

StoreList.Wrapper = styled.div`
  display: flex;
  flex-flow: column wrap;

  margin-top: 20px;
  overflow-x: scroll;

  height: 130px;

  > div {
    padding: 5px;
    margin-right: 15px;
  }

  ${breakpoint('xl')`
    overflow-x: hidden;
    margin-bottom: 25px;
  `}
`;

StoreList.Item = styled.div`
  display: flex;
  flex-flow: column nowrap;

  background: #fff;

  border: 1px solid #dadde2;
  border-radius: 5px;

  width: 120px;
  height: 120px;

  > img {
    height: auto;
    width: 60px;

    align-self: center;
    margin-top: auto;
  }

  > p {
    margin-top: auto;
    align-self: center;

    font-weight: bold;
    line-height: 23px;
    font-size: 13px;

    color: #899197;
  }

  ${breakpoint('xl')`
    width: 165px;
    height: 136px;
  `}
`;

export default StoreList;
