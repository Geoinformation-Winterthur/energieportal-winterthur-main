import { createInstance } from 'i18next';
import { initReactI18next } from 'react-i18next/initReactI18next';
import de from "./public/locales/de.json";

const initI18next = () => {
  const i18nInstance = createInstance();
  i18nInstance
    .use(initReactI18next)
    .init({
      resources: {
        de
      },
      lng: "de",
      fallbackLng: "de"
    })
  return i18nInstance
}

export function useTranslation() {
  const i18nextInstance = initI18next();
  return {
    t: i18nextInstance.getFixedT("de"),
    i18n: i18nextInstance
  }
}