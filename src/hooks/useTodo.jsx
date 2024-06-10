import { useState } from 'react';

const useTodoState = () => {
    const [todos, setTodos] = useState(JSON.parse(localStorage.getItem("todoItem")));
    const [next, setNext] = useState(1+parseInt(JSON.parse(localStorage.getItem("todoID"))));

    const addTodo = (todo) => {
        setNext(next+1);
        setTodos((prev) => [...prev, {content:todo, isCompleted:false, id:next}]);
        localStorage.setItem("todoID", JSON.stringify(next));
    };

    const deleteTodo = (target) => {
        setTodos((prev) => prev.filter((todo) => todo.id !== target));
    };

    const changeCompleted = (target) => {
        setTodos((prev) => prev.map((todo) =>
            todo.id === target ? {...todo, isCompleted:!todo.isCompleted} : todo
        ));
    }

    return { todos, setTodos, addTodo, deleteTodo, changeCompleted };
}

export default useTodoState;