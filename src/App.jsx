import React, { useState } from 'react';
import TodoList from './TodoList';
import TodoForm from './TodoForm';

const App = () => {
  const [todos, setTodos] = useState([]);

  const addTodo = (text) => {
    if (text === '') return;
    const newTodo = { text: text, id: Date.now() };
    setTodos([...todos, newTodo]);
  };

  return (
    <div className="App">
      <h1>TODO</h1>
      <TodoForm addTodo={addTodo} />
      <TodoList todos={todos} />
    </div>
  );
};

export default App;
