//@flow
import * as R from 'ramda';
import * as React from 'react';
import styled from 'styled-components';
import breakpoint from 'styled-components-breakpoint';

import CouponLoader from './loaders/CouponLoader';
import Coupon from './Coupon';

type CouponsProps = {
  coupons: Object,
  isLoad: boolean,
};

const Coupons = ({ coupons, isLoad }: CouponsProps) => {
  return (
    <Coupons.Wrapper>
      {coupons && coupons.length !== 0 ? (
        <>
          {R.remove(0, 1, coupons).map((coupon, index) => (
            <Coupon
              key={`coupon_${index}_${coupon.show_exp_date}`}
              {...coupon}
            />
          ))}
          {isLoad &&
            Array.apply(null, Array(20)).map((_, ind) => (
              <CouponLoader key={`cl1_${ind}`} />
            ))}
        </>
      ) : coupons ? (
        Array.apply(null, Array(20)).map((_, ind) => (
          <CouponLoader key={`cl2_${ind}`} />
        ))
      ) : (
        ''
      )}
    </Coupons.Wrapper>
  );
};

Coupons.defaultProps = {
  isLoad: false,
};

Coupons.Wrapper = styled.div`
  width: 100%;
  min-height: 400px;
  display: flex;
  flex-flow: column nowrap;

  > div {
    width: 100%;
  }

  ${breakpoint('sx')`
    flex-flow: row wrap;
    justify-content: flex-start;

    > div {
      width: 47%;
      margin: 10px 1.3% 10px 0;
    }
  `}

  ${breakpoint('md')`
    > div {
      width: 47%;
      margin: 10px 0 10px 2.2%;
    }
  `}

  ${breakpoint('lg')`
    > div {
      width: 47%;
      margin: 10px 0 10px 1.8%;
    }
  `}

  ${breakpoint('xl')`
    > div {
      width: 31%;
      margin: 10px 0 10px 13px;
    }
  `}
`;

Coupons.Preloader = styled.div`
  width: 100%;
  position: absolute;
  margin-top: 200px;
  text-align: right;
`;

export default Coupons;
