import i18n from 'i18next';
import parseDomain from 'parse-domain';
import * as R from 'ramda';
import { initReactI18next } from 'react-i18next';

import translationDE from './locales/de/translation';
import translationEN from './locales/en/translation';
import translationFR from './locales/fr/translation';
import translationGB from './locales/gb/translation';

const resources = {
  de: {
    translation: translationDE,
  },
  en: {
    translation: translationEN,
  },
  fr: {
    translation: translationFR,
  },
  gb: {
    translation: translationGB,
  },
};

const Locale = {
  en: 'en',
  de: 'de',
  fr: 'fr',
  gb: 'gb',
};

const localeToDomain = {
  com: Locale.en,
  de: Locale.de,
  fr: Locale.fr,
  'co.uk': Locale.gb,
};

const fallbackLocale = Locale.en;

export const getDomainAttrs = () => {
  const domain = window.location.hostname;
  const protocol = window.location.protocol;

  const parsedDomain = parseDomain(domain);
  const tld = R.propOr(null, 'tld', parsedDomain);
  const enDomain = domain.replace(tld, 'com');
  const enOrigin = `${protocol}//${enDomain}`;

  return {
    domain,
    protocol,
    tld,
    enDomain,
    enOrigin,
  };
};

export const redirectToEnOrigin = () => {
  const domainAttrs = getDomainAttrs();
  window.location.href = domainAttrs.enOrigin;
};

export const getLocale = () => {
  const domainAttrs = getDomainAttrs();
  return localeToDomain[domainAttrs.tld] || fallbackLocale;
};

export const getLocaleConfig = () => {
  return {
    // TODO: enable authentication on all domains after feature support added
    isAuthenticationAvailable: true,
    // TODO: enable follow store on all domains after feature support added
    isFollowStoreAvailable: true,
  };
};

export const initializeI18n = () => {
  // eslint-disable-next-line import/no-named-as-default-member
  i18n.use(initReactI18next).init({
    resources,
    lng: getLocale(),
    fallbackLng: fallbackLocale,
    keySeparator: '.',
    interpolation: {
      escapeValue: false,
    },
  });
};

export default i18n;
