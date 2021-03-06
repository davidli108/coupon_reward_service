// @flow
import type { TrackerProduct } from '../../pricetracker/components/PriceTrackerProduct/PriceTrackerProduct.type';

export type CashBackRate = {
  category_name: string,
  category_description: string,
  cta: string,
  int_url: string,
  image: string,
  cashback_rate: string,
  weight: number,
};

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
  discount_type: number,
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
  end_date: string,
  country: string,
};

export type Store = {
  store_id: string,
  store_name: string,
  store_description: string,
  store_cashback_text: string,
  store_logo_image_path: string,
  stores_sale_count: string,
  stores_code_count: string,
  store_info_link: string,
  store_discount: string,
  store_cashback_ok: string,
  store_country_code: string,
  store_numeric_type: number,
  offers_count: number,
  random_offers: Offer[],
  store_total_offers_count: string,
  categories: Object[],
  store_total_favorites: string,
  store_total_uses: string,
  store_total_savings: string,
  store_average_savings: string,
  terms: string | null,
};

export type StorePageProps = {
  t: Function,
  i18n: Object,
  store: Store,
  offers: Offer[],
  fetchStoreCoupons: ({ storeName: string }) => void,
  match: Object,
  fetchStoreCouponsByPagination: Function,
  offersCount: number,
  isExtensionInstalled: boolean,
  cashbackRates: CashBackRate[],
  terms: string,
  priceTrackerProduct: TrackerProduct,
};

export type BrandProps = {
  t: Function,
  match: Object,
  i18n: Object,
  coupon_code: string,
  offer_link: string,
  store_name: string,
  isAuthenticated: boolean,
  isExtensionInstalled: boolean,
  store_logo: string,
  store: Store,
  isLoaded: boolean,
  offersCount: number,
  reviews: string,
  extensionActive?: boolean,
  offersMenu: string,
  priceTracker: TrackerProduct,
};

export type BrandContentProps = {
  t?: Function,
  storeName?: string,
  stars?: number,
  reviewsCount?: string,
  offersCount: number,
};

export type BrandNeverOverpayProps = {
  t: Function,
  i18n: Object,
  storeName: string,
};

export type PiggyExtAdProps = {
  t: Function,
  match: Object,
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
  cashbackRates: CashBackRate[],
  selectedOfferType: string,
  selectedCategories: any[],
  isOffersLoading: boolean,
  selectedSort: Object,
  randomOffers: Offer[],
  openTerms: Function,
};

export type AdditionalInfoProps = {
  t: Function,
  additionalInfo: AdditionalInfo,
  store: Object,
  terms: string,
  selectedOfferType: string,
};

export type AdditionalInfoSectionProps = {
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

export type CashBackContentsProps = {
  t: Function,
  wZero: boolean,
  store: Object,
  cashbackRates: Array<CashBackRate>,
};

export type CashBackContentProps = {
  t: Function,
  store: Object,
  item: CashBackRate,
};

export type OffersMenuProps = {
  t: Function,
  offers: Offer[],
  storeName: string,
  activeItem: string,
  onChange: Function,
  hideCashBackRate: boolean,
};
