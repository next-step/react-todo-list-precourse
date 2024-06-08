import { React } from "react";
import Task from "./Task";
import "../styles/TodoList.css";

function TodoList({ tasks }) {
  return (
    <div className="todolist-container">
      <ul className="todolist">
        {tasks.map((task, index) => (
          <li key={index}>
            <Task task={task} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
