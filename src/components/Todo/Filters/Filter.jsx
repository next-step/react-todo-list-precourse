import React from "react";
import "./Filter.css";

const Filters = ({ filterTodos, allCount, completeCount, activeCount }) => {
  return (
    <div className="filters">
      <button className="filterBtn" onClick={() => filterTodos("all")}>
        {" "}
        전체 ({allCount})
      </button>
      <button className="filterBtn" onClick={() => filterTodos("complete")}>
        완료 ({completeCount})
      </button>
      <button className="filterBtn" onClick={() => filterTodos("active")}>
        진행중 ({activeCount})
      </button>
    </div>
  );
};

export default Filters;
