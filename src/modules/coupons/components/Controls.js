//@flow
import * as React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

import allDealsSvg from '../assets/allDeals.svg';
import allDealsActiveSvg from '../assets/allDealsActive.svg';

import onlyCouponsSvg from '../assets/onlyCoupons.svg';
import onlyCouponsActiveSvg from '../assets/onlyCouponsActive.svg';

import favoriteStoresSvg from '../assets/favoriteStores.svg';
import favoriteStoresActiveSvg from '../assets/favoriteStoresActive.svg';

import type { ControlsProps } from '../models/CouponsPage';

import * as actions from '@modules/coupons/CouponsActions';
import { getFilter } from '@modules/coupons/CouponsReducer';

const Controls = ({ filterBy, setFilter }: ControlsProps) => {
  return (
    <Controls.Wrapper>
      <Controls.Button
        isActive={filterBy === 'allDeals'}
        onClick={() => setFilter('allDeals')}
      >
        <img
          src={filterBy === 'allDeals' ? allDealsActiveSvg : allDealsSvg}
          alt="all deals"
        />
        <p>All Deals</p>
        {filterBy === 'allDeals' && <Controls.Pointer />}
      </Controls.Button>

      <Controls.Button
        isActive={filterBy === 'onlyCoupons'}
        onClick={() => setFilter('onlyCoupons')}
      >
        <img
          src={
            filterBy === 'onlyCoupons' ? onlyCouponsActiveSvg : onlyCouponsSvg
          }
          alt="only coupons"
        />
        <p>Only Coupons</p>
        {filterBy === 'onlyCoupons' && <Controls.Pointer />}
      </Controls.Button>

      <Controls.Button
        isActive={filterBy === 'favoriteStores'}
        onClick={() => setFilter('favoriteStores')}
      >
        <img
          src={
            filterBy === 'favoriteStores'
              ? favoriteStoresActiveSvg
              : favoriteStoresSvg
          }
          alt="favorite stores"
        />
        <p>Favorite Stores</p>
        {filterBy === 'favoriteStores' && <Controls.Pointer />}
      </Controls.Button>
    </Controls.Wrapper>
  );
};

Controls.Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: baseline;

  width: 100%;
`;

Controls.Button = styled.div`
  display: flex;
  flex-flow: column nowrap;

  width: 80px;
  margin-right: 25px;

  white-space: nowrap;
  cursor: pointer;

  > img {
    width: 55px;
    height: auto;

    margin: 0 auto;
  }

  > p {
    text-align: center;
    font-weight: bold;
    line-height: 23px;
    font-size: 13px;
    color: ${({ isActive }) => (isActive ? '#00cbe9' : '#c2c2c2')};

    margin-top: -8px;
  }
`;

Controls.Pointer = styled.div`
  width: 7px;
  height: 6px;
  background: #00cbe9;
  clip-path: polygon(50% 0%, 0% 100%, 100% 100%);

  align-self: center;
`;

const mapStateToProps = state => ({
  filterBy: getFilter(state),
});

const mapDispatchToProps = {
  setFilter: actions.setFilter,
};

const enhance = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default enhance(Controls);
