import React, { useContext } from "react";
import { FilterContext } from "../context/FilterContext";
import { TodoContext } from "../context/TodosContext";
import "../styles/TodoOption.css";

function TodoOption() {
  const { filter, setFilter } = useContext(FilterContext);
  const { todos, removeAllTodo } = useContext(TodoContext);

  const handleFilterChange = (e) => {
    setFilter(e.target.value);
  };

  const activeTodos = todos.filter((todo) =>!todo.done).length;

  return (
    <div className="footer">
      {todos.length > 0 ? (
        <div className="option-menu">
          <div>{activeTodos} items left!</div>
          <select value={filter} onChange={handleFilterChange}>
            <option value="All">All</option>
            <option value="Active">Active</option>
            <option value="Completed">Completed</option>
          </select>
          <div className="removeall" onClick={removeAllTodo}>Clear completed </div>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
}

export default TodoOption;
