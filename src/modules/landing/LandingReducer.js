// @flow
import * as R from 'ramda';
import { FETCH_HOMEPAGE_FEATURE, FETCH_HOME_FEATURE } from './LandingActions';
import { stringElipsis } from './common/helpers';
import { getStoresWithDirectLinkSet } from '@config/Utils';

export type LandingReducerProps = {
  homePageFeaturedStore: Array<any>,
  featuredStores: Array<any>,
  paidPlacements: Array<any>,
  homePageFeature: Array<any>,
  topDeals: Array<any>,
  featuredCashback: Array<any>,
  amazonDeal: Array<any>,
};

export const STATE_KEY = 'landing';

const initialState: LandingReducerProps = {
  homePageFeaturedStore: [],
  featuredStores: [],
  paidPlacements: [],
  homePageFeature: [],
  topDeals: [],
  featuredCashback: [],
  amazonDeal: [],
};

const LandingReducer = (
  state: LandingReducerProps = initialState,
  action: Object,
) => {
  switch (action.type) {
    case `${FETCH_HOMEPAGE_FEATURE}_SUCCESS`: {
      const paid_placements: Object = {
        homepage_feature: R.pathOr(
          [],
          ['payload', 'data', 'paid_placements', 'homepage_feature'],
          action,
        ),
        top_deals: R.pathOr(
          [],
          ['payload', 'data', 'paid_placements', 'top_deals'],
          action,
        ),
        featured_cashback: R.pathOr(
          [],
          ['payload', 'data', 'paid_placements', 'featured_cashback'],
          action,
        ),
        featured_stores: R.pathOr(
          [],
          ['payload', 'data', 'paid_placements', 'featured_stores'],
          action,
        ),
        amazon_deal: R.pathOr(
          [],
          ['payload', 'data', 'paid_placements', 'amazon_deal'],
          action,
        ),
      };

      const storeIntOffers = {
        homepage_feature: 'link',
        top_deals: 'link',
        featured_stores: 'offer_link',
      };

      Object.entries(storeIntOffers).forEach(([storeProp, offerLink]) => {
        if (paid_placements[storeProp] instanceof Array) {
          paid_placements[storeProp] = getStoresWithDirectLinkSet(
            paid_placements[storeProp],
            offerLink,
          );
        }
      });

      const categories: Object = R.pathOr(
        [],
        ['payload', 'data', 'categories'],
        action,
      );

      const homepageFeatures = paid_placements.homepage_feature.map(item => {
        item['override_text'] = stringElipsis(item['override_text'], 45);
        item['store_name'] = stringElipsis(item['store_name'], 25);
        return item;
      });

      const mapTopDeal = paid_placements.top_deals.map(item => {
        const limit = item['was_price'] ? 7 : 10;
        item['override_text'] = stringElipsis(item['override_text'], 45);
        item['was_price'] = stringElipsis(item['was_price'], limit);
        item['secondary_text'] = stringElipsis(item['secondary_text'], limit);
        return item;
      });

      const mapFeaturedCashback = paid_placements.featured_cashback.map(
        item => {
          const cashback = parseFloat(item.cashback.replace(/[%$£€]/, ''));

          if (item.cashback.includes('$')) {
            item.cashback = `$${cashback}`;
          }

          if (item.cashback.includes('£')) {
            item.cashback = `£${cashback}`;
          }

          if (item.cashback.includes('€')) {
            item.cashback = `${cashback}€`;
          }

          if (item.cashback.includes('%')) {
            item.cashback = `${cashback}%`;
          }

          item['was_price'] = item['was_price'] || null;
          return item;
        },
      );

      const mapAmazonDeal = paid_placements.amazon_deal.map(item => {
        item['text_override'] = stringElipsis(item['text_override'], 90);
        item['secondary_text'] = stringElipsis(item['secondary_text'], 120);
        return item;
      });

      return R.compose(
        R.assoc<Object, Object>(
          'featured_stores',
          paid_placements.featured_stores,
        ),
        R.assoc<Object, Object>('homepage_feature', homepageFeatures),
        R.assoc<Object, Object>('top_deals', mapTopDeal),
        R.assoc<Object, Object>('featured_cashback', mapFeaturedCashback),
        R.assoc<Object, Object>('categories', categories),
        R.assoc<Object, Object>(
          'amazon_deal',
          mapAmazonDeal.length !== 0 ? mapAmazonDeal[0] : null,
        ),
      )(state);
    }

    case `${FETCH_HOME_FEATURE}_SUCCESS`: {
      const paid_placements: Object = R.pathOr(
        {
          featured_stores: [],
        },
        ['payload', 'data', 'paid_placements'],
        action,
      );

      return R.compose(
        R.assoc<Object, Object>(
          'featuredStores',
          paid_placements.featured_stores,
        ),
      )(state);
    }

    default: {
      return state;
    }
  }
};

export const getFeaturedStore = R.path<any>([STATE_KEY, 'featured_stores']);
export const getHomePageFeature = R.path<any>([STATE_KEY, 'homepage_feature']);
export const getTopDeals = R.path<any>([STATE_KEY, 'top_deals']);
export const getFeaturedCashback = R.path<any>([
  STATE_KEY,
  'featured_cashback',
]);
export const getAmazonDeal = R.path<any>([STATE_KEY, 'amazon_deal']);
export const getCategories = R.path<any>([STATE_KEY, 'categories']);
export const getHomeFeaturedStores = R.path<any>([STATE_KEY, 'featuredStores']);

export default LandingReducer;
