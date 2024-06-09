import addTask from "./addTask.jsx";

function handleKeyPress(event, newTask, setTodos, setNewTask) {
  if (event.key === "Enter") {
    addTask(newTask, setTodos, setNewTask);
  }
}

export default handleKeyPress;
