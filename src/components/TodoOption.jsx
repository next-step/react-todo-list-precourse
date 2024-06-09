import React, { useContext } from "react";
import { FilterContext } from "../context/FilterContext";

function TodoOption() {
  const { filter, setFilter } = useContext(FilterContext);

  const handleFilterChange = (e) => {
    setFilter(e.target.value);
  };

  return (
    <div>
        <select value={filter} onChange={handleFilterChange}>
          <option value="all">All</option>
          <option value="completed">Completed</option>
          <option value="uncompleted">Uncompleted</option>
        </select>
    </div>
  );
}

export default TodoOption;
