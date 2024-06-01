import React, { useContext, useEffect, useState } from "react";
import "../styles/FilterBox.css";
import { FilterContext } from "../context/FilterContext";
import { TodosContext } from "../context/TodosContext";

const FilterBox = () => {
  const { setViewState } = useContext(FilterContext);
  const { todos } = useContext(TodosContext);
  const viewChange = (e) => {
    setViewState(e.target.innerText);
  };
  return (
    <div className="filter__box">
      <div>
        TODO:{" "}
        {todos?.length
          ? todos?.filter((todo) => todo.checked === false).length
          : 0}
        개
      </div>
      <div className="filter__btn">
        <span onClick={viewChange}>All</span>
        <span onClick={viewChange}>Active</span>
        <span onClick={viewChange}>Completed</span>
      </div>
    </div>
  );
};

export default FilterBox;
