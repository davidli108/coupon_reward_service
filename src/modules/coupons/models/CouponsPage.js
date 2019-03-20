//@flow
export type FeaturedCoupon = {
  storeName: string,
  highestCashbackPercent?: number,
  discountPercent?: number,
  description?: string,
  isFavorited?: boolean,
};

export type Store = {
  cashback: number,
  logo: string,
};

export type Category = {
  title: string,
  value: string | number,
};

export type Categories = {
  categories: Category[],
  stores: Category[],
};

export type Coupon = {
  logo: string,
  discount: number,
  cashback: number,
  expDate: string,
};

export type StoreListProps = {
  stores: Store[],
};

export type ControlsProps = {
  filterBy: string,
  setFilter: string => void,
};

export type CategoriesItemProps = {
  title: string,
  value: string | number,
  setOpen?: boolean => void,
};

export type CategoriesMobileProps = {
  categories: [$Keys<Categories>, Array<Category>][],
};

export type ContentProps = {
  categories: Categories,
  coupons: Coupon[],
  loadMore: number => void,
};

export type CouponsProps = {
  coupons: Coupon[],
};

export type CategoriesProps = {
  categories: Category[],
  title: string,
};

export type CouponsPageProps = {
  featuredCoupon: FeaturedCoupon,
  stores: Store[],
  categories: Categories,
  coupons: Coupon[],
};
