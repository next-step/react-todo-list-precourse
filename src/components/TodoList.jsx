import React from "react";
import TodoItem from "./TodoItem";

function TodoList({ todos, onToggle,onDeleteTodo }) {
  return (
    <ul>
      {todos.map((todo) => (
        <TodoItem key = {todo.id} todo={todo} onToggle ={onToggle} onDelete = {onDeleteTodo}/>
      ))}
    </ul>
  );
}

export default TodoList;