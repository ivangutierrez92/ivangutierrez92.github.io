import Head from 'next/head';
import projects from '../context/projectsData';
import Project from '../components/Project';

export default function Home() {
  return (
    <>
      <Head>
        <title>Portafolio Web</title>
        <meta name="description" content="Portfolio web created by Iván Gutiérrez Castro" />
      </Head>
      <h1>Bienvenido a mi portafolio web</h1>
      <h2>Projectos:</h2>
      <section>
        {projects.map((project, key) => (
          <Project project={project} key={`project-${key}`} />
        ))}
      </section>
    </>
  );
}
