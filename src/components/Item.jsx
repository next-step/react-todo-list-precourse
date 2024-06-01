import React from "react";
import "../styles/Item.css";

const Item = ({ todo }) => {
  return (
    <div className="item">
      <input type="checkbox" />
      <span className="item__text">{todo}</span>
    </div>
  );
};

export default Item;
