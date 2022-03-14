import Link from 'next/link';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAddressCard, faHouse, faMoon } from '@fortawesome/free-solid-svg-icons';

const NavBar = () => {
  return (
    <nav>
      <Link href="/">
        <a>
          <FontAwesomeIcon icon={faHouse} />
        </a>
      </Link>
      <Link href={'/sobre-mi'}>
        <a>
          <FontAwesomeIcon icon={faAddressCard} />
        </a>
      </Link>
      <button type="button">
        <FontAwesomeIcon icon={faMoon} />
      </button>
    </nav>
  );
};

export default NavBar;
