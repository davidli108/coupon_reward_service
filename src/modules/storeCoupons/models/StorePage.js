//@flow

export type Content = {
  title?: string,
  body: string,
  bonus?: string,
};

export type AdditionalInfo = {
  featured_store_shipping_content: string,
  featured_store_secrets_body: string,
  featured_store_returns_body: string,
};

export type Extension = {
  reviewsCount: string,
  stars: number,
};

export type StoreInformation = {
  title?: string,
  body?: string,
};

export type Store = {
  store_id: string,
  store_name: string,
  store_description: string,
  store_cashback_text: string,
  store_logo_image_path: string,
  stores_sale_count: string,
  stores_code_count: string,
  store_info_link: string;
};

export type Offer = {
  store_logo: string,
  store_page_link: string,
  store_id: string,
  discount: string,
  discount_print: string,
  coupon_code: string,
  offer_name: string,
  offer_id: string,
  discount_amt: string,
  discount_type: string,
  cashback_ok: string,
  offer_type: string,
  numeric_type: string,
  offer_image: string,
  offer_link: string,
  offer_text_short: string,
  offer_success: number,
  offer_success_print: string,
  show_exp_date: string,
  ref_text: string,
  facebook_link: string,
  twitter_link: string,
  pinterest_link: string,
};

export type SearchBarProps = {
  name: string,
  placeholder?: string,
};

export type StorePageProps = {
  store: Store,
  offers: Offer[],
  extension: Extension,
  additionalInfo: AdditionalInfo[],
  fetchStoreCoupons: ({ storeName: string }) => void,
  match: Object,
  state?: string,
  requestSearch: Function,
  storeSearchResult: Object,
  searchIsLoading: boolean,
  fetchStoreCouponsByPagination: Function,
  offersCount: number,
};

export type BrandProps = {
  store: Store,
  isLoaded: boolean,
  offersCount: number,
};

export type BrandContentProps = {
  storeName: string,
  stars: number,
  reviewsCount: string,
};

export type BrandHeaderProps = {
  t: Function,
  store: Store,
  offers: Offer[],
  offersCount: number,
};

export type BrandNeverOverpayProps = {
  t: Function,
  storeName: string,
};

export type PiggyExtAdProps = {
  t: Function,
  i18n: Object,
  stars: number,
  reviewsCount: string,
};

export type OffersProps = {
  t: Function,
  offers: Offer[],
  offersCount: number,
  fetchStoreCoupons: Function,
  storeName: string,
  store: Object,
};

export type AdditionalInfoProps = {
  t: Function,
  additionalInfo: AdditionalInfo,
  store: Object,
};

export type AdditionaInfoSectionProps = {
  title: string,
  content: Content[],
};

export type AdditionalInfoContentProps = {
  title?: string,
  body?: string,
  bonus?: string,
};

export type StoreInformationProps = {
  t: string => string,
  store: Store,
};
