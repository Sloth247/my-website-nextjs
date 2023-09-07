import Image from 'next/image';
import styles from '@styles/components/about.module.scss';
import Hero from '@public/images/coding-woman.svg';

export default function About() {
  return (
    <section className={`${styles.about} ${styles.wrapper}`} id="about">
      <div className={styles.inner}>
        <h2 className={styles.title}>About Me</h2>
        <Image
          src={Hero}
          alt=""
          className={styles.img}
          aria-hidden="true"
          width={1041.32}
          height={554.17}
        />
        <p className={styles.description}>
          Hi 👋 there, I&apos;m Yuko Horita and thanks for visiting my website.
          I am a self-taught web developer that loves improving my skills. I
          also pay a lot of attention to detail in all my work. I always
          priotize the accessiblity of the things I build so that the internet
          is open to everyone, I consider my strengths to be flexibility and
          being eager to take on new challenges and take on targets set by
          clients.
        </p>
      </div>
    </section>
  );
}
