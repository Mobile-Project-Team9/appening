
import i18next from "i18next";

import { initReactI18next} from "react-i18next"

import en from '../locales/en.json';
import ar from '../locales/ar.json';
import su from '../locales/su.json'

export const languageResources ={
    en: {translation: en},
    su: {translation: su},
    ar: {translation: ar}, 

};

i18next.use(initReactI18next).init({
    compatibilityJSON:'v3',
    lan:'en',
    fallbackLng:'en',
    resources: languageResources,
});
export default i18next;