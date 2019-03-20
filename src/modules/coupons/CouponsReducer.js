//@flow
import * as R from 'ramda';

import type {
  CouponsReducerProps,
  FeaturedCoupon,
  Store,
  Deal,
  Categories,
} from './models/CouponsPage';

import { LOAD_MORE, SET_FILTER } from './CouponsActions';

export const STATE_KEY = 'coupons';

const initialState: CouponsReducerProps = {
  filterBy: 'allDeals',
  featuredCoupon: {
    storeName: 'Macy',
    highestCashbackPercent: 4,
    discountPercent: 20,
    description: `Sports Shoes - For all the unstoppable man looking for adventure.`,
    isFavorited: false,
  },
  stores: [
    {
      logo: 'https://logo.clearbit.com/sportingnews.com',
      cashback: 3,
    },
    {
      logo: 'https://logo.clearbit.com/zx-ventures.com',
      cashback: 4,
    },
    {
      logo: 'https://logo.clearbit.com/bc.edu',
      cashback: 6,
    },
    {
      logo: 'https://logo.clearbit.com/bgr.com',
      cashback: 99,
    },
    {
      logo: 'https://logo.clearbit.com/hgtv.com',
      cashback: 34,
    },
    {
      logo: 'https://logo.clearbit.com/ew.com',
      cashback: 21,
    },
    {
      logo: 'https://logo.clearbit.com/xhamster.com',
      cashback: 23,
    },
  ],
  categories: {
    categories: [
      { title: 'Accessories', value: 122 },
      { title: 'Automotive', value: 1222 },
      { title: 'Baby', value: 123 },
      { title: 'Beauty', value: 34 },
      { title: 'Books & Media', value: 58 },
      { title: 'Business & Office', value: 0 },
      { title: 'Cell Phones', value: 54 },
      { title: 'Clothing', value: 212 },
      { title: 'Computers', value: 39 },
      { title: 'Department Stores', value: 74 },
    ],
    stores: [
      { title: 'MACY´S', value: 12 },
      { title: 'SEARS', value: 13 },
      { title: 'UDEMY', value: 14 },
      { title: 'VERIZON', value: 15 },
      { title: 'WALLGREENS', value: 16 },
      { title: 'MACY´S', value: 17 },
      { title: 'SEARS', value: 18 },
      { title: 'UDEMY', value: 19 },
      { title: 'VERIZON', value: 10 },
    ],
  },

  deals: [
    {
      logo: 'https://logo.clearbit.com/xhamster.com',
      discount: 5,
      cashback: 15,
      expDate: '01/02/2019',
      isCoupon: true,
      isFavorite: true,
    },
    {
      logo: 'https://logo.clearbit.com/ew.com',
      discount: 5,
      cashback: 15,
      expDate: '01/02/2019',
      isCoupon: false,
      isFavorite: false,
    },
    {
      logo: 'https://logo.clearbit.com/hgtv.com',
      discount: 5,
      cashback: 15,
      expDate: '01/02/2019',
      isCoupons: false,
      isFavorite: true,
    },
    {
      logo: 'https://logo.clearbit.com/bc.edu',
      discount: 5,
      cashback: 15,
      expDate: '01/02/2019',
      isCoupons: true,
      isFavorite: true,
    },
    {
      logo: 'https://logo.clearbit.com/sportingnews.com',
      discount: 5,
      cashback: 15,
      expDate: '01/02/2019',
      isCoupons: true,
      isFavorite: false,
    },
    {
      logo: 'https://logo.clearbit.com/bgr.com',
      discount: 5,
      cashback: 15,
      expDate: '01/02/2019',
      isCoupons: false,
      isFavorite: false,
    },
    {
      logo: 'https://logo.clearbit.com/xhamster.com',
      discount: 5,
      cashback: 15,
      expDate: '01/02/2019',
      isCoupon: true,
      isFavorite: true,
    },
  ],
};

const generateRandomNumber = (max = 100) =>
  Math.floor(Math.random() * Math.floor(max));

const generateRandomCoupon = () => {
  const logos = [
    'https://logo.clearbit.com/adobe.com',
    'https://logo.clearbit.com/salesforce.com',
    'https://logo.clearbit.com/walmart.com',
    'https://logo.clearbit.com/ebay.com',
    'https://logo.clearbit.com/discordapp.com',
    'https://logo.clearbit.com/zillow.com',
    'https://logo.clearbit.com/pinterest.com',
    'https://logo.clearbit.com/webex.com',
    'https://logo.clearbit.com/microsoft.com',
    'https://logo.clearbit.com/ew.com',
    'https://logo.clearbit.com/trello.com',
    'https://logo.clearbit.com/xhamster.com',
  ];
  const logo = logos[generateRandomNumber(logos.length - 1)];
  const discount = generateRandomNumber();
  const cashback = generateRandomNumber();
  const expDate = `${generateRandomNumber(12)}/${generateRandomNumber(
    30,
  )}/${generateRandomNumber(3000)}}`;
  const isFavorite = Math.random() > 0.5;
  const isCoupon = Math.random() > 0.5;

  return {
    logo,
    discount,
    cashback,
    expDate,
    isFavorite,
    isCoupon,
  };
};

const generateRandomCoupons = quantity => {
  return R.repeat('hi', quantity).map(() => generateRandomCoupon());
};

const CouponsReducer = (
  state: CouponsReducerProps = initialState,
  action: Object,
) => {
  switch (action.type) {
    case LOAD_MORE: {
      return R.assoc<Object, Object>(
        'deals',
        [
          //$FlowFixMe
          ...R.path<Deal[]>(['deals'])(state),
          ...generateRandomCoupons(action.payload),
        ],
        state,
      );
    }

    case SET_FILTER: {
      return R.assoc<Object, Object>('filterBy', R.path(['payload'], action))(
        state,
      );
    }

    default: {
      return state;
    }
  }
};

const filterDeals = (x, filterBy) => {
  switch (filterBy) {
    case 'allDeals': {
      return true;
    }
    case 'onlyCoupons': {
      return x.isCoupon;
    }
    case 'favoriteStores': {
      return x.isFavorite;
    }
    default: {
      return false;
    }
  }
};

export const getFeaturedCoupon = R.path<FeaturedCoupon>([
  STATE_KEY,
  'featuredCoupon',
]);
export const getStores = R.path<Store[]>([STATE_KEY, 'stores']);
export const getCategories = R.path<Categories>([STATE_KEY, 'categories']);
export const getDeals = R.path<Deal[]>([STATE_KEY, 'deals']);
export const getFilter = R.path<string>([STATE_KEY, 'filterBy']);
export const getFilteredDeals = (state: Object) => {
  return R.compose(
    R.filter(x => filterDeals(x, getFilter(state))),
    getDeals,
  )(state);
};

export default CouponsReducer;
