import React from "react";

function AddTaskButton({ onClick }) {
  return (
    <button className="add-button" onClick={onClick}>
      Add
    </button>
  );
}

export default AddTaskButton;
