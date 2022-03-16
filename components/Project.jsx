import Image from 'next/image';
import React from 'react';
import styles from '../styles/Project.module.css';

const Project = ({ project }) => {
  return (
    <div className={styles.Project}>
      <h2>{project.title}</h2>
      <a href={project.url} target="_blank" rel="noreferrer">
        <div className={styles['image-container']}>
          <Image src={project.src} alt={project.title} width={432} height={288} layout="responsive" className={styles.image} />
        </div>
      </a>
      <p>{project.description}</p>
    </div>
  );
};

export default Project;
