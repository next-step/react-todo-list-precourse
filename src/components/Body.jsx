// Body.jsx
import React, { useState, useEffect } from 'react';
import TodoForm from './TodoForm';
import TodoList from './TodoList';
import TodoFilters from './TodoFilters';

function Body() {
  const [todos, setTodos] = useState([]);
  const [filter, setFilter] = useState('all');
  const [activeCount, setActiveCount] = useState(0);

  useEffect(() => {
    setActiveCount(todos.filter(todo => !todo.completed).length);
  }, [todos]);

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

  const clearCompleted = () => {
    const newTodos = todos.filter(todo => !todo.completed);
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
      <div className="footer">
        <span className="todo-count"><strong>{activeCount}</strong> items left</span>
        <TodoFilters currentFilter={filter} changeFilter={changeFilter} />
        <a href="#/" className="clear-completed" onClick={(e) => { e.preventDefault(); clearCompleted(); }}>Clear completed</a>
      </div>
    </section>
  );
}

export default Body;
