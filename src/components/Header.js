import React from "react";

function Header({ text, onChangeInput, onSubmit }) {
    return (
        <header className="header">
          <h1>todos</h1>
          <form onSubmit={onSubmit}>
            <div className="input-container">
              <input
                className="new-todo"
                id="todo-input"
                type="text"
                placeholder="what needs to be done?"
                onChange={onChangeInput}
                value={text}
              ></input>
              <button className="new-todo-add" type="submit">add</button>
            </div>
          </form>
        </header>
    )
}

export default Header;