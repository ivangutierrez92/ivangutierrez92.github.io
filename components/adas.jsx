import React from 'react';
import { LanguageSwitcher } from 'next-export-i18n';

const LanguageButton = ({ styles }) => {
  return (
    <div className={styles.container}>
      <LanguageSwitcher lang="es">ES</LanguageSwitcher>
      <LanguageSwitcher lang="en">EN</LanguageSwitcher>
    </div>
  );
};

export default LanguageButton;
