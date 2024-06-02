import React, { useState, useEffect } from 'react';
import './App.css';
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";
import FilterButtons from './components/FilterButtons';

function App() {
  const [todos, setTodos] = useState(() => {
    const savedTodos = localStorage.getItem('todos');
    return savedTodos ? JSON.parse(savedTodos) : [];
  });
  const [filter, setFilter] = useState('all');

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const addTodo = (newTodo) => {
    if (!newTodo) {
      alert('할 일을 입력해주세요!');
      return;
    }
    setTodos([...todos, { id: Date.now(), text: newTodo, completed: false }]);
  };

  const toggleTodo = (id) => {
    const newTodos = todos.map(todo =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    );
    setTodos(newTodos);
  };

  const deleteTodo = (id) => {
    const updatedTodos = todos.filter(todo => todo.id !== id);
    setTodos(updatedTodos);
  };

  
  const clearCompleted = () => {
    const activeTodos = todos.filter(todo => !todo.completed);
    setTodos(activeTodos);
  };

  const filterTodos = (newFilter) => {
    setFilter(newFilter);
  };

  const filteredTodos = todos.filter(todo => {
    if (filter === 'active') return !todo.completed;
    if (filter === 'completed') return todo.completed;
    return true;
  });

  return (
    <div>
      <header>todos</header>
      <div className="app-container">
        <TodoInput onAddTodo={addTodo} />
        <TodoList todos={filteredTodos} onToggle={toggleTodo} onDeleteTodo={deleteTodo} />
        <div className="footer">
          <span>{todos.filter(todo => !todo.completed).length} item left</span>
          <FilterButtons filter={filter} onFilterChange={filterTodos} />
          <button onClick={clearCompleted} className='clear-completed'>Clear completed</button>
        </div>
      </div>
    </div>
  );
}

export default App;
