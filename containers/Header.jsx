import React, { useState } from 'react';
import Image from 'next/image';
import styles from '../styles/containers/Header.module.css';
import menuStyles from '../styles/containers/Menu.module.css';
import { motion } from 'framer-motion';
import { useMediaQuery } from 'react-responsive';
import Navigation from '../components/Navigation';
import Menu from './Menu';
import MenuButton from '../components/MenuButton';

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

        <Navigation
          styles={styles}
          anchorClicked={anchorClicked}
          portfolioAnchor={portfolioAnchor}
          aboutMeAnchor={aboutMeAnchor}
          contactAnchor={contactAnchor}
        />
      </motion.header>

      <MenuButton
        menuIsOpen={menuIsOpen}
        toggleMenu={toggleMenu}
        isMobile={isMobile}
        isInView={isInView}
      />

      <Menu menuIsOpen={menuIsOpen}>
        <button className={styles.BackTopButton} onClick={() => anchorClicked(topAnchor)}>
          <Image src={'/images/logo.png'} width={65} height={65} alt="Logo de una llama" />
        </button>
        <div className={styles.MenuTitle}>
          <p className={styles['MenuTitle__text']}>Navegación</p>
        </div>
        <Navigation
          styles={menuStyles}
          anchorClicked={anchorClicked}
          portfolioAnchor={portfolioAnchor}
          aboutMeAnchor={aboutMeAnchor}
          contactAnchor={contactAnchor}
        />
      </Menu>
    </>
  );
};

export default Header;
