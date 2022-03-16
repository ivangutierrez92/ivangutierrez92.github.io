import React from 'react';
import Image from 'next/image';
import Head from 'next/head';
import styles from '../styles/SobreMi.module.css';
import retrato from '../public/images/retrato.jpg';

const AboutMe = () => {
  return (
    <>
      <Head>
        <title>Portafolio - Sobre mí</title>
      </Head>
        <h1>Sobre mí</h1>
        <div className={styles.description}>
          <div className={styles['image-container']}>
            <Image src={retrato} alt="fotografía dueño del portafolio" className={styles.retrato} />
          </div>
          <div className={styles['description-text']}>
            <p>
              Mi nombre es Iván Gutiérrez, soy licenciado en Ciencias de la Documentación, y técnico
              en programación computacional. Si bien tengo conocimientos del back-end,
              específicamente con leguajes como C# y SQLServer, me interesa el desarrollo web,
              usando HTML, CSS, JS, y teniendo conocimiento de librerías como React, Sass,
              bootstrap, entre otras.
            </p>
            <p>
              Además manejo inglés a nivel medio avanzado, teniendo un certificado B2 de Cambridge
              English, y alemán a nivel básico, teniendo un certificado A2 del Goethe-Institut.
            </p>
          </div>
        </div>
    </>
  );
};

export default AboutMe;
