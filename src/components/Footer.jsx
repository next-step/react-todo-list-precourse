import React from 'react';
import TodoFilters from './TodoFilters';

function Footer() {
  return (
    <footer className="footer">
      <span className="todo-count"><strong>0</strong> items left</span>
      <TodoFilters />
      <button className="clear-completed">Clear completed</button>
    </footer>
  );
}

export default Footer;
