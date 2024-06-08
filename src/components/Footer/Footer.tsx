import { useContext } from 'react';
import styles from './Footer.module.css';
import TodoContext from '../../context/TodoContext';
import Filters from './Filters/Filters';
import ClearCompletedButton from './ClearCompletedButton/ClearCompletedButton';
import { useIncompleteTodosCount } from '../../hooks/useIncompleteTodosCount';

const Footer = () => {
  const value = useContext(TodoContext);
  const countIncompleteTodos = useIncompleteTodosCount();

  return (
    <footer className={styles.footer}>
      <span>{countIncompleteTodos} item left!</span>
      <Filters />
      <ClearCompletedButton clearCompleted={value?.actions.clearCompleted} />
    </footer>
  );
};

export default Footer;
