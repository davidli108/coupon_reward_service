//@flow
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
  discount: string,
  ref_text: string,
  randomStore: Object,
};

export type Category = {
  title: string,
  value: string | number,
};

export type Categories = {
  categories: Category[],
  stores: Category[],
};

export type Deal = {
  t: string => string,
  store_logo: string,
  discount: number,
  discount_print: string,
  show_exp_date: string,
  isCoupon: boolean,
  isFavorite: boolean,
  category?: string,
  store_name?: string,
  offer_link: string,
  ref_text: string,
  offer_type: string,
};

export type StoreListProps = {
  t: string => string,
  stores: Store[],
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
  categories: Categories,
  coupons: Deal[],
};

export type CouponsReducerProps = {
  ...CouponsPageProps,
  dealsFilter: string,
  categoryFilter?: string,
};
