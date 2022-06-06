import React, { useState } from 'react';
import Image from 'next/image';
import styles from '../styles/Header.module.css';
import { AnimatePresence, motion } from 'framer-motion';
import { useMediaQuery } from 'react-responsive';

const Path = props => (
  <motion.path fill="transparent" strokeWidth="3" stroke="white" strokeLinecap="round" {...props} />
);

const Header = ({ topAnchor, portfolioAnchor, aboutMeAnchor, contactAnchor }) => {
  const [isInView, changeIsInView] = useState(true);
  const [menuIsOpen, ChangeMenuIsOpen] = useState(false);
  const isMobile = useMediaQuery({ maxWidth: 750 });

  const anchorClicked = anchor => {
    ChangeMenuIsOpen(false);
    anchor.current.scrollIntoView({ behavior: 'smooth' });
  };

  const toggleMenu = () => {
    ChangeMenuIsOpen(state => !state);
  };

  const leaveView = () => {
    changeIsInView(false);
  };
  const enterView = () => {
    changeIsInView(true);
    ChangeMenuIsOpen(false);
  };
  return (
    <>
      <motion.header
        className={styles.Header}
        onViewportLeave={leaveView}
        onViewportEnter={enterView}
      >
        <div className={styles.Logo}>
          <Image src={'/images/logo.png'} width={65} height={65} alt="Logo de una llama" />
        </div>

        <nav className={styles.Nav}>
          <button className={styles['Nav__link']} onClick={() => anchorClicked(portfolioAnchor)}>
            Portafolio
          </button>

          <button className={styles['Nav__link']} onClick={() => anchorClicked(aboutMeAnchor)}>
            Sobre mí
          </button>

          <button className={styles['Nav__link']} onClick={() => anchorClicked(contactAnchor)}>
            Contacto
          </button>
        </nav>
      </motion.header>
      <AnimatePresence>
        {(isMobile || !isInView) && (
          <motion.button
            className={styles.MenuButton}
            onClick={toggleMenu}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <svg width="23" height="23" viewBox="0 0 23 23">
              <Path animate={{ d: menuIsOpen ? 'M 3 16.5 L 17 2.5' : 'M 2 2.5 L 20 2.5' }} />
              <Path
                d="M 2 9.423 L 20 9.423"
                animate={{ opacity: menuIsOpen ? 0 : 1 }}
                transition={{ duration: 0.1 }}
              />
              <Path
                animate={{ d: menuIsOpen ? 'M 3 2.5 L 17 16.346' : 'M 2 16.346 L 20 16.346' }}
              />
            </svg>
          </motion.button>
        )}
      </AnimatePresence>
      <AnimatePresence>
        {menuIsOpen && (
          <motion.div
            className={styles.Menu}
            initial={{ x: 600 }}
            animate={{ x: 0 }}
            exit={{ x: 600 }}
            transition={{ duration: 0.5 }}
          >
            <button className={styles.BackTopButton} onClick={() => anchorClicked(topAnchor)}>
              <Image src={'/images/logo.png'} width={65} height={65} alt="Logo de una llama" />
            </button>
            <div className={styles.MenuTitle}>
              <p className={styles['MenuTitle__text']}>Navegación</p>
            </div>
            <nav className={styles.MenuNav}>
              <button
                className={styles['Menu__link']}
                onClick={() => anchorClicked(portfolioAnchor)}
              >
                Portafolio
              </button>

              <button className={styles['Menu__link']} onClick={() => anchorClicked(aboutMeAnchor)}>
                Sobre mí
              </button>

              <button className={styles['Menu__link']} onClick={() => anchorClicked(contactAnchor)}>
                Contacto
              </button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;
