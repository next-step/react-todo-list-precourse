import { useState } from 'react';
import { TodoListItemTypes, FilterType } from '../types/todoTypes';
import { useLocalStorage } from './useLocalStorage';

export const useTodoState = () => {
  const [todoList, setTodoList] = useLocalStorage<Array<TodoListItemTypes>>('todoList,', []);
  const [filter, setFilter] = useState<FilterType>('all');

  return {
    todoList,
    setTodoList,
    filter,
    setFilter,
  };
};
