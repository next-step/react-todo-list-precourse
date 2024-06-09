import React from "react";
import CheckBox from "./CheckBox";
import { checkTodo, deleteTodo } from "../../util/todoUtilFunc";
import "../../style/ListItem.css";

const ListItem = ({ todos, setTodos, todo }) => {
  return (
    <li className="list-container">
      <CheckBox
        className={`check${todo.id}`}
        checked={todo.done}
        handleCheck={() => checkTodo(todos, setTodos, todo.id)}
      />
      <span className={`${todo.done ? "done" : "notDone"}`}>{todo.text}</span>
      <button onClick={() => deleteTodo(todos, setTodos, todo.id)}>x</button>
    </li>
  );
};
export default ListItem;
