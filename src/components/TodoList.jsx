import React from "react";
import Task from "./Task";
import "../styles/TodoList.css";

function TodoList({ tasks, toggleTaskCompletion, deleteTask }) {
  return (
    <div className="todolist-container">
      <ul className="todolist">
        {tasks.map((task) => (
          <li key={task.id}>
            <Task task={task} toggleTaskCompletion={toggleTaskCompletion} deleteTask={deleteTask} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
