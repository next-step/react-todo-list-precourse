import { useContext } from 'react';
import styles from './TodoList.module.css';
import TodoListItem from './TodoListItem/TodoListItem';
import TodoContext from '../../context/TodoContext';

const TodoList = () => {
  const value = useContext(TodoContext);
  const todoList = value?.state.todoList;
  const filter = value?.state.filter;

  const filteredTodoList = todoList?.filter(todoListItem => {
    if (filter === 'all') return true;
    if (filter === 'active') return !todoListItem.done;
    if (filter === 'completed') return todoListItem.done;
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
