import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import styles from '../styles/components/Footer.module.css';
import { useTranslation } from 'next-export-i18n';

const Footer = () => {
  const { t } = useTranslation();
  return (
    <footer className={styles.Footer}>
      <div className={styles.contacto}>
        <h2>{t('contact')}</h2>
        <a href="mailto:ivan.gutierrezc92@gmail.com">ivan.gutierrezc92@gmail.com</a>
        <p>
          Tel: <a href="Tel:+56999181472">+569 99181472</a>
        </p>
      </div>
      <div className={styles.social}>
        <h2>{t('find_me')}:</h2>
        <div className={styles['social-icons']}>
          <a href="https://github.com/ivangutierrez92" target="_blank" rel="noreferrer">
            <FontAwesomeIcon icon={faGithub} className="fa-2x" title="Github" />
          </a>
          <a
            href="https://www.linkedin.com/in/ivan-gutierrez-castro/"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon icon={faLinkedin} className="fa-2x" title="Linkedin" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
