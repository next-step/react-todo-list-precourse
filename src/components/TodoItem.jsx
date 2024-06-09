import React from "react";

function TodoItem({ todo, onDelete, onToggle }) {
  return (
    <li className={`todo-item ${todo.completed ? "completed" : ""}`}>
      <input
        className="toggle"
        type="checkbox"
        checked={todo.completed}
        onChange={() => onToggle(todo.id)}
      ></input>
      <label className="todo-item-label">{todo.text}</label>
      <button className="delete" onClick={() => onDelete(todo.id)}>
        ⨯
      </button>
    </li>
  );
}

export default TodoItem;
