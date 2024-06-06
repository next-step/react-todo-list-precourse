import React from "react";
import TodoItem from "./TodoItem";

function TodoList({ todos, onToggle, onDeleteTodo }) {
  return React.createElement(
    "ul",
    null,
    todos.map((todo) =>
      React.createElement(TodoItem, {
        key: todo.id,
        todo: todo,
        onToggle: onToggle,
        onDelete: onDeleteTodo,
      })
    )
  );
}

export default TodoList;
