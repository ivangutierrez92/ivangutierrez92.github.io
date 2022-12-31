import { useTranslation } from 'next-export-i18n';
import Image from 'next/legacy/image';
import React from 'react';
import styles from '../styles/components/Project.module.css';

const Project = ({ project }) => {
  const { t } = useTranslation();
  return (
    <div className={styles.Project}>
      <div className={styles.Info}>
        <div className={styles.Title}>
          <h2 className={styles['Title__text']}>
            <span>{project.icon}</span>
            {t(project.title)}
          </h2>
        </div>
        <div className={styles.Description}>
          <p className={styles['Description__text']}>{t(project.description)}</p>

          <a className={styles.CallToAction} href={project.url} target="_blank" rel="noreferrer">
            {t('see_project')}
          </a>
        </div>
      </div>
      <a
        href={typeof project.url == 'string' ? project.url : project.url[0].content}
        target="_blank"
        rel="noreferrer"
      >
        <div className={styles['image-container']}>
          <Image
            src={project.src}
            alt={t(project.title)}
            width={1200}
            height={600}
            layout="responsive"
            className={styles.image}
          />
        </div>
      </a>
      <div className={styles.Tools}>
        <h2 className={styles['Tools__title']}>{t('tools')}</h2>
        <ul className={styles.List}>
          {project.tools.map((tool, key) => (
            <li className={styles['List__tool']} key={`tool-${key}`}>
              {tool}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Project;
