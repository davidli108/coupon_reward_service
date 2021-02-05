// @flow
import { memo } from 'react';
import { compose } from 'recompose';
import { connect } from 'react-redux';
import { withTranslation } from 'react-i18next';
import { withRouter } from 'react-router-dom';

import { getStore, getOffers } from '../../StoreCouponsReducer';
import * as authActions from '@modules/auth/AuthActions';
import BrandHeader from './BrandHeader';
import styles from './BrandHeader.styles';

export type BrandHeaderListItemType = {
  value: string,
  label: string,
};

export type BrandHeaderProps = {
  t: Function,
  store: any,
  offers: any[],
  counterList: BrandHeaderListItemType[],
};

styles(BrandHeader);

const mapStateToProps = state => ({
  store: getStore(state),
  offers: getOffers(state),
});

const mapDispatchToProps = {
  requestNonce: authActions.requestNonce,
};

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withTranslation(),
  withRouter,
  memo,
)(BrandHeader);
