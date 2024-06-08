import { TodoListItemTypes } from '../../../context/TodoContext';
import styles from './TodoListItem.module.css';
import TodoContext from '../../../context/TodoContext';
import { useContext } from 'react';
import InputField from '../../Input/InputField/InputField';

interface TodoListItemProps {
  todoListItem: TodoListItemTypes;
}

const TodoListItem = ({ todoListItem }: TodoListItemProps) => {
  const value = useContext(TodoContext);

  return (
    <li className={styles['todo-list-item']}>
      <InputField
        type="checkbox"
        label={`checkbox-${todoListItem.no}`}
        checked={todoListItem.done}
        onChange={() => value?.actions.toggleDone(todoListItem.no)}
      />
      <div className={styles['todo-list-container']}>
        <input
          className={`${styles['todo-label']} ${todoListItem.done && styles['line-through']}`}
          type="text"
          value={todoListItem.todo}
          disabled
        />
        <button
          type="button"
          className={styles.destroy}
          onClick={() => value?.actions.removeTodo(todoListItem.no)}
        >
          x
        </button>
      </div>
    </li>
  );
};

export default TodoListItem;
