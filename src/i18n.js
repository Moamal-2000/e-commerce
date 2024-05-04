import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import HttpApi from "i18next-http-backend";
import { initReactI18next } from "react-i18next";

const i18nConfig = {
  compatibilityJSON: "v3",
  fallbackLng: "en",
  returnObjects: true,
  detection: {
    order: [
      "cookie",
      "htmlTag",
      "localStorage",
      "sessionStorage",
      "navigator",
      "path",
      "subdomain",
    ],
    caches: ["cookie"],
  },
  backend: {
    loadPath: "/locale/{{lng}}/{{ns}}.json",
  },
};

i18n.use(initReactI18next).use(LanguageDetector).use(HttpApi).init(i18nConfig);

export default i18n;
