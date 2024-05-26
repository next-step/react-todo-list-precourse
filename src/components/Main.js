import React from "react";

function Main({ todoList, onDelete }) {
    return (
        <main className="main">
          <ul className="todo-list">
            {todoList.map((todoItem) => (
              <li className="todo-item" key={todoItem.id}>
                <div className="view">
                  <input className="toggle" type="checkbox" id="todo-item-toggle"/>
                  <label id="todo-item-label">{todoItem.text}</label>
                  <button 
                    className="destroy" 
                    id="todo-item-button"
                    onClick={() => onDelete(todoItem.id)}>
                    X
                  </button>
                </div>
              </li>
            ))}
          </ul>
        </main>
    )
}

export default Main;