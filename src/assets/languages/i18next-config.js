import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import englishTranslation from "./en/en.json";
import polishTranslation from "./pl/pl.json";

i18next
  .use(initReactI18next)
  .use(LanguageDetector)
  .init({
    resources: {
      en: { translation: englishTranslation },
      pl: { translation: polishTranslation },
    },
    fallbackLng: "en",
    interpolation: {
      escapeValue: false, // React already escapes data to prevent XSS
    },
  });
