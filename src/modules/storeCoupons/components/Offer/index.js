// @flow
import { memo } from 'react';
import { withTranslation } from 'react-i18next';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { compose } from 'recompose';

import Offer from './Offer';

export type OfferProps = {
  t: Function,
  i18n: Object,
  coupon_code: string,
  offer_link: string,
  discount_type: number,
  discount_amt: string,
  offer_name: string,
  offer_description: string,
  offer_type: string,
  store_logo: string,
  store_name: string,
  end_date: string,
  isAuthenticated: boolean,
  isExtensionInstalled: boolean,
  country: string,
  isCashbackRate?: boolean,
  store: Object,
  randomOffer?: boolean,
  selectedOfferType?: boolean,
  openTerms: Function,
};

const mapStateToProps = ({
  app: { isExtensionInstalled },
  auth: { isAuthenticated },
  storeCoupons: { store },
}) => ({
  isAuthenticated,
  isExtensionInstalled,
  store,
});

export default compose(
  connect(mapStateToProps, null),
  withTranslation(),
  withRouter,
  memo,
)(Offer);
