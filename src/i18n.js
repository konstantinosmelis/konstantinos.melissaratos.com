import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import i18nBackend from 'i18next-http-backend';

i18n.use(initReactI18next)
    .use(i18nBackend)
    .init({fallbackLng: 'en'});

export default i18n;
