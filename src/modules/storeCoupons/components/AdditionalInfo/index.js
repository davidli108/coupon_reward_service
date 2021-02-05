// @flow
import { memo } from 'react';
import { compose } from 'recompose';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { withTranslation } from 'react-i18next';

import AdditionalInfo from './AdditionalInfo';
import {
  getAdditionalInfo,
  getCashbackRates,
  getStore,
} from '../../StoreCouponsReducer';
import styles from './AdditionalInfo.styles';

styles(AdditionalInfo);

const mapStateToProps = state => ({
  additionalInfo: getAdditionalInfo(state),
  store: getStore(state),
  cashbackRates: getCashbackRates(state),
});

export default compose(
  connect(mapStateToProps, null),
  withTranslation(),
  withRouter,
  memo,
)(AdditionalInfo);
