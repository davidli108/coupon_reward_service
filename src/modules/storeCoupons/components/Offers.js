//@flow
import * as React from 'react';
import { connect } from 'react-redux';
import { getOffers } from '../StoreCouponsReducer';

import Offer from './Offer';
import type { OffersProps } from '../models/StorePage';

const Offers = ({ offers }: OffersProps) => {
  return offers.map<React.Node>(x => (
    <Offer key={`offer_${x.offer_id}`} {...x} />
  ));
};

const mapStateToProps = state => ({
  offers: getOffers(state),
});

const enhance = connect(mapStateToProps);

export default enhance(Offers);
