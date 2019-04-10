import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import translationDE from './locales/de/translation';
import translationEN from './locales/en/translation';
import translationFR from './locales/fr/translation';

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
};

const localeToDomain = {
  '.com': 'en',
  '.de': 'de',
  '.fr': 'fr',
};

const fallbackLocale = 'en';

const getLocale = () => {
  const domain = window.location.hostname;
  const domainExt = domain.slice(domain.lastIndexOf('.'));

  return localeToDomain[domainExt] || fallbackLocale;
};

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

export default i18n;
