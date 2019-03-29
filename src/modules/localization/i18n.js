import i18n from 'i18next';
import languageDetector from 'i18next-browser-languagedetector';
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

i18n
  .use(languageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'fr',
    keySeparator: '.',
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
