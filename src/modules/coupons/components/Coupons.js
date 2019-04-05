//@flow
import * as React from 'react';
import styled from 'styled-components';
import breakpoint from 'styled-components-breakpoint';

import preloader from '../assets/preloader.svg';
import Coupon from './Coupon';

type CouponsProps = {
  coupons: Object,
};

const Coupons = ({ coupons }: CouponsProps) => {
  return (
    <Coupons.Wrapper>
      {coupons && coupons.length !== 0 ? (
        coupons.map((coupon, index) => (
          <Coupon key={`coupon_${index}_${coupon.show_exp_date}`} {...coupon} />
        ))
      ) : coupons ? (
        <Coupons.Preloader>
          <img src={preloader} alt="" />
        </Coupons.Preloader>
      ) : (
        ''
      )}
    </Coupons.Wrapper>
  );
};

Coupons.Wrapper = styled.div`
  min-height: 400px;
  display: flex;
  flex-flow: column nowrap;

  ${breakpoint('sx')`
    flex-flow: row wrap;
    justify-content: flex-start;

    > div {
      width: calc(50% - 16px);
      margin-right: 16px;
    }
  `}

  ${breakpoint('lg')`
    > div {
      width: calc(50% - 30px);
    }
  `}

  ${breakpoint('xl')`
    > div {
      width: calc(33% - 30px);
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
