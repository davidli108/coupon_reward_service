// @flow
import type { Location } from 'react-router-dom';

import { FULL_SIZE_ROUTE } from '../models/full-size-routes';

export const isFullSizeRoute = (location: Location) =>
  FULL_SIZE_ROUTE.map(route => route.test(location.pathname)).some(v => v);
