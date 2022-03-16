import Link from 'next/link';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAddressCard, faHouse, faMoon } from '@fortawesome/free-solid-svg-icons';

const NavBar = ({styles}) => {
  return (
    <nav className={styles.NavBar}>
      <div>
        <Link href="/">
          <a>
            <FontAwesomeIcon icon={faHouse} className="fa-xl" />{' '}
            <span className={styles['sidebar-description']}>Portafolio</span>
          </a>
        </Link>
      </div>
      <div>
        <Link href={'/sobre-mi'}>
          <a>
            <FontAwesomeIcon icon={faAddressCard} className="fa-xl" />{' '}
            <span className={styles['sidebar-description']}>Sobre mí</span>
          </a>
        </Link>
      </div>
      <div>
        <button type="button" className={styles.button}>
          <FontAwesomeIcon icon={faMoon} className="fa-xl" />{' '}
          <span className={styles['sidebar-description']}>Modo Oscuro</span>
        </button>
      </div>
    </nav>
  );
};

export default NavBar;
