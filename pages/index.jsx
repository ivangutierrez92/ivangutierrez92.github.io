import Head from 'next/head';
import styles from '../styles/Home.module.css';
import projects from '../context/projectsData';
import Project from '../components/Project';
export default function Home() {
  return (
    <>
      <Head>
        <title>Portafolio Web</title>
        <meta name="description" content="Portfolio web created by Iván Gutiérrez Castro" />
      </Head>
      <main className={styles.main}>
        <h1>Bienvenido a mi portafolio web</h1>
        <section>
          {projects.map((project, key) => (
            <Project project={project} key={`project-${key}`} />
          ))}
        </section>
      </main>
    </>
  );
}
