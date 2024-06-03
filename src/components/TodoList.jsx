import React from "react";

const TodoList = ({ todos, toggleDone, deleteTodo }) => {
    return (
        <ul>
            {todos.filter(todo => todo !== null).map((todo, index) => (
                <li key={index}>
                    <span
                        onClick={() => toggleDone(todo)}
                        style={{ textDecoration: todo.done ? "line-through" : "none" }}
                    >
                        {todo.text}
                    </span>
                    <button onClick={() => deleteTodo(todo)}>삭제</button>
                </li>
            ))}
        </ul>
    );
};

export default TodoList;