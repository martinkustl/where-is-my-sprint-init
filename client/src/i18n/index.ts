// <reference path="./types/i18next.d.ts" />

import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import enLang from './locales/en/en.json';
import csLang from './locales/cs/cs.json';
// import Backend from 'i18next-http-backend';
// don't want to use this?
// have a look at the Quick start guide
// for passing in lng and translations on init

const resources = {
  en: {
    translation: enLang,
  },
  cs: {
    translation: csLang,
  },
} as const;

declare module 'i18next' {
  interface CustomTypeOptions {
    defaultNS: 'en';
    resources: {
      en: (typeof resources)['en']['translation'];
      cs: (typeof resources)['cs']['translation'];
    };
  }
}

i18n.use(initReactI18next).init({
  resources,
  lng: 'cs', // language to use, more information here: https://www.i18next.com/overview/configuration-options#languages-namespaces-resources
  interpolation: {
    escapeValue: false, // react already safes from xss
  },
});

export default i18n;
