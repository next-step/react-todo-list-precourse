import React from "react";
import TodoItem from "./TodoItem";

function TodoList({ todos, onRemove, onComplete }) {
  return (
    <ul>
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          onRemove={onRemove}
          onComplete={onComplete}
        />
      ))}
    </ul>
  );
}

export default TodoList;
