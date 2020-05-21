// @flow

export type HomeProps = {
  fetchHomePageFeature: (type: string) => Promise<void>,
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
