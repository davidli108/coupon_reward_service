// @flow
export type TrackerProduct = {
  button_text: string,
  new_price: string,
  old_price: string,
  product_desc: string,
  product_image: string,
  product_name: string,
  url_redirect: string,
  has_tracker: boolean,
}

export type PriceTrackerProductType = {
  t: Function,
  match: Object,
  priceTrackerProduct: TrackerProduct
};
