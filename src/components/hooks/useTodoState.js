import { useState, useEffect } from 'react';
import addTodo from '../feature/addTodo';
import changeFilter from '../feature/changeFilter';
import clearCompleted from '../feature/clearCompleted';
import deleteTodo from '../feature/deleteTodo';
import filterTodos from '../feature/filterTodos';
import toggleComplete from '../feature/toggleComplete';

const useTodoState = () => {
  const [todos, setTodos] = useState([]);
  const [filter, setFilter] = useState('all');
  const [activeCount, setActiveCount] = useState(0);

  useEffect(() => {
    setActiveCount(todos.filter(todo => !todo.completed).length);
  }, [todos]);

  const filteredTodos = filterTodos(todos, filter);

  return {
    todos,
    filter,
    activeCount,
    filteredTodos,
    addTodo: (text) => addTodo(todos, setTodos, text),
    toggleComplete: (index) => toggleComplete(todos, setTodos, index),
    deleteTodo: (index) => deleteTodo(todos, setTodos, index),
    clearCompleted: () => clearCompleted(todos, setTodos),
    changeFilter: (newFilter) => changeFilter(setFilter, newFilter),
  };
};

export default useTodoState;
