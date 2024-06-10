import { useContext } from 'react';
import TodoContext from '../context/TodoContext';

export const useIncompleteTodosCount = () => {
  const value = useContext(TodoContext);

  return value?.state.todoList.filter(todo => !todo.done).length;
};
