import React from 'react';
import NavBar from '../components/NavBar';
import Image from 'next/image';

const Header = () => {
  return (
    <header>
      <Image src="/images/logo.png" width={128} height={128} alt="logo del portafolio" />
      <NavBar />
    </header>
  );
};

export default Header;
