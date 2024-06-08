import { useState } from 'react';
import { TodoListItemTypes, FilterType } from '../context/types/TodoTypes';

export const useTodoState = () => {
  const [todoList, setTodoList] = useState<Array<TodoListItemTypes>>([]);
  const [filter, setFilter] = useState<FilterType>('all');

  return {
    todoList,
    setTodoList,
    filter,
    setFilter,
  };
};
