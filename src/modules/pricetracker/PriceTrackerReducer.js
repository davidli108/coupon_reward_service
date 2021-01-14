// @flow
import { FETCH_STOP_TRACKER, FETCH_UNSUBSCRIBE } from './PriceTrackerActions';
import * as R from 'ramda';
import { stringElipsis } from '../landing/common/helpers';

export type PriceTrackerReducerProps = {
  products: Array<any>,
};

export const STATE_KEY = 'pricetracker';

const initialState: PriceTrackerReducerProps = {
  products: [],
};

const PriceTrackerReducer = (
  state: PriceTrackerReducerProps = initialState,
  action: Object,
) => {
  switch (action.type) {
    case `${FETCH_UNSUBSCRIBE}_SUCCESS`: {
      const unsubsProduct: Object = R.pathOr(
        [],
        ['payload', 'data', 'products'],
        action,
      );

      const products = unsubsProduct.map(item => {
        item['product_name'] = stringElipsis(item['product_name'], 65);
        item['product_short_desc'] = stringElipsis(
          item['product_short_desc'],
          65,
        );
        return item;
      });

      return R.compose(R.assoc<Object, Object>('products', products))(state);
    }
    case `${FETCH_STOP_TRACKER}_SUCCESS`: {
      const stopProduct: Object = R.pathOr(
        [],
        ['payload', 'data', 'products'],
        action,
      );

      const products = stopProduct.map(item => {
        item['product_name'] = stringElipsis(item['product_name'], 65);
        item['product_short_desc'] = stringElipsis(
          item['product_short_desc'],
          65,
        );
        return item;
      });

      return R.compose(R.assoc<Object, Object>('products', products))(state);
    }
    default: {
      return state;
    }
  }
};

export const getProducts = R.path<any>([STATE_KEY, 'products']);

export default PriceTrackerReducer;
