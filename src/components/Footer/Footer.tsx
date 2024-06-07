import { useContext } from 'react';
import styles from './Footer.module.css';
import TodoContext from '../../context/TodoContext';
import Filters from './Filters/Filters';

const Footer = () => {
  const value = useContext(TodoContext);
  const countIncompleteTodos = value?.state.todoList.filter(todo => !todo.done).length;

  return (
    <footer className={styles.footer}>
      <span>{countIncompleteTodos} item left!</span>
      <Filters />
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
