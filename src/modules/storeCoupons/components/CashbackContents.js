// @flow
import * as React from 'react';
import styled from 'styled-components';
import type { CashBackContentsProps } from '../models/StorePage';
import CashbackContent from './CashbackContent';
import { getSortedCashbackRate } from './constant';

const CashbackContents = ({
  t,
  cashbackRates,
  wZero,
  store,
}: CashBackContentsProps) => {
  const sortedCashBackRate = getSortedCashbackRate(cashbackRates, wZero);
  const checkForCashBack = v => {
    if ((wZero && v.weight === '0') || (!wZero && v.weight !== '0')) {
      return <CashbackContent t={t} store={store} item={v} />;
    }
  };

  return (
    <CashbackContents.Content>
      {sortedCashBackRate.map(v => checkForCashBack(v))}
    </CashbackContents.Content>
  );
};

CashbackContents.Content = styled.div`
  width: 100%;
  margin-top: 16px;
`;

export default CashbackContents;
