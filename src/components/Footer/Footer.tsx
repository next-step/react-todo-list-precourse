import { useContext } from 'react';
import styles from './Footer.module.css';
import TodoContext from '../../context/TodoContext';

const Footer = () => {
  const value = useContext(TodoContext);

  return (
    <footer className={styles.footer}>
      <span>1 item left!</span>
      <ul className={styles.filters}>
        <li>All</li>
        <li>Active</li>
        <li>Completed</li>
      </ul>
      <button
        type="button"
        className={styles['clear-completed']}
        onClick={() => value?.actions.clearCompleted()}
      >
        Clear completed
      </button>
    </footer>
  );
};

export default Footer;
