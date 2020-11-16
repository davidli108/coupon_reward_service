// @flow

export type ExtendProps = {
  t: Function,
  match: Object,
  fetchUserTracker: (token: string) => Promise<void>,
};

export type UnsubscribeProps = {
  t: Function,
  match: Object,
  products: Array<any>,
  fetchUnsubscribeTracker: (token: string, u: string) => Promise<void>,
};

export type StopTrackerProps = {
  t: Function,
  match: Object,
  products: Array<any>,
  fetchStopTracker: (token: string, u: string) => Promise<void>,
};
