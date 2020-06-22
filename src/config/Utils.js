// @flow

export const isAmazonStore = (storeName: string) =>
  storeName && storeName.match(/^amazon/i);

export const setDirectTrue = (link: string) =>
  !link.includes('direct=1') ? `${link}&direct=1` : link;

export const getStoresWithDirectLinkSet = (stores: Object, link: any) =>
  stores.map(store => ({
    ...store,
    [link]: setDirectTrue(store[link]),
  }));
