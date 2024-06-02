import React from "react";

const TodoItem = ({ todo }) => {
    return (
        <li>
            <span style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
                {todo.text}
            </span>
        </li>
    );
};

export default TodoItem;