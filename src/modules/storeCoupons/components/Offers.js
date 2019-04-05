//@flow
import * as React from 'react';

import Offer from './Offer';
import type { OffersProps } from '../models/StorePage';

const Offers = ({ offers }: OffersProps) => {
  console.log(offers);
  return offers.map<React.Node>(x => (
    <Offer key={`offer_${x.offer_id}`} {...x} />
  ));
};

export default Offers;
