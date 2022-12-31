import React from 'react';
import Project from '../components/Project';
import projectsData from '../utils/projectsData';
import styles from '../styles/containers/Portfolio.module.css';
import { motion } from 'framer-motion';
import { useTranslation } from 'next-export-i18n';

const Portafolio = () => {
  const { t } = useTranslation();
  return (
    <div className={styles.Portfolio}>
      <div className={styles.Title}>
        <motion.h2
          className={styles['Title__text']}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeInOut' }}
          viewport={{ once: true }}
        >
          {t("world_phrase")}
        </motion.h2>
      </div>
      {projectsData.map((project, key) => (
        <Project project={project} key={`project-${key}`} />
      ))}
    </div>
  );
};

export default Portafolio;
