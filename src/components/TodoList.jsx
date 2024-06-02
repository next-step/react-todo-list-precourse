import React from "react";
import TodoItem from "./TodoItem.jsx";

const TodoList = ({ todos, toggleDone }) => {
    return (
        <ul>
            {todos.map((todo, index) => (
                <TodoItem key={index} todo={todo} toggleDone={toggleDone} />
            ))}
        </ul>
    );
};

export default TodoList;