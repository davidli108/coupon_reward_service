// @flow

export type Store = {
  name: string,
  newStore: boolean,
  offer: string,
  deals: number,
  logo: string,
  url: string,
  couponActive: boolean,
  isFeatured: boolean,
  category: string,
};

export type Categories = {
  title: string,
  number: number,
};

export const CATEGORIES = {
  ACCESSORIES: 'Accessories',
  BEAUTY: 'Beauty',
  CLOTHING: 'Clothing',
};
