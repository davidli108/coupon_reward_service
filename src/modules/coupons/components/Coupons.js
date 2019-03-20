//@flow
import * as React from 'react';
import styled from 'styled-components';

import Coupon from './Coupon';

import type { CouponsProps } from '../models/CouponsPage';

const Coupons = ({ coupons }: CouponsProps) => {
  return (
    <Coupons.Wrapper>
      {coupons.map((coupon, index) => (
        <Coupon key={`coupon_${index}_${coupon.expDate}`} {...coupon} />
      ))}
    </Coupons.Wrapper>
  );
};

Coupons.Wrapper = styled.div`
  display: flex;
  flex-flow: column nowrap;
`;

export default Coupons;
