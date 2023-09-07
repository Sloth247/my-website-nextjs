'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import styles from '@styles/components/header.module.scss';
import Hamburger from '@components/hamburger';

import Logo from '@public/icons/logo.svg';

export default function Header() {
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [mobileExpanded, setMobileExpanded] = useState(false);
  const handleButtonClick = () => {
    setMobileExpanded(!mobileExpanded);
    setShowMobileMenu(!showMobileMenu);
  };
  const handleClose = () => {
    setMobileExpanded(false);
    setShowMobileMenu(false);
  };

  return (
    <header className={styles.header}>
      <nav className={`${styles.nav} ${styles.wrapper}`}>
        <Link href="/">
          <h1 className={styles.logo}>
            <span className="sronly">Yuko Horita Web Developer</span>
            <div className={styles.img}>
              <Image
                src={Logo}
                alt="Yuko Horita"
                layout="fill"
                objectFit="cover"
                // width={56}
                // height={56}
                // position="relative"
              />
            </div>
          </h1>
        </Link>

        <div className={styles.container}>
          <ul
            className={
              mobileExpanded ? `${styles.menus} ${styles.show}` : styles.menus
            }
            id="mobile-menu"
          >
            <li className={styles.about}>
              <Link
                href="/#about"
                className={styles.link}
                onClick={handleClose}
              >
                About Me
              </Link>
            </li>
            <li className={styles.skills}>
              <Link
                href="/#skills"
                className={styles.link}
                onClick={handleClose}
              >
                Skills
              </Link>
            </li>
            <li className={styles.portfolio}>
              <Link
                href="/#portfolio"
                className={styles.link}
                onClick={handleClose}
              >
                Projects
              </Link>
            </li>
            <li className={styles.contact}>
              <Link
                href="/#contact"
                className={styles.link}
                onClick={handleClose}
              >
                Contact
              </Link>
            </li>
          </ul>
          <div className={styles.icon}>
            <Hamburger
              mobileExpanded={mobileExpanded}
              handleButtonClick={handleButtonClick}
            />
          </div>
        </div>
        <div
          className={
            mobileExpanded ? `${styles.overlay} ${styles.open}` : styles.overlay
          }
        ></div>
      </nav>
    </header>
  );
}
