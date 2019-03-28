//@flow
import * as R from 'ramda';

import { FETCH_STORE_COUPONS } from './StoreCouponsActions';

export const STATE_KEY = 'storeCoupons';

type StoreCouponsState = {};

const initialState = {
  offers: [],
  store: {
    id: '',
    name: '',
    description: '',
    cashbackText: '',
    logoPath: '',
    saleCount: '',
    codeCount: '',
  },
  additionalInfo: [],
};

// const parseHtmlEnteties = str => {
//   return str.replace(/&#([0-9]{1,3});/gi, (match, numStr) => {
//     const num = parseInt(numStr, 10);
//     return String.fromCharCode(num);
//   });
// };

// span -> cashback
// p -> body
// h5 -> title
// \r\n -> new section

// const matchHTML = (x : string, tag : string) : string => R.pathOr('', [0], x.match(new RegExp(`(?<=(<${tag}>)).+(?=(</${tag}>))`)));

// const formatAdditionalInfo = R.curry(additionalInfo => {
//   return additionalInfo.map<Object>(([key, value]) => {
//     const title =  R.match(/(?<=_)[a-zA-Z]+(?=(_content|_body))/g)(key)[0];
//     const content = value.replace(/style=".+"/g, '').split('\\r\\n').map(x => {
//       const title = matchHTML(x, 'h5')
//       const content = matchHTML(x, 'p');
//       const bonus = matchHTML(x, 'span');

//       console.log('title', title);
//       console.log('content', content);
//       console.log('bonus', bonus);

//       return {
//         title,
//         content,
//         bonus,
//       }
//     })

//     return { title, content };
//   });
// });

const StoreCouponsReducer = (
  state: StoreCouponsState = initialState,
  action: Object,
) => {
  switch (action.type) {
    case `${FETCH_STORE_COUPONS}_SUCCESS`: {
      const offers = R.pathOr([], ['payload', 'data', 'offers_data'])(action);

      const store = R.compose(
        R.fromPairs,
        R.filter(
          ([key, value]) =>
            R.match(
              /stores?_(id|name|description|cashback_text|logo_image_path|sale_count|code_count)/g,
            )(key).length !== 0,
        ),
        R.toPairs,
        R.path(['payload', 'data']),
      )(action);

      const additionalInfo = R.compose(
        R.fromPairs,
        R.filter(([key, value]) => R.match(/body|content$/g)(key).length !== 0),
        R.toPairs,
        R.path(['payload', 'data']),
      )(action);

      const newState = {
        offers,
        store,
        additionalInfo,
      };

      return newState;
    }
    default: {
      return state;
    }
  }
};

export const getOffers = R.path<Object[]>([STATE_KEY, 'offers']);
export const getStore = R.path<Object>([STATE_KEY, 'store']);
export const getAdditionalInfo = R.path<Object[]>([
  STATE_KEY,
  'additionalInfo',
]);

export default StoreCouponsReducer;
