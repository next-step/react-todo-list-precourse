import React from 'react';

function TodoItem({ todo, index, toggleTodo, deleteTodo }) {
    return (
        <li className={`todo-item ${todo.completed ? 'completed' : ''}`}>
            <div className="todo-content">
                <input type="checkbox" checked={todo.completed} onChange={() => toggleTodo(index)} />
                <span className="todo-text" onClick={() => toggleTodo(index)}>
                    {todo.text}
                </span>
                <button onClick={() => deleteTodo(index)} className="delete-button">
                    ✕
                </button>
            </div>
        </li>
    );
}

export default TodoItem;
