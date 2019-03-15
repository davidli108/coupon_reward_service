//@flow
import * as React from 'react';

import Offer from './Offer';
import type { OffersProps } from '../models/StorePage';

const Offers = ({ offers }: OffersProps) => {
  return offers.map<React.Node>(x => (
    <Offer key={`${x.title}_${x.usesToday || ''}`} {...x} />
  ));
};

export default Offers;
