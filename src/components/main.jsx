import React, { useState } from 'react';
import TodoInput from './TodoInput';
import TodoList from './TodoList';
import FilterButtons from './FilterButtons';
import './main.css';

const Main = () => {
  const [todos, setTodos] = useState([]);
  const [filter, setFilter] = useState('all');

  const addTodo = (text) => {
    if (text.trim() === '') return;
    setTodos([...todos, { text, completed: false }]);
  };

  const toggleTodo = (index) => {
    const newTodos = [...todos];
    newTodos[index].completed = !newTodos[index].completed;
    setTodos(newTodos);
  };

  const deleteTodo = (index) => {
    const newTodos = todos.filter((_, i) => i !== index);
    setTodos(newTodos);
  };

  const filteredTodos = todos.filter(todo => {
    if (filter === 'completed') return todo.completed;
    if (filter === 'active') return !todo.completed;
    return true;
  });

  return (
    <div className="todoapp">
      <h1 className="header">Todo List</h1>
      <TodoInput addTodo={addTodo} />
      <TodoList todos={filteredTodos} toggleTodo={toggleTodo} deleteTodo={deleteTodo} />
      <div className="footer">
        <FilterButtons setFilter={setFilter} />
      </div>
    </div>
  );
};

export default Main;
