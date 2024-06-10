import React from "react";
import { MdCheckBox, MdCheckBoxOutlineBlank } from "react-icons/md";

function TaskItem({ task, index, deleteTask, toggleTaskCompletion }) {
  return (
    <li> {task.completed ?
      <MdCheckBox className="checkbox-icon" onClick={() => toggleTaskCompletion(index)} /> :
      <MdCheckBoxOutlineBlank className="checkbox-icon" onClick={() => toggleTaskCompletion(index)} />}
      <span className={`text ${task.completed ? "completed" : ""}`}> {task.text}</span>
      <button className="delete-button" onClick={() => deleteTask(index)}> Delete </button>
    </li>
  );
}

export default TaskItem;
