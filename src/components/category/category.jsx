import React, { useState } from "react";
import "./category.css";

function Category({ setActive, active }) {
  const category = ["All", "Active", "Completed"];

  const handleClick = (cat) => {
    setActive(() => {
      return cat;
    });
  };
  return (
    <div className="category">
      <div
        className="all"
        style={{
          color: active == 0 ? "#E33769" : "",
          textDecoration: active == 0 ? "underline" : "",
        }}
        onClick={() => handleClick(0)}
      >
        {category[0]}
      </div>
      <div>|</div>
      <div
        className="active"
        style={{
          color: active == 1 ? "#E33769" : "",
          textDecoration: active == 1 ? "underline" : "",
        }}
        onClick={() => handleClick(1)}
      >
        {category[1]}
      </div>
      <div>|</div>
      <div
        className="completed"
        style={{
          color: active == 2 ? "#E33769" : "",
          textDecoration: active == 2 ? "underline" : "",
        }}
        onClick={() => handleClick(2)}
      >
        {category[2]}
      </div>
    </div>
  );
}

export default Category;
