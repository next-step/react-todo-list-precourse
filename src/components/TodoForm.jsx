import React, { useState } from 'react';
import handleChange from './handlers/handleChange';

function TodoForm({ addTodo }) {
  const [input, setInput] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.trim()) {
      addTodo(input);
      setInput('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="todo-form">
      <div className="input-container">
        <input
          type="text"
          className="new-todo"
          value={input}
          onChange={(e) => handleChange(e, setInput)}
          placeholder="What needs to be done?"
          autoFocus
        />
        <button type="submit" className="add-todo">Add</button>
      </div>
    </form>
  );
}

export default TodoForm;
