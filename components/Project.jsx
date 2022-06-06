import Image from 'next/image';
import React from 'react';
import styles from '../styles/Project.module.css';

const Project = ({ project }) => {
  return (
    <div className={styles.Project}>
      <div className={styles.Info}>
        <div className={styles.Title}>
          <h2 className={styles['Title__text']}>
            <span>{project.icon}</span>
            {project.title}
          </h2>
        </div>
        <div className={styles.Description}>
          <p className={styles['Description__text']}>{project.description}</p>
          <a className={styles.CallToAction} href={project.url} target="_blank" rel="noreferrer">
            Ver Proyecto
          </a>
        </div>
      </div>

      <a href={project.url} target="_blank" rel="noreferrer">
        <div className={styles['image-container']}>
          <Image
            src={project.src}
            alt={project.title}
            width={1200}
            height={600}
            layout="responsive"
            className={styles.image}
          />
        </div>
      </a>
      <div className={styles.Tecnologies}>
        <h2 className={styles['Technologies__title']}>Tecnologías</h2>
        <ul className={styles.List}>
          {project.technologies.map((technology, key) => (
            <li className={styles['List__item']} key={`listItem-${key}`}>
              {technology}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Project;
