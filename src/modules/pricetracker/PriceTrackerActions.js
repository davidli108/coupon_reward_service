// @flow
export const namespace = 'PRICETRACKER';
export const FETCH_EXTEND = `${namespace}/FETCH_EXTEND`;
export const FETCH_UNSUBSCRIBE = `${namespace}/FETCH_UNSUBSCRIBE`;
export const FETCH_STOP_TRACKER = `${namespace}/FETCH_STOP_TRACKER`;

export const fetchUserTracker = (token: string) => ({
  type: FETCH_EXTEND,
  payload: {
    request: {
      url: '/api/extendpricetracker/' + token,
    },
  },
});

export const fetchUnsubscribeTracker = (token: string, u: string) => ({
  type: FETCH_UNSUBSCRIBE,
  payload: {
    request: {
      url: '/api/pricetracker/unsubscribe/' + token + '?u=' + u,
    },
  },
});

export const fetchStopTracker = (token: string, u: string) => ({
  type: FETCH_STOP_TRACKER,
  payload: {
    request: {
      url: '/api/pricetracker/stoptracker/' + token + '?u=' + u,
    },
  },
});
