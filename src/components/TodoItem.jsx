import React from "react";

function TodoItem() {
  return (
    <li className="todo-item">
      <input className="toggle" type="checkbox"></input>
      <label className="todo-item-label">할 일</label>
      <button className="delete">⨯</button>
    </li>
  );
}

export default TodoItem;
