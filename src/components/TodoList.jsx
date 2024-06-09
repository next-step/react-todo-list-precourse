import React from "react";
import TodoItem from "./TodoItem";

function TodoList({ todos, delTodo, toggleTodo }) {
  return (
    <ul className="todo-list">
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          onDelete={delTodo}
          onToggle={toggleTodo}
        />
      ))}
    </ul>
  );
}

export default TodoList;
