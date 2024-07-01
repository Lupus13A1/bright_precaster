// src/components/translation/useTranslations.js
import { translations } from './translations';

export const useTranslations = (language) => {
  const translate = (key) => {
    return translations[language][key] || key; // Default to key if translation not found
  };

  return { translate };
};
