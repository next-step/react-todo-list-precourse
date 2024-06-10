import React from "react";
import TodoText from "./todoText";
import ToggleCompleteButton from "./buttons/toggleCompleteButton";
import DeleteButton from "./buttons/deleteButton";
import "./todoItem.css";

const TodoItem = ({ todo, index, toggleComplete, deleteTodo }) => {
  return (
    <il className="todo-item">
      <ToggleCompleteButton
        completed={todo.completed}
        onToggle={() => toggleComplete(index)}
      />
      <TodoText text={todo.text} completed={todo.completed} />
      <DeleteButton onDelete={() => deleteTodo(index)} />
    </il>
  );
};

export default TodoItem;
