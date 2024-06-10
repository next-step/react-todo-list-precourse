import { useState } from 'react';

function add(next, setNext, setTodos, element) {
    setNext((prev) => prev+1);
    setTodos((prev) => [...prev, {content:element, isCompleted:false, id:next}]);
    localStorage.setItem("todoID", JSON.stringify(next));
}

function change(setTodos, target) {
    setTodos((prev) => prev.map((todo) =>
        todo.id === target ? {...todo, isCompleted:!todo.isCompleted} : todo
    ));
}

function initTodo() {
    const data = localStorage.getItem("todoItem");

    if(data)
        return JSON.parse(data);
    else
        return [];
}

function initNext() {
    const data = localStorage.getItem("todoID");

    if(data)
        return 1+parseInt(JSON.parse(data));
    else
        return 0;
}

const useTodoState = () => {
    const [todos, setTodos] = useState(initTodo());
    const [next, setNext] = useState(initNext());
    
    const addTodo = (todo) => {
        add(next, setNext, setTodos, todo);
    };
    const deleteTodo = (target) => {
        setTodos((prev) => prev.filter((todo) => todo.id !== target));
    };
    const changeCompleted = (target) => {
        change(setTodos, target)
    }
    return { todos, setTodos, addTodo, deleteTodo, changeCompleted };
}

export default useTodoState;