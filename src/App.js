import React, { useState } from 'react';
import Header from './components/Header.jsx';
import TodoList from './components/TodoList.jsx';
import Footer from './components/Footer.jsx';
import './App.css';
import {
    addTodo,
    toggleTodo,
    deleteTodo,
    toggleAllTodos,
    clearCompleted,
    getFilteredTodos,
  } from './utils/todoUtils.js';

function App() {
  const [todos, setTodos] = useState([]);
  const [filter, setFilter] = useState('all');
  const filteredTodos = getFilteredTodos(todos, filter);
  const hasTodos = todos.length > 0;
  return React.createElement(
    'div', { className: 'App' },
    React.createElement(Header, {
      addTodo: addTodo(setTodos),
      toggleAllTodos: toggleAllTodos(todos, setTodos),
    }),
    hasTodos && React.createElement(
        'div', { className: 'todo-list-wrapper' },
        React.createElement(
            'div', { className: 'todo-list-container' },
            React.createElement(TodoList, {
            todos: filteredTodos,
            toggleTodo: toggleTodo(setTodos),
            deleteTodo: deleteTodo(setTodos),
            })
        ),
      React.createElement(Footer, {
        hasTodos: hasTodos,
        remainingCount: todos.filter((todo) => !todo.completed).length,
        clearCompleted: clearCompleted(setTodos),
        currentFilter: filter,
        setFilter: setFilter,
      })
    )
  );
}

export default App;
