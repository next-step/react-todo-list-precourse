import React from "react";

function TodoItem({ todo }) {
  return (
    <li className="todo-item">
      <input className="toggle" type="checkbox"></input>
      <label className="todo-item-label">{todo.text}</label>
      <button className="delete">⨯</button>
    </li>
  );
}

export default TodoItem;
