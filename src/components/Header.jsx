import React, { useState } from 'react';

const useInput = (initialValue) => {
  const [input, setInput] = useState(initialValue);
  const handleInputChange = (e) => setInput(e.target.value);
  const resetInput = () => setInput("");

  return [input, handleInputChange, resetInput];
};

const handleKeyPress = (e, handleAddTodo) => {
  if (e.key === 'Enter') {
    handleAddTodo();
  }
};

function Header({ addTodo, toggleAllTodos }) {
  const [input, handleInputChange, resetInput] = useInput("");
  const handleAddTodo = () => {
    if (input.trim()) {
      addTodo(input);
      resetInput();
    }
  };

  return (
    <header className="header">
      <h1>todos</h1>
      <div className="new-todo-wrapper">
        <span className="toggle-all" tabIndex="0" onClick={toggleAllTodos}>▼</span>
        <input className="new-todo" placeholder="What needs to be done?" value={input} onChange={handleInputChange} onKeyPress={(e) => handleKeyPress(e, handleAddTodo)} />
      </div>
    </header>
  );
}

export default Header;
