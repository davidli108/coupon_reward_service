// @flow
export const namespace = 'LANDING';
export const FETCH_HOME_FEATURE = `${namespace}/FETCH_HOME_FEATURE`;

export const fetchHomePageFeature = () => ({
  type: FETCH_HOME_FEATURE,
  payload: {
    request: {
      url: `/api/home`,
    },
  },
});
