import React from "react";
import './main.module.css';

const Footer = ({lists, ShowCompletedToggle, ClearCompleted}) => {
  return (
    <li className="footer">
      <div className="count">
        <p className="count-item">{lists.length}</p>
        <p>items left</p>
      </div>
      <div className="buttons">
        <button onClick={() => ShowCompletedToggle("all")}>All</button>
        <button onClick={() => ShowCompletedToggle("active")}>Active</button>
        <button onClick={() => ShowCompletedToggle("completed")}>
          Completed
        </button>
      </div>
      <div className="clear">
        <button onClick={ClearCompleted}>Clear Completed</button>
      </div>
    </li>
  );
};

export default Footer;
