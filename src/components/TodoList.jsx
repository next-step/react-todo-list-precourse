import React from "react";
import TodoItem from "./TodoItem.jsx";

const TodoList = ({ todos }) => {
    return (
        <ul>
            {todos.map((todo, index) => (
                <TodoItem key={index} todo={todo} />
            ))}
        </ul>
    );
};

export default TodoList;