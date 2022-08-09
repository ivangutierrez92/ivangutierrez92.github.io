import React from 'react';
import styles from '../styles/components/AboutMe.module.css';
import { motion } from 'framer-motion';

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
            En transición de los libros al código
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
            Mi nombre es Iván Gutiérrez, estudié para bibliotecólogo, pero el mundo de la
            programación siempre me interesó. Aprendí por mi cuenta a programar, y cuando tuve la
            oportunidad, estudié para técnico en programación computacional. Tengo conocimientos
            generales del back-end, con lenguajes como C# y SQL, pero mi área de especialización es
            el front-end como desarrollador web, con HTML, CSS, JavaScript, especialmente con la
            librería de React.
          </motion.p>
          <motion.p
            className={styles['Description__text']}
            variants={variants}
            initial={'start'}
            whileInView={'visible'}
            transition={{ duration: 0.8, ease: 'easeInOut' }}
            viewport={{ once: true }}
          >
            Manejo inglés a nivel medio avanzado, teniendo un certificado B2 de Cambridge English, y
            estoy preparándome para el certificado AZ-900 de Microsoft Azure.
          </motion.p>
          <motion.p
            className={styles['Description__text']}
            variants={variants}
            initial={'start'}
            whileInView={'visible'}
            transition={{ duration: 0.8, ease: 'easeInOut' }}
            viewport={{ once: true }}
          >
            Además de programar, me interesa la fotografía, tocar música, videojuegos, y la lectura.
            Soy un firme creyente que el aprendizaje continuo (e inteligente) es esencial, y que tan
            importante como saber qué no sabes, es saber dónde buscarlo.
          </motion.p>
        </div>
      </div>
    </>
  );
};

export default AboutMe;
