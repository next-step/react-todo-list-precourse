import React, { useState, useEffect } from "react";
import "./styles/App.css";
import Title from "./components/Title";
import TextField from "./components/TextField";
import FilterButton from "./components/FilterButton";
import TodoList from "./components/TodoList";

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [selectedRole, setSelectedRole] = useState("All");

  useEffect(() => {
    const storedTasks = localStorage.getItem("tasks");
    if (storedTasks) {
      setTasks(JSON.parse(storedTasks));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const generateId = () => {
    return Date.now() + Math.random().toString(36);
  };

  const handleEnter = (newTask) => {
    setTasks([...tasks, { id: generateId(), text: newTask, completed: false }]);
  };

  const handleFilterClick = (role) => {
    setSelectedRole(role);
  };

  const toggleTaskCompletion = (id) => {
    const newTasks = tasks.map((task) => (task.id === id ? { ...task, completed: !task.completed } : task));
    setTasks(newTasks);
  };

  const deleteTask = (id) => {
    const newTasks = tasks.filter((task) => task.id !== id);
    setTasks(newTasks);
  };

  const filteredTasks = tasks.filter((task) => {
    if (selectedRole === "All") return true;
    if (selectedRole === "Active") return !task.completed;
    if (selectedRole === "Completed") return task.completed;
    return true;
  });

  return (
    <div id="app">
      <Title />
      <TextField onEnter={handleEnter} />
      <div className="filterButton-container">
        <FilterButton role="All" selectedRole={selectedRole} onClick={handleFilterClick} />
        <FilterButton role="Active" selectedRole={selectedRole} onClick={handleFilterClick} />
        <FilterButton role="Completed" selectedRole={selectedRole} onClick={handleFilterClick} />
      </div>
      <TodoList tasks={filteredTasks} toggleTaskCompletion={toggleTaskCompletion} deleteTask={deleteTask} />
    </div>
  );
};

export default App;
