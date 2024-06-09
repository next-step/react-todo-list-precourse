import React from "react";
import "../styles/Task.css";

function Task({ task, toggleTaskCompletion, deleteTask }) {
  const handleButtonClick = () => {
    toggleTaskCompletion(task.id);
  };

  const handleDeleteClick = () => {
    deleteTask(task.id);
  };

  return (
    <div className={`task ${task.completed ? "completed" : ""}`}>
      <div className="task-button--complete" onClick={handleButtonClick}>
        {task.completed && (
          <span className="task__checkmark">&#10003;</span> // �����ڵ� üũ��ũ
        )}
      </div>
      <div className="task-content">{task.text}</div>
      <div className="task-button--delete" onClick={handleDeleteClick}>
        <div className="task__xmark">&#10005;</div>
      </div>
    </div>
  );
}

export default Task;
