import { useState, useEffect } from 'react';

import { Todo } from '../interfaces/TodoListInterface';

import { Filter } from '../util/Filter';

export const useTodos = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [newTodo, setNewTodo] = useState<string>('');
  const [currentFilter, setCurrentFilter] = useState<Filter>(Filter.All);
  const [isComposing, setIsComposing] = useState<boolean>(false);

  useEffect(() => {
    const storedTodos = localStorage.getItem('todos');
    if (storedTodos) {
      setTodos(JSON.parse(storedTodos));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const addTodo = (text: string) => {
    const newTodos: Todo[] = [
      ...todos,
      { id: Date.now(), text, completed: false },
    ];
    setTodos(newTodos);
  };

  const toggleTodo = (id: number) => {
    const updatedTodos: Todo[] = todos.map((todo) =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    );
    setTodos(updatedTodos);
  };

  const deleteTodo = (id: number) => {
    const updatedTodos: Todo[] = todos.filter((todo) => todo.id !== id);
    setTodos(updatedTodos);
  };

  const clearCompleted = () => {
    const updatedTodos: Todo[] = todos.filter((todo) => !todo.completed);
    setTodos(updatedTodos);
  };

  const toggleAllTodos = () => {
    const allCompleted = todos.every((todo) => todo.completed);
    const updatedTodos = todos.map((todo) => ({
      ...todo,
      completed: !allCompleted,
    }));
    setTodos(updatedTodos);
  };

  const filteredTodos = todos.filter((todo) => {
    switch (currentFilter) {
      case Filter.Active:
        return !todo.completed;
      case Filter.Completed:
        return todo.completed;
      default:
        return true;
    }
  });

  return {
    todos,
    newTodo,
    currentFilter,
    isComposing,
    filteredTodos,
    setNewTodo,
    setCurrentFilter,
    setIsComposing,
    addTodo,
    toggleTodo,
    deleteTodo,
    clearCompleted,
    toggleAllTodos,
  };
};
