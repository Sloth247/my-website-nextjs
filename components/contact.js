import { FaLinkedin } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import styles from '@styles/components/contact.module.scss';

import Image from 'next/image';
import globe from '@public/images/globe.svg';

export default function Contact() {
  return (
    <section className={styles.container} id="contact">
      <div className={styles.inner}>
        <h2 className={styles.title}>Get In Touch</h2>
        <div className={styles.texts}>
          <p className={styles.open}>I&apos;m open for chat!</p>
          <a href="mailto:yukohorita@outlook.com" className={styles.item}>
            <p className={styles.details}>
              <MdEmail />
              <span>yukohorita@outlook.com</span>
            </p>
          </a>
          <a
            href="https://www.linkedin.com/in/yuko-horita"
            className="footer__item"
            target="blank"
          >
            <p className={styles.details}>
              <FaLinkedin />
              <span>LinkedIn</span>
            </p>
          </a>
          <Image src={globe} alt="" aria-hidden="true" />
        </div>
      </div>
    </section>
  );
}
