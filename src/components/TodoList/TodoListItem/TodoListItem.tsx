import { TodoListItemTypes } from '../../../types/todoTypes';
import styles from './TodoListItem.module.css';
import TodoContext from '../../../context/TodoContext';
import { useContext } from 'react';
import InputField from '../../Input/InputField/InputField';
import TodoContent from './TodoContent/TodoContent';

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
      <TodoContent
        todo={todoListItem.todo}
        done={todoListItem.done}
        onRemove={() => value?.actions.removeTodo(todoListItem.no)}
      />
    </li>
  );
};

export default TodoListItem;
