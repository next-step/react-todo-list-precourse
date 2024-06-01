import React, { useContext, useState } from "react";
import "../styles/FilterBox.css";
import { FilterContext } from "../context/FilterContext";

const FilterBox = () => {
  const viewChange = (e) => {};
  return (
    <div className="filter__box">
      <span onClick={viewChange}>All</span>
      <span onClick={viewChange}>Active</span>
      <span onClick={viewChange}>Completed</span>
    </div>
  );
};

export default FilterBox;
