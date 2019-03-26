// @flow
export type Store = {
  store_name: string,
  discount_print: string,
  offer_success_print: string,
  offer_id: string,
  store_logo: string,
  store_page_link: string,
};

export type Feature = {
  store_name: string,
  cashback_text: string,
  offer_img: string,
  offer_link: string,
  offer_id: string,
  store_id: string,
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
