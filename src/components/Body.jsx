import React from "react";
import TodoItem from "./todo/TodoItem";

function Main({ todoList, onDelete, onToggle }) {
    return (
        <main className="main">
          <ul className="todo-list">
            {todoList.map((todoItem) => (
              <TodoItem
                key={todoItem.id} todoItem={todoItem} 
                onDelete={onDelete} onToggle={onToggle}
              />
            ))}
          </ul>
        </main>
    )
}

export default Main;