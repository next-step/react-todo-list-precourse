import React from "react";

function TodoItem({ todo, onRemove, onComplete }) {
  return (
    <li className={todo.completed ? "completed" : ""}>
      <span className="todo-field">{todo.text}</span>
      <div className="button-group">
        <button
          className="action-button complete-button"
          onClick={() => onComplete(todo.id)}
        >
          {todo.completed ? "취소" : "완료"}
        </button>
        <button
          className="action-button delete-button"
          onClick={() => onRemove(todo.id)}
        >
          삭제
        </button>
      </div>
    </li>
  );
}

export default TodoItem;
