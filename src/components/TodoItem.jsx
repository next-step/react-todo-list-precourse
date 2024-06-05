import React from "react";
import Checkbox from "./Checkbox";
import DeleteBtn from "./DeleteBtn";
import "../styles/TodoItem.css";

const TodoItem = ({ todo, onToggle, onDelete }) => {
    return (
        <div className="todo-item">
            <Checkbox checked={todo.completed} onChange={() => onToggle(todo.id)} />
            <span style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
                {todo.text}
            </span>
            <DeleteBtn onDelete={() => onDelete(todo.id)} />
        </div>
    );
}

export default TodoItem;