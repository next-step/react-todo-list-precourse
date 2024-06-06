import React from "react";
import "./TodoItem.css";

function TodoItem({ todo, onToggle, onDelete }) {
  return React.createElement(
    "div",
    { className: "todo-item" },
    React.createElement("input", {
      type: "checkbox",
      checked: todo.completed,
      onChange: () => onToggle(todo.id),
    }),
    React.createElement(
      "span",
      {
        className: `todo-text ${todo.completed ? "completed" : ""}`,
      },
      todo.text
    ),
    React.createElement(
      "button",
      {
        onClick: () => onDelete(todo.id),
        className: "delete-btn",
      },
      "삭제"
    )
  );
}

export default TodoItem;
