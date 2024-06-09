import React from "react";

function TodoItem({ todo, onRemove }) {
  return (
    <li>
      <div className="todo-field">{todo.text}</div>
      <button className="delete-button" onClick={() => onRemove(todo.id)}>삭제</button>
    </li>
  );
}

export default TodoItem;
