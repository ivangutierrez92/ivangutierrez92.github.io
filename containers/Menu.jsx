import React from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import styles from '../styles/containers/Menu.module.css';

const Menu = ({ menuIsOpen, children }) => {
  return (
    <>
      <AnimatePresence>
        {menuIsOpen && (
          <motion.div
            className={styles.Menu}
            initial={{ x: 600 }}
            animate={{ x: 0 }}
            exit={{ x: 600 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Menu;
