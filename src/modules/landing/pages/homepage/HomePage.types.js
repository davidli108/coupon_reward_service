// @flow
type Amazon = {
  img: string,
  text_override: string,
  secondary_text: string,
  link: string,
};
export type HomePageCarouselProps = {
  homePageFeaturedStore: any[],
  featuredStore: any[],
  isLoaded: boolean,
  storesData: Object,
  handler: Function,
  t: Function,
};

export type HomePageTopDealsProps = {
  stores: any[],
  isLoaded: boolean,
  handler: Function,
  t: Function,
};

export type HomePageFeaturedDealProps = {
  stores: Amazon,
  isLoaded: boolean,
  handler: Function,
  t: Function,
};

export type HomePageFeaturedCashBackProps = {
  stores: any[],
  isLoaded: boolean,
  handler: Function,
  t: Function,
  i18n: Object,
};

export type HomePageProps = {
  t: Function,
  location: Object,
  topDeals: any[],
  homePageFeaturedStore: any[],
  featuredStore: any[],
  featuredSCashback: any[],
  amazonDeal: any[],
  categories: any[],
  fetchHomePageFeature: () => Promise<Object>,
  isAuthenticated: boolean,
  isExtensionInstalled: boolean,
  visible: boolean,
  isLoaded: boolean,
  homePageSetting: string,
  isLandingMounted?: boolean,
};

export type HomePageCategoriesProps = {
  t: Function,
  categories: any[],
  isLoaded: boolean,
};

export type HomePageExitIntentProps = {
  isExtensionInstalled: boolean,
  isLandingMinimized: boolean,
  setIsLandingMinimized: Function,
  unmountLanding: Function,
};
