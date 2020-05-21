// @flow

export const stringElipsis = (s: string, n: number): string => {
  return s ? s.length > n ? s.substr(0, n) + '...' : s : ''
};
