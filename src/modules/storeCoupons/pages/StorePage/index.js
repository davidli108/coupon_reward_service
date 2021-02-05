// @flow
import { compose } from 'recompose';
import { withRouter } from 'react-router-dom';
import { withTranslation } from 'react-i18next';
import { connect } from 'react-redux';

import {
  getCashbackRates,
  getCountOffers,
  getFetchingState,
  getOffers,
  getReviews,
  getStore,
  getStoreSearch,
  getTerms,
  searchIsLoading,
} from '../../StoreCouponsReducer';
import {
  getFilteredList,
  getIsExtensionInstalled,
} from '@modules/app/AppReducer';
import * as actions from '../../StoreCouponsActions';
import StorePage from './StorePage';
import styles from './StorePage.styles';

const mapStateToProps = state => ({
  state: getFetchingState(state),
  offers: getOffers(state),
  storeSearchResult: getStoreSearch(state),
  searchIsLoading: searchIsLoading(state),
  offersCount: getCountOffers(state),
  store: getStore(state),
  reviews: getReviews(state),
  getFilteredList: getFilteredList(state),
  isExtensionInstalled: getIsExtensionInstalled(state),
  cashbackRates: getCashbackRates(state),
  terms: getTerms(state),
});

styles(StorePage);

const mapDispatchToProps = {
  fetchStoreCoupons: actions.fetchStoreCoupons,
  requestSearch: actions.requestSearch,
  fetchStoreCouponsByPagination: actions.fetchStoreCouponsByPagination,
};

export default compose(
  withRouter,
  withTranslation(),
  connect(mapStateToProps, mapDispatchToProps),
)(StorePage);
