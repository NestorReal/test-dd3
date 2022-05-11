/* eslint-disable import/no-unresolved */
import i18n from 'i18next';
import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';

// eslint-disable-next-line camelcase
import global_es from './translations/es';
// eslint-disable-next-line camelcase
import global_en from "./translations/en";

const language = localStorage.getItem("language")
i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next) // bind react-i18next to the instance
  .init({
    lng: language !== null ? language : 'es',
    debug: true,

    interpolation: {
      escapeValue: false, // not needed for react!!
    },

    resources: {
        es: {
          // eslint-disable-next-line camelcase
          global: global_es,
        },
        en: {
          // eslint-disable-next-line camelcase
          global: global_en,
        },
      },

    // react i18next special options (optional)
    // override if needed - omit if ok with defaults
    /*
    react: {
      bindI18n: 'languageChanged',
      bindI18nStore: '',
      transEmptyNodeValue: '',
      transSupportBasicHtmlNodes: true,
      transKeepBasicHtmlNodesFor: ['br', 'strong', 'i'],
      useSuspense: true,
    }
    */
  });


export default i18n;