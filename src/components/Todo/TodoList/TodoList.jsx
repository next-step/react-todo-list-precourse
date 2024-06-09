import React from "react";
import TodoItem from "../TodoItem/TodoItem";
import "./TodoList.css";

const TodoList = ({ todos, deleteTodo, checkTodoComplete }) => {
  return (
    <div className="todoList">
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          deleteTodo={deleteTodo}
          checkTodoComplete={checkTodoComplete}
        />
      ))}
    </div>
  );
};

export default TodoList;
