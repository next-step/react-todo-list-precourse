import React from "react";

function Header() {
  return (
    <header className="header">
      <h1>todos</h1>
      <div className="input-container">
        <input class="todo-input" type="text" placeholder="할 일 입력" />
      </div>
    </header>
  );
}

export default Header;
