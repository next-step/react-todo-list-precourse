// src/components/todoForm/todoInput.jsx
import React from "react";

const TodoInput = ({ inputValue, setInputValue }) => {
  return (
    <input
      type="text"
      value={inputValue}
      onChange={(e) => setInputValue(e.target.value)}
      placeholder="What needs to be done?"
      className="todo-input"
    />
  );
};

export default TodoInput;
