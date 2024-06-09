import React, { useState } from 'react';
import TodoInput from './TodoInput';
import TodoList from './TodoList';
import './main.css';

const App = () => {
  const [todos, setTodos] = useState([]);

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

  return (
    <div className="todoapp">
      <h1 className="header">todos</h1>
      <TodoInput addTodo={addTodo} />
      <TodoList todos={todos} toggleTodo={toggleTodo} deleteTodo={deleteTodo} />
    </div>
  );
};

export default App;