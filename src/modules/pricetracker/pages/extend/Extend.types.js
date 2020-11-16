// @flow

export type ExtendProps = {
  t: Function,
  match: Object,
  fetchUserTracker: (token: string) => Promise<void>,
};
