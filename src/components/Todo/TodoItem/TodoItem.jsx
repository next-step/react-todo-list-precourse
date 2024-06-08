import React from "react";
import "./TodoItem.css";
const TodoItem = ({ todo }) => {
  return (
    <div className="itemBox">
      <input type="checkbox" className="checkBox" />
      <label htmlFor={`투두: ${todo.id}`}></label>
      <h2 className="todoText">{todo.text}</h2>
    </div>
  );
};

export default TodoItem;
