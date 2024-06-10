import React from "react";
import TodoItem from "./todoItem";
import "./todoList.css";

const TodoList = ({ todos, toggleComplete, deleteTodo }) => {
  return (
    <ul className="todo-list">
      {todos.map((todo, index) => (
        <TodoItem
          key={index}
          todo={todo}
          index={index}
          toggleComplete={toggleComplete}
          deleteTodo={deleteTodo}
        />
      ))}
    </ul>
  );
};

export default TodoList;
