import React from "react";

const TodoItem = ({ task, toggleComplete, deleteTodo, editTodo }) => {
  return (
    <div className="TodoItem">
      <input type="checkbox" className="toggle-box" onClick={() => toggleComplete(task.id)} />

      <p className={`${task.completed ? "completed" : ""}`} >
        {task.task}
      </p>

      <div className="set-btn">
        <button className="edit-btn" onClick={() => editTodo(task.id)}>Edit</button>
        <button className="delete-btn" onClick={() => deleteTodo(task.id)}>Delete</button>
      </div>
    </div>
  );
};

export default TodoItem;
