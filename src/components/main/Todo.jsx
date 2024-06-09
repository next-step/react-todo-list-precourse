import { useState } from "react";
import { allCheckTodo, filterTodos } from "../../util/todoUtilFunc";
import CheckBox from "../form/CheckBox";
import ListItem from "../form/ListItem";
import ListBottom from "../form/ListBottom";
import "../../style/Todo.css";

export default function Todo({ todos, setTodos }) {
  const [filter, setFilter] = useState("All");
  const filtered = filterTodos(todos, filter);
  if (todos.length === 0) return null;
  return (
    <div className="todo-container">
      <CheckBox
        className={"allCheck"} checked={todos.every((todo) => todo.done)}
        handleCheck={(e) => allCheckTodo(todos, setTodos, e.target.checked)}
      />
      <ul className="todo-wrapper">
        {filtered.map((todo) => ( <ListItem {...{ todos, setTodos, todo }} key={todo.id} />))}
      </ul>
      <ListBottom {...{ todos, setTodos, filter, setFilter }} />
    </div>
  );
}
