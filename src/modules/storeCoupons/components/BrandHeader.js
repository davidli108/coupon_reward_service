//@flow
import * as React from 'react';
// eslint-disable-next-line no-unused-vars
import { MdFavorite, MdFavoriteBorder } from 'react-icons/md';
import breakpoint from 'styled-components-breakpoint';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { compose } from 'recompose';
import { withTranslation } from 'react-i18next';

import type { BrandHeaderProps } from '../models/StorePage';
import { getStore, getOffers } from '../StoreCouponsReducer';

const getCouponsCount = offers =>
  offers.filter(x => x.coupon_code !== '').length;
const getDealsCount = offers => offers.filter(x => x.coupon_code === '').length;

const BrandHeader = ({
  t,
  store: { store_name, store_cashback_text },
  offers,
  offersCount,
}: BrandHeaderProps) => {
  const [isStoreFollowed, setStoreFollowed] = React.useState(false);
  // eslint-disable-next-line no-unused-vars
  const handleStoreFollowToggler = () => setStoreFollowed(!isStoreFollowed);

  return (
    <>
      <BrandHeader.Name>
        {store_name} {t('storeCoupons.codesAndDeals')}
      </BrandHeader.Name>
      <BrandHeader.NoWrapFlexBox>
        {offersCount !== 0 && (
          <BrandHeader.OffersStats>
            <span>
              {getCouponsCount(offers)}{' '}
              {getCouponsCount(offers) === 1
                ? t('coupons.type.coupon')
                : t('header.coupons')}
            </span>
            <span>-</span>
            <span>
              {getDealsCount(offers)}{' '}
              {getDealsCount(offers) === 1
                ? t('coupons.type.deal')
                : t('global.deals')}
            </span>
            <span>-</span>
            <span>{store_cashback_text}</span>
          </BrandHeader.OffersStats>
        )}
        {/*
        <BrandHeader.FollowStoreWrapper isStoreFollowed={isStoreFollowed}>
          <div onClick={handleStoreFollowToggler}>
            {isStoreFollowed ? <MdFavorite /> : <MdFavoriteBorder />}
            <span>{t('storeCoupons.followStore')}</span>
          </div>
        </BrandHeader.FollowStoreWrapper>
        */}
      </BrandHeader.NoWrapFlexBox>
    </>
  );
};

BrandHeader.Name = styled.h2`
  font-size: 22px;
  font-weight: bold;
  color: #374b5a;

  text-align: center;
  padding-top: 15px;

  ${breakpoint('xl')`
    padding: 0 0 0  30px;
    width: 100%;

    text-align: start;
    line-height: 46px;
    font-size: 39px;
  `}

  ${breakpoint('md')`
    width: 100%;

    text-align: start;
    line-height: 46px;
    font-size: 30px;
  `}
`;

BrandHeader.NoWrapFlexBox = styled.div`
  width: 100%;
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

BrandHeader.OffersStats = styled.div`
  display: flex;
  justify-content: space-between;

  width: 100%;
  padding: 15px 0 25px 0;

  ${breakpoint('md')`
    max-width: 500px;
    padding: 0 0 5px 0;
  `}

  ${breakpoint('xl')`
    padding: 0 0 5px 30px;
  `}

  & > span {
    font-weight: bold;
    font-size: 10px;
    color: #62707b;

    ${breakpoint('md')`
      font-size: 16px;
    `}

    &:last-child {
      margin-right: 5px;
    }
  }
`;

BrandHeader.FollowStoreWrapper = styled.div`
  display: flex;
  align-items: center;

  padding: 25px 0 10px 0;

  ${breakpoint('xl')`
    padding: 0 0 0 30px;
  `}

  > div {
    display: flex;
    align-items: center;

    width: fit-content;
    height: auto;

    cursor: pointer;

    > svg {
      width: 22px;
      height: 22px;
      color: ${({ isStoreFollowed }) => (isStoreFollowed ? 'red' : '#d2d2d2')};
    }

    > span {
      padding-left: 5px;
      font-size: 14px;
      color: ${({ isStoreFollowed }) =>
        isStoreFollowed ? 'black' : '#b1b1b1'};
    }
  }
`;

const mapStateToProps = state => ({
  store: getStore(state),
  offers: getOffers(state),
});

export default compose(
  connect(mapStateToProps),
  withTranslation(),
)(BrandHeader);
