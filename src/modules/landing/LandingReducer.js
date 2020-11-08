// @flow
import * as R from 'ramda';
import { FETCH_HOME_FEATURE } from './LandingActions';
import { stringElipsis } from './common/helpers';
import { getStoresWithDirectLinkSet } from '@config/Utils';

export type LandingReducerProps = {
  homepage_feature: any[],
  featured_stores: any[],
  top_deals: any[],
  featured_cashback: any[],
  amazon_deal: any[],
  homepage_setting: string,
  isLoaded: boolean,
};

export const STATE_KEY = 'landing';

const initialState: LandingReducerProps = {
  homepage_feature: [],
  featured_stores: [],
  top_deals: [],
  featured_cashback: [],
  amazon_deal: [],
  homepage_setting: '',
  isLoaded: false,
};

const LandingReducer = (
  state: LandingReducerProps = initialState,
  action: Object,
) => {
  switch (action.type) {
    case `${FETCH_HOME_FEATURE}_SUCCESS`: {
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

      const homepageSetting = R.pathOr(
        '',
        ['payload', 'data', 'homepage_setting'],
        action,
      );

      return {
        ...state,
        featured_stores: paid_placements.featured_stores,
        homepage_feature: paid_placements.homepage_feature,
        top_deals: mapTopDeal,
        featured_cashback: mapFeaturedCashback,
        categories: categories,
        amazon_deal: mapAmazonDeal.length !== 0 ? mapAmazonDeal[0] : null,
        homepage_setting: homepageSetting,
        isLoaded: true,
      };
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
export const getHomeFeaturedStores = R.path<any>([
  STATE_KEY,
  'featured_stores',
]);
export const getIsLoaded = R.path<any>([STATE_KEY, 'isLoaded']);
export const getHomePageSetting = R.path<any>([STATE_KEY, 'homepage_setting']);

export default LandingReducer;
