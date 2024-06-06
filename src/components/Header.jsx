import React from "react";
import TodoInput from "./todo/TodoInput";

function Header({ text, onChangeInput, onSubmit }) {
    return (
        <header className="header">
          <h1>todos</h1>
          <TodoInput text={text} onChangeInput={onChangeInput} onSubmit={onSubmit}/>
        </header>
    )
}

export default Header;