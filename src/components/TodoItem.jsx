import React from "react";

function TodoItem({ todo, index, removeTodo, toggleTodo }) {
  return (
    <div style={{ textDecoration: todo.done ? "line-through" : "none" }}>
        <span onClick={() => toggleTodo(index)}>O</span>
        {todo.text}
        <button onClick={() => removeTodo(index)}>X</button>
    </div>
  );
}

export default TodoItem;
