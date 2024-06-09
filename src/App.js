import React, { useState } from 'react';
import Header from './components/Header.jsx';
import TodoList from './components/TodoList.jsx';
import Footer from './components/Footer.jsx';

function App() {
    const [todos, setTodos] = useState([]);

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

    return React.createElement(
      'div',
      { className: 'App' },
      React.createElement(Header, { addTodo: addTodo }),
      React.createElement(TodoList, { todos: todos, toggleTodo: toggleTodo, deleteTodo: deleteTodo }),
      React.createElement(Footer, null)
    );
  }

export default App;