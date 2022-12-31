import React from 'react';
import styles from '../styles/components/AboutMe.module.css';
import { motion } from 'framer-motion';
import { useTranslation } from 'next-export-i18n';

const variants = {
  start: {
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
  },
};

const AboutMe = () => {
  const { t } = useTranslation();
  return (
    <>
      <div className={styles.AboutMe}>
        <div className={styles.Title}>
          <motion.h2
            className={styles['Title__text']}
            variants={variants}
            initial={'start'}
            whileInView={'visible'}
            transition={{ duration: 0.8, ease: 'easeInOut' }}
            viewport={{ once: true }}
          >
            {t('books_code')}
          </motion.h2>
        </div>
        <div className={styles.Description}>
          <motion.p
            className={styles['Description__text']}
            variants={variants}
            initial={'start'}
            whileInView={'visible'}
            transition={{ duration: 0.8, ease: 'easeInOut' }}
            viewport={{ once: true }}
          >
            {t('about_me_p_1')}
          </motion.p>
          <motion.p
            className={styles['Description__text']}
            variants={variants}
            initial={'start'}
            whileInView={'visible'}
            transition={{ duration: 0.8, ease: 'easeInOut' }}
            viewport={{ once: true }}
          >
            {t('about_me_p_2')}
          </motion.p>
          <motion.p
            className={styles['Description__text']}
            variants={variants}
            initial={'start'}
            whileInView={'visible'}
            transition={{ duration: 0.8, ease: 'easeInOut' }}
            viewport={{ once: true }}
          >
            {t('about_me_p_3')}
          </motion.p>
        </div>
      </div>
    </>
  );
};

export default AboutMe;
