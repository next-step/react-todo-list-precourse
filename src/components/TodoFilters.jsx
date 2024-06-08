import React from 'react';

function TodoFilters({ currentFilter, changeFilter }) {
  return (
    <ul className="filters">
      <li>
        <a
          href="#/"
          className={currentFilter === 'all' ? 'selected' : ''}
          onClick={() => changeFilter('all')}
        >
          All
        </a>
      </li>
      <li>
        <a
          href="#/active"
          className={currentFilter === 'active' ? 'selected' : ''}
          onClick={() => changeFilter('active')}
        >
          Active
        </a>
      </li>
      <li>
        <a
          href="#/completed"
          className={currentFilter === 'completed' ? 'selected' : ''}
          onClick={() => changeFilter('completed')}
        >
          Completed
        </a>
      </li>
    </ul>
  );
}

export default TodoFilters;
