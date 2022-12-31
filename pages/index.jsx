import { useRef } from 'react';
import Head from 'next/head';
import styles from '../styles/pages/Home.module.css';
import Image from "next/legacy/image";
import Portafolio from '../containers/Portfolio';
import SobreMi from '../components/AboutMe';
import Footer from '../components/Footer';
import { motion } from 'framer-motion';
import Header from '../containers/Header';
import {
  useTranslation,
} from "next-export-i18n";

export default function Home() {
  const { t } = useTranslation();
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
            transition={{ delay: 0.7, duration: 0.8, ease: 'easeInOut' }}
          >
            {t("greeting")}
          </motion.h2>
          <motion.h2
            className={styles['Presentation__text']}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 0.8, ease: 'easeInOut' }}
          >
            {t("welcome")}
          </motion.h2>
        </div>
        <div className={styles.ImageContainer}>
          <Image
            src="/banner.jpg"
            alt="imagen del autor"
            width={500}
            height={500}
            layout="responsive"
            priority
          />
        </div>
      </div>
      <p className={styles.SectionTitle} ref={portfolioAnchor}>
        {t("portfolio")}
      </p>
      <Portafolio />
      <p className={styles.SectionTitle} ref={aboutMeAnchor}>
      {t("about_me")}
      </p>
      <SobreMi />
      <div ref={contactAnchor} />
      <Footer />
    </>
  );
}
