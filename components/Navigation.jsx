import React from 'react';

const Navigation = ({ styles, anchorClicked, portfolioAnchor, aboutMeAnchor, contactAnchor }) => {
  return (
    <nav className={styles.Nav}>
      <button className={styles['Nav__link']} onClick={() => anchorClicked(portfolioAnchor)}>
        Portafolio
      </button>
      <button className={styles['Nav__link']} onClick={() => anchorClicked(aboutMeAnchor)}>
        Sobre mí
      </button>
      <button className={styles['Nav__link']} onClick={() => anchorClicked(contactAnchor)}>
        Contacto
      </button>
    </nav>
  );
};

export default Navigation;
