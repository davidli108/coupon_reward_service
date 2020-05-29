// @flow

export const isAmazonStore = (storeName: string) =>
  storeName && storeName.match(/^amazon/i);
