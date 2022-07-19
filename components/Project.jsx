import Image from 'next/image';
import React from 'react';
import styles from '../styles/components/Project.module.css';

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
          {typeof project.url == 'string' ? (
            <a className={styles.CallToAction} href={project.url} target="_blank" rel="noreferrer">
              Ver Proyecto
            </a>
          ) : (
            project.url.map((url, index) => (
              <a
                className={styles.CallToAction}
                href={url.content}
                target="_blank"
                rel="noreferrer"
                key={`project-url-${url.title}-${index}`}
              >
                Ver projecto {url.title}
              </a>
            ))
          )}
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
            alt={project.title}
            width={1200}
            height={600}
            layout="responsive"
            className={styles.image}
          />
        </div>
      </a>
      <div className={styles.Tools}>
        <h2 className={styles['Tools__title']}>Herramientas</h2>
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
