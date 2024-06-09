import React, { useState } from "react";
import "./App.css";
import MainComponent from "./components/MainComponent.jsx";

function App() {
  const [todos, setTodos] = useState([]);
  const [newTask, setNewTask] = useState("");
  return (
    <div className="to-do-list">
      <h1>To-Do-list</h1>
      <MainComponent todos={todos}
        setTodos={setTodos} newTask={newTask}
        setNewTask={setNewTask} />
    </div>);
}
export default App;