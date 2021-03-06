// @flow

export type HomeProps = {
  t: Function,
  visible: boolean,
  isLoaded: boolean,
  fetchHomePageFeature: any => Promise<Object>,
  homePageSetting: string,
};

export type HomeHeroProps = {
  t: Function,
  i18n: Function,
};

export type HomeHowItWorksProps = {
  t: Function,
  i18n: Function,
};

export type HomeFavoriteStoresProps = {
  t: Function,
  i18n: Function,
  featuredStores: any[],
};

export type HomeQuotesProps = {
  t: Function,
};
