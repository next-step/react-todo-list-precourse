import { useEffect, useState } from "react";
import { loadTodos, saveTodos } from "./localStorage.jsx";

const filterTodos = (todos, filter) => {
    return todos.filter(todo => {
        if (filter === 'active') return !todo.done;
        if (filter === 'done') return todo.done;
        return true;
    });
};

const TodoToggle = () => {
    const [todos, setTodos] = useState(loadTodos());
    const [filter, setFilter] = useState('all');

    useEffect(() => {
        saveTodos(todos);
    }, [todos]);

    const addTodo = (newTodo) => {
        setTodos([...todos, { text: newTodo, done: false }]);
    };

    const toggleDone = (todoToToggle) => {
        setTodos(todos.map(todo =>
            todo === todoToToggle ? { ...todo, done: !todo.done } : todo
        ));
    };

    const filteredTodos = filterTodos(todos, filter);
    return { todos: filteredTodos, addTodo, toggleDone, setFilter };
};

export default TodoToggle;