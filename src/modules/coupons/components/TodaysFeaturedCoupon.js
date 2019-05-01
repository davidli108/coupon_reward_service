//@flow
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { IoIosHeartEmpty, IoIosHeart } from 'react-icons/io';
import breakpoint from 'styled-components-breakpoint';
import { withTranslation } from 'react-i18next';
import moment from 'moment';

import placeholder from '@modules/coupons/assets/image-placeholder.png';
import type { Store } from '../models/CouponsPage';
import SocialShareFeatured from './SocialShareFeatured';

type TodaysFeaturedCouponProps = {
  t: Function,
  store: Store,
};

const TodaysFeaturedCoupon = ({ t, store }: TodaysFeaturedCouponProps) => {
  const [isFeaturedCouponLiked, setFeaturedCouponLike] = useState('');
  const handleFeaturedCouponLikeToggler = () =>
    setFeaturedCouponLike(!isFeaturedCouponLiked);

  return (
    <TodaysFeaturedCoupon.Wrapper>
      <h2>
        {t('coupons.todaysFeatureCoupon')} {store.store_name}
      </h2>
      <TodaysFeaturedCoupon.Content>
        <TodaysFeaturedCoupon.LogoControlsWrapper>
          <Link to={store.store_page_link}>
            <TodaysFeaturedCoupon.Logo
              src={
                store.store_logo
                  ? `https://d2umvgb8hls1bt.cloudfront.net${store.store_logo}`
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
          </Link>
          <TodaysFeaturedCoupon.Controls isLiked={isFeaturedCouponLiked}>
            {isFeaturedCouponLiked ? (
              <IoIosHeart onClick={handleFeaturedCouponLikeToggler} />
            ) : (
              <IoIosHeartEmpty onClick={handleFeaturedCouponLikeToggler} />
            )}
            <SocialShareFeatured
              text={store.ref_text}
              link={store.offer_link}
              twitterLink={store.twitter_link}
              pinterestLink={store.pinterest_link}
            />
          </TodaysFeaturedCoupon.Controls>
        </TodaysFeaturedCoupon.LogoControlsWrapper>

        <TodaysFeaturedCoupon.OfferingWrapper>
          <TodaysFeaturedCoupon.Offering>
            <span>{store.discount} OFF</span>
            <span>{t('cashbackStores.shopBy.instantSaving')}</span>
          </TodaysFeaturedCoupon.Offering>
        </TodaysFeaturedCoupon.OfferingWrapper>

        <TodaysFeaturedCoupon.DescriptionButtonWrapper>
          <TodaysFeaturedCoupon.Description>
            {store.offer_name}
          </TodaysFeaturedCoupon.Description>
          <TodaysFeaturedCoupon.Button href={store.offer_link} target="_blank">
            {t('coupons.buttons.viewDeal')}
          </TodaysFeaturedCoupon.Button>
        </TodaysFeaturedCoupon.DescriptionButtonWrapper>
      </TodaysFeaturedCoupon.Content>
    </TodaysFeaturedCoupon.Wrapper>
  );
};

TodaysFeaturedCoupon.Wrapper = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  align-items: center;

  > h2 {
    font-weight: bold;
    line-height: 19px;
    font-size: 16px;
    color: #374b5a;

    margin-bottom: 15px;

    ${breakpoint('sx')`
      line-height: 24px;
      font-size: 20px;
      font-weight: bold;
    `}

    ${breakpoint('md')`
      font-weight: bold;
      line-height: 29px;
      font-size: 25px;
    `}
  }
`;

TodaysFeaturedCoupon.Content = styled.div`
  display: flex;
  flex-flow: row wrap;

  background: #fff;
  border: 2px solid #dadde2;
  border-radius: 5px;

  width: 100%;
  padding: 15px 30px;

  ${breakpoint('sx')`
    flex-flow: column nowrap;
    align-items: center;
  `}

  ${breakpoint('md')`
    height: 180px;
    flex-flow: column wrap;
    justify-content: flex-end;
    padding: 20px 48px 30px 48px;

    > div {
      width: 50%;
    }
  `}

  ${breakpoint('lg')`
    flex-flow: row nowrap;
    justify-content: center;
    align-items: center;
    margin: 0 10px;

    padding: 0;

    > div {
      width: calc(33% - 20px) !important;
    }
  `}

  ${breakpoint('xl')`
    justify-content: space-between;
    padding: 0 30px;
    margin: 0 10px;

    > div {
      width: calc(33% - 20px) !important;
    }
  `}
`;

TodaysFeaturedCoupon.LogoControlsWrapper = styled.div`
  display: flex;
  flex-flow: row wrap;
  width: 50%;
  margin: 8px 20px 0 0;

  > div {
    width: 200px;
    margin: 0 0 0 20px;
  }

  ${breakpoint('sx')`
    width: 100%;
    justify-content: center;
    margin: 0 0 20px 0;
  `}

  ${breakpoint('md')`
    flex-flow: column nowrap;
    justify-content: center;
    width: fit-content !important;
    margin: 0 100px 0 0;

    img {
      width: 50%;
      height: auto;
      margin-left: 20%;
    }
  `}

  ${breakpoint('lg')`
    flex-flow: row nowrap;
    justify-content: space-between;
    align-items: center;

    margin: 0 30px 0 0;
  `}
`;

TodaysFeaturedCoupon.Logo = styled.img`
  width: auto;
  height: 100px;
  max-width: 100%;

  margin-bottom: 8px;

  ${breakpoint('sx')`
    order: 2;
  `}

  ${breakpoint('md')`
    order: 0;
    height: 48px;
  `}

  ${breakpoint('lg')`
    width: 140px;
    height: 140px;
    object-fit: contain;
    margin: 0;
  `}
`;

TodaysFeaturedCoupon.Controls = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  color: #adb8c0;

  margin-right: 15px;

  > svg {
    width: 27px;
    height: 25px;
  }

  > svg:first-child {
    margin-right: 10px;
    color: ${({ isLiked }) => (isLiked ? 'red' : '#adb8c0')};
  }

  ${breakpoint('sx')`
    align-items: center;
    justify-content: flex-end;
    margin-right: 0;
    position: absolute;
    right: 20px;
  `}

  ${breakpoint('md')`
    position: relative;
    justify-content: center;
  `}

  ${breakpoint('lg')`
    flex-flow: row nowrap;
    margin: 0;
  `}
`;

TodaysFeaturedCoupon.OfferingWrapper = styled.div`
  display: flex;
  flex-flow: row wrap;

  width: calc(50% - 20px);

  ${breakpoint('sx')`
    width: 100%;
  `}

  ${breakpoint('xl')`
    width: fit-content;
  `}
`;

TodaysFeaturedCoupon.Offering = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;

  > span {
    white-space: nowrap;
  }

  > span:first-child {
    font-weight: bold;
    line-height: 35px;
    font-size: 30px;

    color: #374b5a;

    ${breakpoint('sx')`
      line-height: 41px;
      font-size: 35px;

      margin-right: 15px;
    `}

    ${breakpoint('md')`
      line-height: 57px;
      font-size: 48px;
    `}
  }

  > span:last-child {
    font-weight: bold;
    line-height: 15px;
    font-size: 13px;

    color: #374b5a;

    ${breakpoint('sx')`
      font-weight: bold;
      line-height: 31px;
      font-size: 18px;
      letter-spacing: 0.45px;
    `}

    ${breakpoint('md')`
      line-height: 21px;
      font-size: 18px;
    `}
  }

  ${breakpoint('sx')`
    flex-flow: row nowrap;
    justify-content: center;
    align-items: flex-end;
    width: 100%;
  `}

  ${breakpoint('md')`
    flex-flow: column nowrap;
    justify-content: flex-start;
    align-items: flex-start;
    width: 50%;
  `}
`;

TodaysFeaturedCoupon.DescriptionButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-flow: row wrap;

  > * {
    width: 100%;
  }

  ${breakpoint('md')`
    width: 100%;
  `}

  ${breakpoint('lg')`
    max-width: 300px;
  `}

  ${breakpoint('xl')`
    flex-flow: row nowrap;
    justify-content: space-between;
    max-width: 100%;

    flex: 2 1 50%;
  `}

  p {
    margin: 10px 0;
  }
`;

TodaysFeaturedCoupon.Description = styled.p`
  line-height: 17px;
  font-size: 13px;
  color: #899197;
  text-align: center;

  ${breakpoint('xs')`
    font-weight: normal;
    line-height: 23px;
    font-size: 16px;
    letter-spacing: 0.4px;
    white-space: wrap;
  `}

  ${breakpoint('md')`
    flex: 1 1 360px;
    text-align: start;
  `}

  ${breakpoint('xl')`
    flex: 1 1 50%;
  `}
`;

TodaysFeaturedCoupon.Button = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  background: #00cbe9;
  border: 1px solid #00b4cf;
  box-sizing: border-box;
  box-shadow: inset 0px 1px 2px rgba(255, 255, 255, 0.5),
    inset 0px -1px 5px rgba(0, 0, 0, 0.0584805),
    inset 0px -2px 0px rgba(255, 255, 255, 0.213315);
  border-radius: 4px;

  font-weight: bold;
  line-height: 20px;
  font-size: 17px;
  letter-spacing: 0.51px;
  color: #fff;

  padding: 13px 70px;

  transition: 0.2s;
  cursor: pointer;

  :hover {
    background: #00b4cf;
  }

  ${breakpoint('md')`
    flex: 1 1 360px;
    margin: 0;
  `}

  ${breakpoint('xl')`
    flex: 1 1 220px;
    white-space: nowrap;
    height: 60px;
    margin-left: 30px;
    margin-top: auto;
    margin-bottom: auto;
  `}
`;

export default withTranslation()(TodaysFeaturedCoupon);
