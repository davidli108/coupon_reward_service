// @flow
export const namespace = 'LANDING';
export const FETCH_HOMEPAGE_FEATURE = `${namespace}/FETCH_HOMEPAGE_FEATURE`;
export const FETCH_HOME_FEATURE = `${namespace}/FETCH_HOME_FEATURE`;

export const fetchHomePageFeature = (type: string) => ({
  type,
  payload: {
    request: {
      url: `/api/home`,
    },
  },
});
