import React from 'react';
import { useTranslation } from 'react-i18next';

export default function LanguageToggle() {
  const { i18n } = useTranslation();

  const toggleLanguage = () => {
    const newLang = i18n.language === "en" ? "ko" : "en";
    i18n.changeLanguage(newLang);
  };

  const currentLanguage = i18n.language;

  return (
    <div>
      <button onClick={toggleLanguage}>
        {currentLanguage === 'en' ? 'En' : 'Ko'}
      </button>
    </div>
  );
};
