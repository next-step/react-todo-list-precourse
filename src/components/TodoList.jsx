import React from "react";
import TodoItem from "./TodoItem";

function TodoList({ todos, delTodo }) {
  return (
    <ul className="todo-list">
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} onDelete={delTodo} />
      ))}
    </ul>
  );
}

export default TodoList;
