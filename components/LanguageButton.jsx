import React from 'react';
import styles from '../styles/components/LanguageButton.module.css';

const LanguageButton = ({lang = "es"}) => {

  return (
    <div className={styles.container}>
      <button className={`${styles.button} ${lang === "es" ? styles["button--active"] : styles["button--inactive"]}`}>ES</button>
      <button className={`${styles.button} ${lang === "en" ? styles["button--active"] : styles["button--inactive"]}`}>EN</button>
    </div>
  );
};

export default LanguageButton;
