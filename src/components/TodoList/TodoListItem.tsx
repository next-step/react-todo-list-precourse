import { TodoListItemTypes } from '../../context/TodoContext';
import styles from './TodoList.module.css';
import TodoContext from '../../context/TodoContext';
import { useContext } from 'react';

interface TodoListItemProps {
  todoListItem: TodoListItemTypes;
}

const TodoListItem = ({ todoListItem }: TodoListItemProps) => {
  const value = useContext(TodoContext);

  const handleRemoveClick = () => {
    value?.actions.removeTodo(todoListItem.no);
  };

  return (
    <li className={styles['todo-list-item']}>
      <input type="checkbox" className={styles.toggle} id={`checkbox-${todoListItem.no}`} />
      <label htmlFor={`checkbox-${todoListItem.no}`}></label>
      <div className={styles['todo-list-container']}>
        <input className={styles['todo-label']} type="text" value={todoListItem.todo} disabled />
        <button type="button" className={styles.destroy} onClick={handleRemoveClick}>
          x
        </button>
      </div>
    </li>
  );
};

export default TodoListItem;
