import { useState } from "react";
import { allCheckTodo, filterTodos } from "../../util/todoUtilFunc";
import CheckBox from "../form/CheckBox";
import ListItem from "../form/ListItem";
import ListBottom from "../form/ListBottom";
import "../../style/Todo.css";

export default function Todo({ todos, setTodos }) {
  const [filter, setFilter] = useState("All");
  const filteredTodos = filterTodos(todos, filter);
  if (todos.length === 0) return null;
  return (
    <div className="todo-container">
      <CheckBox
        className={"allCheck"}
        checked={todos.every((todo) => todo.done)}
        handleCheck={(e) => allCheckTodo(todos, setTodos, e.target.checked)}
      />
      <ul className="todo-wrapper">
        {filteredTodos.map((todo) => (
          <ListItem
            todos={todos}
            setTodos={setTodos}
            key={todo.id}
            todo={todo}
          />
        ))}
      </ul>
      <ListBottom
        todos={todos}
        setTodos={setTodos}
        filter={filter}
        setFilter={setFilter}
      />
    </div>
  );
}
