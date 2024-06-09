import React, { useState } from 'react';

function Header({ addTodo, toggleAllTodos }) {
  const [input, setInput] = useState("");

  const handleInputChange = (e) => setInput(e.target.value);
  const handleAddTodo = () => {
    if (input.trim()) {
      addTodo(input);
      setInput("");
    }
  };

  return (
    <header className="header">
      <h1>todos</h1>
      <div className="new-todo-wrapper">
        <span className="toggle-all" tabIndex="0" onClick={toggleAllTodos}>▼</span>
        <input
          className="new-todo"
          placeholder="What needs to be done?"
          value={input}
          onChange={handleInputChange}
          onKeyPress={(e) => e.key === 'Enter' && handleAddTodo()}
        />
      </div>
    </header>
  );
}

export default Header;
