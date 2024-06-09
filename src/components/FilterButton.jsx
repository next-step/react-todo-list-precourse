import { React, useState } from "react";
import "../styles/FilterButton.css";

function FilterButton({ role, selectedRole, onClick }) {
  const isSelected = role === selectedRole;
  return (
    <button
      className={`filterButton filterButton--${role} ${isSelected ? "filterButton--selected" : ""}`}
      onClick={() => onClick(role)}
    >
      {role}
    </button>
  );
}

export default FilterButton;
