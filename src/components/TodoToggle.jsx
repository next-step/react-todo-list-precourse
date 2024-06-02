import { useState } from "react";

export const TodoToggle = () => {
    const [todos, setTodos] = useState([]);

    const addTodo = (newTodo) => {
        setTodos([...todos, { text: newTodo, done: false }]);
    };

    const toggleDone = (todoToToggle) => {
        setTodos(todos.map(todo =>
            todo === todoToToggle ? { ...todo, done: !todo.done } : todo
        ));
    };

    return { todos, addTodo, toggleDone };
};