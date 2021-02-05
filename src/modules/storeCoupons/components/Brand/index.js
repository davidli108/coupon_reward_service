// @flow
import { memo } from 'react';
import { compose } from 'recompose';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { getStore } from '../../StoreCouponsReducer';

import Brand from './Brand';
import styles from './Brand.styles';

styles(Brand);

const mapStateToProps = state => ({
  store: getStore(state),
});

export default compose(connect(mapStateToProps, null), withRouter, memo)(Brand);
