import { useState } from 'react';
import { Todo } from '../types/HookTypes';

const useFilter = (todos: Todo[]) => {
  const [filter, setFilter] = useState<string>('all');

  const handleFilterChange = (newFilter: string) => {
    setFilter(newFilter);
  };

  const filteredTodos = todos.filter((todo) => {
    if (filter === 'active') return !todo.isChecked;
    if (filter === 'completed') return todo.isChecked;
    return true;
  });

  return {
    filter,
    handleFilterChange,
    filteredTodos,
  };
};

export default useFilter;
