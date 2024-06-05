import React, { useState } from 'react';
import "../styles/TodoForm.css";
const TodoForm = ({ addTodo }) => {
  const [value, setValue] = useState("");

  const handleSubmit = e => {
    e.preventDefault();

    if (value.trim().length) {
      addTodo(value);
      setValue("");
    }
  };

  return (
    <form className="todo-form" onSubmit={handleSubmit}>
      <input
        type="text"
        className="todo-input"
        value={value}
        onChange={e => setValue(e.target.value)}
        placeholder="What needs to be done?"
      />
    </form>
  );
}

export default TodoForm;
