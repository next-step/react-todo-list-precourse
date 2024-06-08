import React, { useState } from 'react';

function TodoForm({ addTodo }) {
  const [input, setInput] = useState('');

  const handleChange = (e) => {
    setInput(e.target.value);
  };

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
          onChange={handleChange}
          placeholder="What needs to be done?"
          autoFocus
        />
        <button type="submit" className="add-todo">Add</button>
      </div>
    </form>
  );
}

export default TodoForm;
