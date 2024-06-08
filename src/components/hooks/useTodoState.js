import React, { useState } from 'react';
import handleChange from '../handlers/handleChange';
import handleSubmit from '../handlers/handleSubmit';

function TodoForm({ addTodo }) {
  const [input, setInput] = useState('');

  return (
    <form onSubmit={(e) => handleSubmit(e, input, addTodo, setInput)} className="todo-form">
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
