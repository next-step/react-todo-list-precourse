import React from "react";

function FilterButton({ name, isActive, onClick }) {
  return React.createElement(
    "button",
    {
      className: isActive ? "active" : "",
      onClick: onClick,
      "aria-pressed": isActive ? "true" : "false",
    },
    name
  );
}

function FilterButtons({ filter, onFilterChange }) {
  const filters = ["all", "active", "completed"];

  return React.createElement(
    "div",
    { className: "filter-buttons" },
    filters.map((type) =>
      React.createElement(FilterButton, {
        key: type,
        name: type.charAt(0).toUpperCase() + type.slice(1),
        isActive: filter === type,
        onClick: () => onFilterChange(type),
      })
    )
  );
}

export default FilterButtons;
