import React, { useState } from 'react';
import './index.css';

function App() {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState('');
  const [filter, setFilter] = useState('all');

  const handleNewTodoChange = (e) => {
    setNewTodo(e.target.value);
  };

  const handleNewTodoKeyPress = (e) => {
    if (e.key === 'Enter') {
      addTodo();
    }
  };

  const addTodo = () => {
    if (newTodo.trim() === '') {
      return;
    }
    const newTodoItem = createTodo(newTodo);
    setTodos([...todos, newTodoItem]);
    setNewTodo('');
  };

  const createTodo = (text) => {
    return {
      id: Date.now(),
      text: text,
      completed: false,
    };
  };

  return (
    <div className="todoapp">
      <header className="header">
        <h1>todos</h1>
        <div className="input-container">
          <input
            className="new-todo"
            placeholder="What needs to be done?"
            value={newTodo}
            onChange={handleNewTodoChange}
            onKeyPress={handleNewTodoKeyPress}
          />
        </div>
      </header>
      <section className="main">
        <ul className="todo-list">
          {todos.map(todo => (
            <li key={todo.id}>{todo.text}</li>
          ))}
        </ul>
      </section>
    </div>
  );
}

export default App;