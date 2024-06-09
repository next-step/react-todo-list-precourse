import React from "react";
import { TaskInput, AddTaskButton, TaskList, addTask, deleteTask, toggleTaskCompletion, handleInputChange, handleKeyPress } from "./index.jsx";

function MainComponent({ todos, setTodos, newTask, setNewTask }) {
  return (<div>
    <TaskInput value={newTask}
      onChange={(e) => handleInputChange(e, setNewTask)}
      onKeyPress={(e) => handleKeyPress(e, newTask, setTodos, setNewTask)} />
    <AddTaskButton onClick={() => addTask(newTask, setTodos, setNewTask)} />
    <TaskList todos={todos}
      deleteTask={(index) => deleteTask(index, setTodos, todos)}
      toggleTaskCompletion={(index) => toggleTaskCompletion(index, setTodos, todos)} />
  </div> );}
export default MainComponent;
