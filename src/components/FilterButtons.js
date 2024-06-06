import React from "react";

function FilterButtons({ filter, onFilterChange }) {
  return React.createElement(
    "div",
    { className: "filter-buttons" },
    React.createElement(
      "button",
      {
        className: filter === "all" ? "active" : "",
        onClick: () => onFilterChange("all"),
      },
      "All"
    ),
    React.createElement(
      "button",
      {
        className: filter === "active" ? "active" : "",
        onClick: () => onFilterChange("active"),
      },
      "Active"
    ),
    React.createElement(
      "button",
      {
        className: filter === "completed" ? "active" : "",
        onClick: () => onFilterChange("completed"),
      },
      "Completed"
    )
  );
}

export default FilterButtons;
