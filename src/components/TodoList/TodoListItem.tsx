import { TodoListItemTypes } from '../../context/TodoContext';
import styles from './TodoList.module.css';

interface TodoListItemProps {
  todoListItem: TodoListItemTypes;
}

const TodoListItem = ({ todoListItem }: TodoListItemProps) => {
  const { no, todo, done } = todoListItem;

  return (
    <li className={styles['todo-list-item']}>
      <input type="checkbox" className={styles.toggle} id="checkbox" />
      <label htmlFor="checkbox"></label>
      <div className={styles['todo-list-container']}>
        <span className={styles['todo-label']}>{todo}</span>
        <button type="button" className={styles.destroy}>
          x
        </button>
      </div>
    </li>
  );
};

export default TodoListItem;
