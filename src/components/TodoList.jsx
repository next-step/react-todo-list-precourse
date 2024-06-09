import { useState } from "react";
import CheckBox from "./CheckBox";
import toggleTodo from "../utils/toggleTodo";
import DeleteButton from "./DeleteButton";
import deleteTodo from "../utils/deleteTodo";

const TodoList = ({ todos, setTodos}) => {
  const [completedTodos, setCompletedTodos] = useState([]);

  return (
    <ul>
      {todos.map((todo, index) => (
        <li key={index} className={completedTodos.includes(index) ? "completed" : ""}>
          <CheckBox
            isChecked={completedTodos.includes(index)}
            onChange={() => toggleTodo(index, completedTodos, setCompletedTodos)}/>
          <div className="todo">{todo}</div>
          <DeleteButton index={index} todos={todos} setTodos={setTodos}/>
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
