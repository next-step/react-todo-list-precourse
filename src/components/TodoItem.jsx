import React from "react";

const TodoItem = ({ todo, toggleDone }) => {
    return (
        <li onClick={() => toggleDone(todo)} className={todo.done ? 'done' : ''}>
            <span style={{ textDecoration: todo.done ? 'line-through' : 'none' }}>
                {todo.text}
            </span>
        </li>
    );
};

export default TodoItem;