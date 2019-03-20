//@flow
import * as React from 'react';
import styled from 'styled-components';
import breakpoint from 'styled-components-breakpoint';

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

  ${breakpoint('sx')`
    flex-flow: row wrap;
    justify-content: space-between;

    > div {
      width: calc(50% - 16px);
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

export default Coupons;
