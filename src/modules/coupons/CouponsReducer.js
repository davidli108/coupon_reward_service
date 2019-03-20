//@flow
import * as R from 'ramda';

import type {
  CouponsReducerProps,
  FeaturedCoupon,
  Store,
  Deal,
  Categories,
} from './models/CouponsPage';

import { LOAD_MORE, SET_DEALS_FILTER, SET_FILTER_TYPE } from './CouponsActions';

export const STATE_KEY = 'coupons';

const initialState: CouponsReducerProps = {
  dealsFilter: 'allDeals',
  categoriesFilter: null,
  storesFilter: null,
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
      { title: 'Macy`s', value: 12 },
      { title: 'Sears', value: 13 },
      { title: 'Udemy', value: 14 },
      { title: 'Verizon', value: 15 },
      { title: 'Wallgreens', value: 16 },
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
      category: 'accessories',
      storeName: 'wallgreens',
    },
    {
      logo: 'https://logo.clearbit.com/ew.com',
      discount: 5,
      cashback: 15,
      expDate: '01/02/2019',
      isCoupon: false,
      isFavorite: false,
      category: 'accessories',
      storeName: 'wallgreens',
    },
    {
      logo: 'https://logo.clearbit.com/hgtv.com',
      discount: 5,
      cashback: 15,
      expDate: '01/02/2019',
      isCoupons: false,
      isFavorite: true,
      category: 'automotive',
      storeName: 'macys',
    },
    {
      logo: 'https://logo.clearbit.com/bc.edu',
      discount: 5,
      cashback: 15,
      expDate: '01/02/2019',
      isCoupons: true,
      isFavorite: true,
      category: 'automotive',
    },
    {
      logo: 'https://logo.clearbit.com/sportingnews.com',
      discount: 5,
      cashback: 15,
      expDate: '01/02/2019',
      isCoupons: true,
      isFavorite: false,
      category: 'computers',
    },
    {
      logo: 'https://logo.clearbit.com/bgr.com',
      discount: 5,
      cashback: 15,
      expDate: '01/02/2019',
      isCoupons: false,
      isFavorite: false,
      category: 'departmentStores',
    },
    {
      logo: 'https://logo.clearbit.com/xhamster.com',
      discount: 5,
      cashback: 15,
      expDate: '01/02/2019',
      isCoupon: true,
      isFavorite: true,
      category: 'departmentStores',
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

  const categories = [
    'departmentStores',
    'computers',
    'baby',
    'beauty',
    'booksMedia',
    'businessOffice',
    'cellPhones',
    'computers',
    'clothing',
  ];

  const storeNames = ['macys', 'sears', 'udemy', 'verizon', 'wallgreens'];

  const logo = logos[generateRandomNumber(logos.length - 1)];
  const discount = generateRandomNumber();
  const cashback = generateRandomNumber();
  const expDate = `${generateRandomNumber(12)}/${generateRandomNumber(
    30,
  )}/${generateRandomNumber(3000)}}`;

  const category = categories[generateRandomNumber(categories.length - 1)];
  const storeName = storeNames[generateRandomNumber(categories.length - 1)];

  const isFavorite = Math.random() > 0.5;
  const isCoupon = Math.random() > 0.5;

  return {
    logo,
    discount,
    cashback,
    expDate,
    isFavorite,
    isCoupon,
    category,
    storeName,
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
    case SET_DEALS_FILTER: {
      return R.assoc<Object, Object>(
        'dealsFilter',
        R.path(['payload'], action),
      )(state);
    }
    case SET_FILTER_TYPE: {
      const [filterType, filterValue] = R.path(['payload'], action).split('_');

      return R.assoc<Object, Object>(`${filterType}Filter`, filterValue, state);
    }

    default: {
      return state;
    }
  }
};

const filterByControls = state => x => {
  return x.filter(y => {
    switch (getDealsFilter(state)) {
      case 'allDeals': {
        return true;
      }
      case 'onlyCoupons': {
        return y.isCoupon;
      }
      case 'favoriteStores': {
        return y.isFavorite;
      }
      default: {
        return false;
      }
    }
  });
};

export const getFeaturedCoupon = R.path<FeaturedCoupon>([
  STATE_KEY,
  'featuredCoupon',
]);
export const getStores = R.path<Store[]>([STATE_KEY, 'stores']);
export const getCategories = R.path<Categories>([STATE_KEY, 'categories']);
export const getDeals = R.path<Deal[]>([STATE_KEY, 'deals']);
export const getDealsFilter = R.path<string>([STATE_KEY, 'dealsFilter']);
export const getCategoryFilter = R.path<string>([
  STATE_KEY,
  'categoriesFilter',
]);
export const getStoresFilter = R.path<string>([STATE_KEY, 'storesFilter']);

const filterByCategory = state => x =>
  getCategoryFilter(state)
    ? x.filter<Deal[]>(y => y.category === getCategoryFilter(state))
    : x;

const filterByStores = state => x =>
  getStoresFilter(state)
    ? x.filter<Deal[]>(y => y.storeName === getStoresFilter(state))
    : x;

export const getFilteredDeals = (state: Object) => {
  const filter = R.compose(
    filterByStores(state),
    filterByCategory(state),
    filterByControls(state),
  );

  return R.compose(
    filter,
    getDeals,
  )(state);
};

export default CouponsReducer;
