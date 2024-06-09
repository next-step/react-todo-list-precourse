import "./styles/App.css";
import Title from "./components/Title";
import TextField from "./components/TextField";
import FilterButton from "./components/FilterButton";
import TodoList from "./components/TodoList";
import { React, useState } from "react";

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

  return (
    <div id="app">
      <Title />
      <TextField onEnter={handleEnter} />
      <div className="filterButton-container">
        <FilterButton role="All" selectedRole={selectedRole} onClick={handleFilterClick} />
        <FilterButton role="Active" selectedRole={selectedRole} onClick={handleFilterClick} />
        <FilterButton role="Completed" selectedRole={selectedRole} onClick={handleFilterClick} />
      </div>
      <TodoList tasks={tasks} />
    </div>
  );
};

export default App;
