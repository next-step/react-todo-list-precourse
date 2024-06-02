import React from "react";

function App() {
  return (
    <div className="app-container">
    <header>Todos</header>
    <input className="todo-input" placeholder="What needs to be done?" />
    <ul className="todo-list">
      {/* Todo items here */}
    </ul>
    <div className="footer">
      {/* Filters and counts */}
    </div>
  </div>

  );
}

export default App;
