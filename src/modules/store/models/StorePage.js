//@flow

export type Content = {
  title?: string,
  body: string,
  bonus?: string,
};

export type AdditionalInfo = {
  title: string,
  content: Content[],
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
  name: string,
  isFollowed: boolean,
  info: StoreInformation[],
};

export type Offer = {
  title: string,
  value?: string,
  expDate?: string,
  discountPercent?: number,
  cashbackPercent?: number,
  usesToday?: number,
  isCoupon?: boolean,
  isDeal?: boolean,
  isBonus?: boolean,
  isLimited?: boolean,
  isNew?: boolean,
  key?: string,
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
};

export type BrandProps = {
  store: Store,
  offers: Offer[],
  extension: Extension,
};

export type BrandContentProps = {
  storeName: string,
  stars: number,
  reviewsCount: string,
};

export type BrandHeaderProps = {
  storeName: string,
  isFollowed: boolean,
  offers: Offer[],
};

export type BrandNeverOverpayProps = {
  storeName: string,
};

export type PiggyExtAdProps = {
  stars: number,
  reviewsCount: string,
};

export type OffersProps = {
  offers: Offer[],
};

export type AdditionalInfoProps = {
  info: AdditionalInfo[],
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
  info: StoreInformation[],
};
