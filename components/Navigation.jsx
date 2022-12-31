import { useTranslation } from 'next-export-i18n';
import React from 'react';
import LanguageButton from '../components/languageButton';

const Navigation = ({ styles, anchorClicked, portfolioAnchor, aboutMeAnchor, contactAnchor }) => {
  const { t } = useTranslation();
  return (
    <nav className={styles.Nav}>
      <button
        role="link"
        className={styles['Nav__link']}
        onClick={() => anchorClicked(portfolioAnchor)}
      >
        {t("portfolio")}
      </button>
      <button
        role="link"
        className={styles['Nav__link']}
        onClick={() => anchorClicked(aboutMeAnchor)}
      >
        {t("about_me")}
      </button>
      <button
        role="link"
        className={styles['Nav__link']}
        onClick={() => anchorClicked(contactAnchor)}
      >
        {t("contact")}
      </button>
      <LanguageButton styles={styles} />
    </nav>
  );
};

export default Navigation;
