import { useContext } from 'react';
import TodoContext from '../context/TodoContext';

export const useFilteredTodoList = () => {
  const value = useContext(TodoContext);
  const { todoList, filter } = value?.state || { todoList: [], filter: 'all' };

  const filteredTodoList = todoList?.filter(todoListItem => {
    if (filter === 'all') return true;
    if (filter === 'active') return !todoListItem.done;
    if (filter === 'completed') return todoListItem.done;
  });

  return filteredTodoList;
};
