import { useRef } from 'react';
import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Image from 'next/image';
import Portafolio from '../containers/Portfolio';
import SobreMi from '../containers/AboutMe';
import Footer from '../components/Footer';
import { motion } from 'framer-motion';
import Header from '../containers/Header';

export default function Home() {
  const topAnchor = useRef(null);
  const portfolioAnchor = useRef(null);
  const aboutMeAnchor = useRef(null);
  const contactAnchor = useRef(null);
  return (
    <>
      <Head>
        <title>Portafolio Web</title>
        <meta name="description" content="Portafolio web creado por Iván Gutiérrez Castro" />
      </Head>
      <Header
        topAnchor={topAnchor}
        portfolioAnchor={portfolioAnchor}
        aboutMeAnchor={aboutMeAnchor}
        contactAnchor={contactAnchor}
      />
      <div className={styles.Banner} ref={topAnchor}>
        <div className={styles.Presentation}>
          <motion.h2
            className={styles['Presentation__text']}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7, duration: 1 }}
          >
            Hola, mi nombre es Iván
          </motion.h2>
          <motion.h2
            className={styles['Presentation__text']}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1.2 }}
            transition={{ delay: 1.5, duration: 1.2 }}
          >
            Bienvenido a mi Portafolio Web
          </motion.h2>
        </div>
        <div className={styles.ImageContainer}>
          <Image
            src="/banner.jpg"
            alt="imagen del autor"
            width={1000}
            height={1000}
            layout="responsive"
            priority
          />
        </div>
      </div>
      <p className={styles.SectionTitle} ref={portfolioAnchor}>
        Portafolio
      </p>
      <Portafolio />
      <p className={styles.SectionTitle} ref={aboutMeAnchor}>
        Sobre mí
      </p>
      <SobreMi />
      <div ref={contactAnchor} />
      <Footer />
    </>
  );
}
