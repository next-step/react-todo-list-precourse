import React from "react";
import "../styles/TodoItem.css";

function TodoItem({ todo, index, removeTodo, toggleTodo }) {
  return (
    <div className="todo" style={{ textDecoration: todo.done ? "line-through" : "none" }}>
        <input type="checkbox" onClick={() => toggleTodo(index)}/>
        {todo.text}
        <div onClick={() => removeTodo(index)}>X</div>
    </div>
  );
}

export default TodoItem;
