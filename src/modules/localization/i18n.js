import i18n from 'i18next';
import parseDomain from 'parse-domain';
import * as R from 'ramda';
import { initReactI18next } from 'react-i18next';
import moment from 'moment';
import 'moment/locale/de';
import 'moment/locale/fr';
import 'moment/locale/en-gb';

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

const localeCodeCurrency = {
  en: { code: 'en-US', cur: 'USD' },
  de: { code: 'de-DE', cur: 'EUR' },
  fr: { code: 'fr-FR', cur: 'EUR' },
  gb: { code: 'en-GB', cur: 'GBP' },
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
  const locale = getLocale();

  return {
    // TODO: enable authentication on all domains after feature support added
    isAuthenticationAvailable: Object.values(Locale).includes(locale),
    // TODO: enable follow store on all domains after feature support added
    isFollowStoreAvailable: true,
  };
};

export const currencyLocaleFormat = (amount, country = getLocale()) => {
  country = country.toLowerCase();
  const { code, cur } =
    localeCodeCurrency[country] || localeCodeCurrency[getLocale()];
  return amount.trim()
    ? Number.parseFloat(amount.replace(/[^@\d .]/g, '')).toLocaleString(code, {
        style: 'currency',
        currency: cur,
        minimumFractionDigits: 0,
      })
    : '';
};

export const getCurrencySymbol = () => {
  const locale = getLocale();
  const { code, cur } = localeCodeCurrency[locale.toLowerCase()];
  return Number.parseFloat()
    .toLocaleString(code, { style: 'currency', currency: cur })
    .replace('NaN', '');
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

  // Set moment.js locale and html language
  moment.locale(getLocale());
  document.documentElement.lang = getLocale();
};

export default i18n;
