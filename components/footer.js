import styles from '@styles/components/footer.module.scss';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <p className={styles.copyrights}>
        &copy; {new Date().getFullYear()} Yuko Horita
      </p>
    </footer>
  );
}
