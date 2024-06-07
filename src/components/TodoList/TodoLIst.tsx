import { useContext } from 'react';
import styles from './TodoList.module.css';
import TodoListItem from './TodoListItem';
import TodoContext from '../../context/TodoContext';

const TodoList = () => {
  const value = useContext(TodoContext);
  const todoList = value?.state.todoList;
  const filter = value?.state.filter;

  const filteredTodoList = todoList?.filter(todoListItem => {
    if (filter === 'all') return true;
  });

  return (
    <ul className={styles['todo-list']}>
      {filteredTodoList?.map(todoListItem => (
        <TodoListItem key={todoListItem.no} todoListItem={todoListItem} />
      ))}
    </ul>
  );
};

export default TodoList;
