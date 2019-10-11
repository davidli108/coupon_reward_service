// @flow
export type FeaturedCoupon = {
  storeName: string,
  highestCashbackPercent?: ?number,
  discountPercent?: ?number,
  description?: string,
  isFavorited?: boolean,
};

export type Store = {
  offer_id: string,
  offer_link: string,
  store_logo: string,
  store_name: string,
  discount_print: string,
  discount_amt: string,
  discount_type: number,
  discount: string,
  ref_text: string,
  randomStore: Object,
  offer_text_short: string,
  offer_name: string,
  store_page_link: string,
  store_id: any,
  twitter_link: string,
  pinterest_link: string,
  coupon_code?: string,
  cashback_ok: number,
  numeric_type: number,
  noCashBack: boolean,
  text_override: boolean,
  country: string,
};

export type Category = {
  name: string,
  shortName: string,
};

export type CategoryStores = {
  name: string,
  short_name: string,
};

export type PaidStores = {
  name: string,
  shortName: string,
};
export type Categories = {
  categories: Category[],
  stores: CategoryStores[],
  paidStores: PaidStores[],
};

export type Deal = {
  t: Function,
  i18n: Object,
  store_logo: string,
  discount: number,
  discount_print: string,
  discount_amt: string,
  discount_type: number,
  show_exp_date: string,
  isCoupon: boolean,
  isFavorite: boolean,
  category?: string,
  store_name?: string,
  offer_link: string,
  ref_text: string,
  offer_type: string,
  coupon_code: string,
  numeric_type: number,
  no_cashback: boolean,
  store_page_link: string,
  twitter_link: string,
  pinterest_link: string,
  isAuthenticated: boolean,
  isExtensionInstalled: boolean,
  cashback_ok: number,
  country: string,
};

export type featuredStore = {
  store_id: string,
  store_name: string,
  offer_link: string,
  offer_img: string,
  short_name: string,
  cashback_text: string,
};

export type StoreListProps = {
  t: string => string,
  stores: featuredStore[],
};

export type ControlsProps = {
  filterBy: string,
  setFilter: string => void,
};

export type CategoriesItemProps = {
  t: string => string,
  deals: Deal[],
  title: string,
  value?: string | number,
  setOpen?: boolean => void,
  onClick: any => any,
  sectionTitle: string,
  filters: string[],
  setCheckedItem: string => void,
  isActive: boolean,
};

export type CategoriesMobileProps = {
  categories: [$Keys<Categories>, Array<Category>][],
};

export type ContentProps = {
  t: Function,
  categories: Categories,
  coupons: Deal[],
  loadMore: number => Promise<number>,
  getFilteredDeals: Object,
};

export type CouponsProps = {
  coupons: Deal[],
};

export type CategoriesProps = {
  categories: Category[],
  title: string,
  setCategoryFilter: string => void,
};

export type CouponsPageProps = {
  featuredCoupon: FeaturedCoupon,
  stores: Store[],
  categories: Categories | {},
  coupons: Deal[],
};

export type CouponsReducerProps = {
  ...CouponsPageProps,
  dealsFilter: string,
  categoryFilter?: string,
};
