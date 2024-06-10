import React from "react";
import TaskItem from "./TaskItem.jsx";

function TaskList({ todos, deleteTask, toggleTaskCompletion }) {
  return (
    <ol> {todos.map((task, index) => (
      <TaskItem
        key={index} task={task} index={index}
        deleteTask={deleteTask}
        toggleTaskCompletion={toggleTaskCompletion} />
    ))}
    </ol>);
}

export default TaskList;
