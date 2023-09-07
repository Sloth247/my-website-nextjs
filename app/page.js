import Image from 'next/image';
import styles from '@styles/globals.scss';
import About from '@components/about';
import Skills from '@components/skills';
import Portfolio from '@components/portfolio';
import Contact from '@components/contact';

export default function Home() {
  return (
    <main className={styles.main}>
      <About />
      <Skills />
      <Portfolio />
      <Contact />
    </main>
  );
}
