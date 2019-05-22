// @flow
export const namespace = 'FAVORITES';
export const FETCH_FAVORITES = `${namespace}/FETCH_FAVORITES`;
export const ADD_FAVORITE = `${namespace}/ADD_FAVORITE`;
export const REMOVE_FAVORITE = `${namespace}/REMOVE_FAVORITE`;

export const fetchFavorites = () => ({
  type: FETCH_FAVORITES,
  payload: {
    request: {
      url: '/api/favorites',
    },
  },
});

export const addFavorite = (storeId: any) => ({
  type: ADD_FAVORITE,
  payload: {
    storeId,
    request: {
      url: '/api/add-favorite',
      method: 'POST',
      data: `store_id=${storeId}`,
      headers: {
        Accept: '*/*',
        'Content-Type': 'application/x-www-form-urlencoded',
        'x-requested-with': 'XMLHttpRequest',
      },
    },
  },
});

export const removeFavorite = (storeId: any) => ({
  type: REMOVE_FAVORITE,
  payload: {
    storeId,
    request: {
      url: '/api/del-favorite',
      method: 'DELETE',
      data: `store_id=${storeId}`,
      headers: {
        Accept: '*/*',
        'Content-Type': 'application/x-www-form-urlencoded',
        'x-requested-with': 'XMLHttpRequest',
      },
    },
  },
});
