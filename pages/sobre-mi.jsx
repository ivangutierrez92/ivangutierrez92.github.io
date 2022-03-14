import React from 'react';
import Image from 'next/image';

const AboutMe = () => {
  return (
    <main>
      <h1>Sobre mí</h1>
      <Image src="/images/retrato.jpg" width={520} height={520} layout="responsive" alt="fotografía dueño del portafolio" />
    </main>
  );
};

export default AboutMe;
