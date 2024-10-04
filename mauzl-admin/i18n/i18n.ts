import enMessages from "./locales/en.json";
import frMessages from "./locales/fr.json";
import { Language } from "./types";

import type { i18n as i18nApi, Resource } from "i18next";
import i18next from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";

const defaultNS = "translation";
const defaultLanguage = Language.EN;

const resources: Resource = {
  en: { [defaultNS]: enMessages },
  fr: { [defaultNS]: frMessages },
};

const isDevelopment = process.env.NODE_ENV !== "production";

const i18nInitializer = (): i18nApi => {
  i18next
    .use(initReactI18next)
    .use(LanguageDetector)
    .init({
      lng: defaultLanguage,
      defaultNS,
      resources,
      debug: isDevelopment,
      load: "languageOnly",
      saveMissing: true,
      returnEmptyString: false,
      missingKeyNoValueFallbackToKey: false,
      react: {
        useSuspense: false,
      },
      interpolation: {
        escapeValue: false,
      },
    })
    .then(undefined)
    .catch((error) => {
      console.error("error", error);
    });

  return i18next;
};
const i18n = i18nInitializer();

export const changeLanguage = (lng: Language): void => {
  i18n
    .changeLanguage(lng)
    .then(undefined)
    .catch((error) => {
      console.error("error", error);
    });
};

export default i18n;
