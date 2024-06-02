import React, { useState } from 'react';
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';

export default function App() {
  const [todos, setTodos] = useState([]);

  const addTodo = todo => {
    if (todo.trim().length === 0) return;
    setTodos([...todos, { id: Date.now(), text: todo, completed: false }]);
  }

  const deleteTodo = id => setTodos(todos.filter(todo => todo.id !== id));

  return createApp(todos, addTodo, deleteTodo);
}

function createApp(todos, addTodo, deleteTodo) {
  return React.createElement(
    'div',
    null,
    React.createElement('h1', null, 'Todo List'),
    React.createElement(TodoInput, { addTodo }),
    React.createElement(TodoList, { todos, deleteTodo }),
  );
}