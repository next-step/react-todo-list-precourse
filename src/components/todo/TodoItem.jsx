import React from "react";

function TodoItem({ todoItem, onDelete, onToggle }) {
  return (
    <li className="todo-item">
      <div className="view">
        <input className="toggle" type="checkbox" id="todo-item-toggle"
          checked={todoItem.checked || ""}
          onChange={() => onToggle(todoItem.id)}
        />
        <label id="todo-item-label">{todoItem.text}</label>
        <button className="destroy" id="todo-item-button"
          onClick={() => onDelete(todoItem.id)}>X</button>
      </div>
    </li>
  );
}

export default TodoItem;
