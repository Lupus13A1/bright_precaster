import React, { useState } from 'react';

const LanguageSwitcher = ({ changeLanguage }) => {
  const [isThai, setIsThai] = useState(false); // เริ่มต้นภาษาเป็นอังกฤษ

  const toggleLanguage = () => {
    setIsThai(prevIsThai => !prevIsThai); // สลับค่าของ isThai กลับและกลับไปข้างหน้า
    changeLanguage(isThai ? 'en' : 'th'); // เปลี่ยนภาษาตามสถานะปัจจุบันของ isThai
  };

  return (
    <button onClick={toggleLanguage}>
      {isThai ? 'English' : 'ไทย'}
    </button>
  );
};

export default LanguageSwitcher;
