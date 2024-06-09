import React from 'react';

function Header() {
  return (
    <header className="header">
      <h1>todos</h1>
      <div className="new-todo-wrapper">
        <input className="new-todo" placeholder="What needs to be done?" />
      </div>
    </header>
  );
}

export default Header;
