import { useState, useEffect } from 'react';

const ToggleLanguage = ({ onLanguageChange }) => {
  const [language, setLanguage] = useState('th');

  const toggleLanguage = () => {
    const newLanguage = language === 'th' ? 'en' : 'th';
    setLanguage(newLanguage);
    if (onLanguageChange) {
      onLanguageChange(newLanguage);
    }
  };

  useEffect(() => {
    if (onLanguageChange) {
      onLanguageChange(language);
    }
  }, []);

  return (
    <button onClick={toggleLanguage}>
      {language === 'en' ? 'ไทย' : 'Eng'}
    </button>
  );
};

export default ToggleLanguage;
