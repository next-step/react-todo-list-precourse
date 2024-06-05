import { useContext } from 'react';
import styles from './TodoList.module.css';
import TodoListItem from './TodoListItem';
import TodoContext from '../../context/TodoContext';

const TodoList = () => {
  const value = useContext(TodoContext);
  const todoList = value?.state.todoList;

  console.log(value?.state.todoList);
  return (
    <ul className={styles['todo-list']}>
      {todoList?.map(todoListItem => (
        <TodoListItem key={todoListItem.no} todoListItem={todoListItem} />
      ))}
    </ul>
  );
};

export default TodoList;
