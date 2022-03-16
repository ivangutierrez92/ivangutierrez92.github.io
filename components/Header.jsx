import React, { useState } from 'react';
import NavBar from '../components/NavBar';
import Image from 'next/image';
import styles from '../styles/Header.module.css';
import logo from '../public/images/logo.png'

const Header = () => {
  return (
    <header className={styles.Header}>
      <div className={styles['logo-spacer']}>
        <div className={styles['logo-container']}>
          <Image src={logo} width={128} height={128} alt="logo del portafolio" />
        </div>
      </div>
      <NavBar styles={styles} />
    </header>
  );
};

export default Header;
