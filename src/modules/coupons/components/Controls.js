// @flow
import * as React from 'react';
import styled from 'styled-components';
import { withTranslation } from 'react-i18next';

import allDealsSvg from '../assets/allDeals.svg';
import allDealsActiveSvg from '../assets/allDealsActive.svg';

import onlyCouponsSvg from '../assets/onlyCoupons.svg';
import onlyCouponsActiveSvg from '../assets/onlyCouponsActive.svg';

import favoriteStoresSvg from '../assets/favoriteStores.svg';
import favoriteStoresActiveSvg from '../assets/favoriteStoresActive.svg';

type ControlsProps = {
  t: Function,
  i18n: Object,
  getDealsFilter: Object,
  setDealsFilter: Object,
};

const Controls = ({
  t,
  i18n,
  getDealsFilter,
  setDealsFilter,
}: ControlsProps) => {
  return (
    <Controls.Wrapper>
      <Controls.Button
        isActive={getDealsFilter === 'allDeals'}
        onClick={() => setDealsFilter('allDeals')}
        lng={i18n.language}
      >
        <img
          src={getDealsFilter === 'allDeals' ? allDealsActiveSvg : allDealsSvg}
          alt="all deals"
        />
        <p>{t('coupons.controls.allDeals')}</p>
        {getDealsFilter === 'allDeals' && <Controls.Pointer />}
      </Controls.Button>

      <Controls.Button
        isActive={getDealsFilter === 'onlyCoupons'}
        onClick={() => setDealsFilter('onlyCoupons')}
        lng={i18n.language}
      >
        <img
          src={
            getDealsFilter === 'onlyCoupons'
              ? onlyCouponsActiveSvg
              : onlyCouponsSvg
          }
          alt="only coupons"
        />
        <p>{t('coupons.controls.onlyCoupons')}</p>
        {getDealsFilter === 'onlyCoupons' && <Controls.Pointer />}
      </Controls.Button>

      <Controls.Button
        isActive={getDealsFilter === 'favoriteStores'}
        onClick={() => setDealsFilter('favoriteStores')}
        lng={i18n.language}
      >
        <img
          src={
            getDealsFilter === 'favoriteStores'
              ? favoriteStoresActiveSvg
              : favoriteStoresSvg
          }
          alt="favorite stores"
        />
        <p>{t('coupons.controls.favoriteStores')}</p>
        {getDealsFilter === 'favoriteStores' && <Controls.Pointer />}
      </Controls.Button>
    </Controls.Wrapper>
  );
};

Controls.Wrapper = styled.div`
  display: flex;
  margin-bottom: 10px;
  justify-content: center;
  align-items: baseline;

  width: 100%;
`;

Controls.Button = styled.div`
  display: flex;
  flex-flow: column nowrap;

  width: ${props => (props.lng === 'fr' ? '110px' : '80px')};
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

export default withTranslation()(Controls);
