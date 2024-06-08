import { useContext } from 'react';
import styles from './Footer.module.css';
import TodoContext from '../../context/TodoContext';
import Filters from './Filters/Filters';
import ClearCompletedButton from './ClearCompletedButton/ClearCompletedButton';

const Footer = () => {
  const value = useContext(TodoContext);
  const countIncompleteTodos = value?.state.todoList.filter(todo => !todo.done).length;

  return (
    <footer className={styles.footer}>
      <span>{countIncompleteTodos} item left!</span>
      <Filters />
      <ClearCompletedButton clearCompleted={value?.actions.clearCompleted} />
    </footer>
  );
};

export default Footer;
