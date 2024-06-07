import React from 'react';

function TodoFilters() {
  return (
    <ul className="filters">
      <li>
        <a href="#/" className="selected">All</a>
      </li>
      <li>
        <a href="#/active">Active</a>
      </li>
      <li>
        <a href="#/completed">Completed</a>
      </li>
    </ul>
  );
}

export default TodoFilters;
