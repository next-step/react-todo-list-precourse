import React, { useState } from "react";
import "./Category.css";

const Category = ({ setActive, active }) => {
  const category = ["All", "Active", "Completed"];
  return (
    <div className="category">
      <div
        className={`cat ${active === 0 ? "selected" : ""}`}
        onClick={() => setActive(0)}
      >
        {category[0]}
      </div>
      |
      <div
        className={`cat ${active === 1 ? "selected" : ""}`}
        onClick={() => setActive(1)}
      >
        {category[1]}
      </div>
      |
      <div
        className={`cat ${active === 2 ? "selected" : ""}`}
        onClick={() => setActive(2)}
      >
        {category[2]}
      </div>
    </div>
  );
};

export default Category;
