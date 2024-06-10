import { useFilteredTodoList } from '../../hooks/useFilteredTodoList';
import styles from './TodoList.module.css';
import TodoListItem from './TodoListItem/TodoListItem';

const TodoList = () => {
  const filteredTodoList = useFilteredTodoList();

  return (
    <ul className={styles['todo-list']}>
      {filteredTodoList?.map(todoListItem => (
        <TodoListItem key={todoListItem.no} todoListItem={todoListItem} />
      ))}
    </ul>
  );
};

export default TodoList;
