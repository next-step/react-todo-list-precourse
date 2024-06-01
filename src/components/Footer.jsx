import React from "react";

function Footer({ todoList, setFilter }) {
    console.log(todoList);
    return (
        <footer className="footer">
          <ul className="filters">
            <li>
              <a className="selected" href="#/" onClick={() => setFilter("all")}>All</a>
            </li>
            <li>
              <a className="selected" href="#/active" onClick={() => setFilter("active")}>Active</a>
            </li>
            <li>
              <a className="selected" href="#/completed" onClick={() => setFilter("completed")}>Completed</a>
            </li>
          </ul>
        </footer>
    );
}

export default Footer;