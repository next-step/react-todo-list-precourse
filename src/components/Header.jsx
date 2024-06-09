import React, { useState } from "react";

function Header({ addTodo }) {
  const [newTodo, setNewTodo] = useState("");

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleAddTodo();
    }
  };

  const handleAddTodo = () => {
    if (newTodo.trim() !== "") {
      addTodo(newTodo);
      setNewTodo("");
    }
  };

  return (
    <header className="header">
      <h1>todos</h1>
      <div className="input-container">
        <input
          className="todo-input"
          type="text"
          placeholder="할 일 입력"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          onKeyDown={handleKeyDown}
        />
      </div>
    </header>
  );
}

export default Header;
