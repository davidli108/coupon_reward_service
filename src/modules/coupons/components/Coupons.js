//@flow
import * as React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import breakpoint from 'styled-components-breakpoint';

import Coupon from './Coupon';
import type { CouponsProps } from '../models/CouponsPage';
import { getFilteredDeals } from '../CouponsReducer';

const Coupons = ({ coupons }: CouponsProps) => {
  return (
    <Coupons.Wrapper>
      {coupons.map((coupon, index) => (
        <Coupon key={`coupon_${index}_${coupon.show_exp_date}`} {...coupon} />
      ))}
    </Coupons.Wrapper>
  );
};

Coupons.Wrapper = styled.div`
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

const mapStateToProps = state => ({
  coupons: getFilteredDeals(state),
});

const enhance = connect(mapStateToProps);

export default enhance(Coupons);
