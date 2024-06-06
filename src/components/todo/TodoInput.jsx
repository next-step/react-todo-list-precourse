import React from "react";

function TodoInput({ text, onChangeInput, onSubmit }) {
    return (
        <form onSubmit={onSubmit}>
            <div className="input-container">
              <input className="new-todo" id="todo-input"
                type="text" placeholder="what needs to be done?"
                onChange={onChangeInput} value={text}
              ></input>
              <button className="new-todo-add" type="submit">add</button>
            </div>
          </form>
    );
}

export default TodoInput;