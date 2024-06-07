import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <span>1 item left!</span>
      <ul className={styles.filters}>
        <li>All</li>
        <li>Active</li>
        <li>Completed</li>
      </ul>
      <button type="button" className={styles['clear-completed']}>
        Clear completed
      </button>
    </footer>
  );
};

export default Footer;
