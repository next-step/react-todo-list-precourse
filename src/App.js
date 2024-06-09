import React, { useState } from 'react';
import Header from './components/Header.jsx';
import TodoList from './components/TodoList.jsx';
import Footer from './components/Footer.jsx';
import './App.css';

function App() {
    const [todos, setTodos] = useState([]);
    const [filter, setFilter] = useState('all');

    const addTodo = (text) => {
        setTodos([...todos, { id: Date.now(), text, completed: false }]);
    };

    const toggleTodo = (id) => {
        setTodos(
          todos.map((todo) =>
            todo.id === id ? { ...todo, completed: !todo.completed } : todo
          )
        );
      };

    const deleteTodo = (id) => {
        setTodos(todos.filter((todo) => todo.id !== id));
    };

    const toggleAllTodos = () => {
        const allCompleted = todos.every((todo) => todo.completed);
        setTodos(todos.map((todo) => ({ ...todo, completed: !allCompleted })));
    };

    const clearCompleted = () => {
        setTodos(todos.filter((todo) => !todo.completed));
    };

    const filteredTodos = todos.filter((todo) => {
        if (filter === 'active') return !todo.completed;
        if (filter === 'completed') return todo.completed;
        return true;
    });

    return React.createElement(
        'div',
        { className: 'App' },
        React.createElement(Header, { addTodo: addTodo, toggleAllTodos: toggleAllTodos }),
        React.createElement(
          'div',
          { className: 'todo-list-wrapper' },
          React.createElement(
            'div',
            { className: 'todo-list-container' },
            React.createElement(TodoList, { todos: filteredTodos, toggleTodo: toggleTodo, deleteTodo: deleteTodo })
          ),
          React.createElement(Footer, {
            hasTodos: todos.length,
            remainingCount: todos.filter((todo) => !todo.completed).length,
            clearCompleted: clearCompleted,
            currentFilter: filter,
            setFilter: setFilter
          })
        )
      );
}

export default App;