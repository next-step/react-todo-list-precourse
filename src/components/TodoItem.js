import React from "react";
import "./TodoItem.css";

const handleToggle = (onToggle, id) => () => onToggle(id);
const handleDelete = (onDelete, id) => () => onDelete(id);

function TodoItem({ todo, onToggle, onDelete }) {
  const { id, completed, text } = todo;
  const itemId = `todo-${id}`;
  const itemStatusClass = completed ? "completed" : "";

  return React.createElement(
    "div",
    { className: "todo-item" },
    React.createElement("input", {
      type: "checkbox",
      checked: completed,
      onChange: handleToggle(onToggle, id),
      id: itemId,
    }),
    React.createElement(
      "label",
      {
        htmlFor: itemId,
        className: `todo-text ${itemStatusClass}`,
      },
      text
    ),
    React.createElement(
      "button",
      {
        onClick: handleDelete(onDelete, id),
        className: "delete-btn",
      },
      "삭제"
    )
  );
}

export default TodoItem;
