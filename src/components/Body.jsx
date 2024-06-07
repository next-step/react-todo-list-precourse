// Body.jsx
import React, { useState } from 'react';
import TodoForm from './TodoForm';
import TodoList from './TodoList';
import TodoFilters from './TodoFilters';

function Body() {
  const [todos, setTodos] = useState([]);
  const [filter, setFilter] = useState('all');

  const addTodo = (text) => {
    if (text === "") {
      alert('할 일을 입력하세요.');
    } else {
      const newTodo = { text, completed: false };
      setTodos([...todos, newTodo]);
    }
  };

  const toggleComplete = (index) => {
    const newTodos = [...todos];
    newTodos[index].completed = !newTodos[index].completed;
    setTodos(newTodos);
  };

  const deleteTodo = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  const changeFilter = (newFilter) => {
    setFilter(newFilter);
  };

  const filteredTodos = todos.filter(todo => {
    if (filter === 'all') return true;
    if (filter === 'active') return !todo.completed;
    if (filter === 'completed') return todo.completed;
  });

  return (
    <section className="main">
      <TodoForm addTodo={addTodo} />
      <TodoList todos={filteredTodos} toggleComplete={toggleComplete} deleteTodo={deleteTodo} />
      <TodoFilters currentFilter={filter} changeFilter={changeFilter} />
    </section>
  );
}

export default Body;
