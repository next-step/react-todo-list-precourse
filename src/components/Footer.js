import React from "react";

function Footer({ todoList }) {
    return (
        <footer className="footer">
          <span className="todo-count">1 item left!</span>
          <ul className="filters">
            <li>
              <a className="selected" href="#/">All</a>
            </li>
            <li>
              <a className="selected" href="#/active">Active</a>
            </li>
            <li>
              <a className="selected" href="#/completed">Completed</a>
            </li>
          </ul>
          <button className="clear-completed">Clear completed</button>
        </footer>
    );
}

export default Footer;