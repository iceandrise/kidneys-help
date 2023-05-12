import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import { languageDetectorPlugin } from './LanguageDetector';
import { ru, en } from './locales';

const namespaces = Object.keys(en);

const resources = {
  en,
  ru,
};

i18n.use(initReactI18next).init({
  compatibilityJSON: 'v3',
  resources,
  ns: namespaces,
  defaultNS: 'common',
});

i18n.languages = ['en', 'ru'];

export default i18n;
