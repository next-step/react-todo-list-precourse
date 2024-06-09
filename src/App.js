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

    const toggleAllTodos = () => {
        const allCompleted = todos.every((todo) => todo.completed);
        setTodos(todos.map((todo) => ({ ...todo, completed: !allCompleted })));
    };

    const clearCompleted = () => {
        setTodos(todos.filter((todo) => !todo.completed));
    };

    return React.createElement(
        'div',
        { className: 'App' },
        React.createElement(Header, { addTodo: addTodo, toggleAllTodos: toggleAllTodos }),
        React.createElement(TodoList, { todos: todos, toggleTodo: toggleTodo, deleteTodo: deleteTodo }),
        React.createElement(Footer, {
            hasTodos: todos.length > 0,
            remainingCount: todos.filter((todo) => !todo.completed).length,
            clearCompleted: clearCompleted
        })
    );
}

export default App;