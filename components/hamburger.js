import styles from '@styles/components/hamburger.module.scss';

export default function Hamburger({ mobileExpanded, handleButtonClick }) {
  return (
    <button
      className={
        mobileExpanded ? `${styles.icon} ${styles.close}` : styles.icon
      }
      aria-labelledby="toggle-menu"
      aria-expanded={mobileExpanded}
      aria-controls="mobile-menu"
      onClick={handleButtonClick}
    >
      <h2 className={styles.sronly} id="toggle-menu">
        Mobile Menus
      </h2>
      <span aria-hidden="true"></span>
    </button>
  );
}
