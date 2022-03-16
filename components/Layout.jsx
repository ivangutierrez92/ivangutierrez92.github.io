import React from 'react';
import Header from './Header';
import Footer from './Footer';
import styles from '../styles/Layout.module.css';
import BottomBar from './BottomBar';

const Layout = ({ children }) => {
  return (
    <>
      <div className={styles.container}>
        <Header />
        <main className={styles.main}>{children}</main>
        <Footer />
        <BottomBar />
      </div>
    </>
  );
};

export default Layout;
