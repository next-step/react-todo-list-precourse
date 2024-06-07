import React, { useState, useEffect } from "react";
import NewTodo from "./components/newTodo/NewTodo";
import TodoList from "./components/todoList/TodoList";

const Main = () => {
    const [newTodo, setNewTodo] = useState('');
    const [todoList, setTodoList] = useState([]);
    useEffect(() => {
        console.log(newTodo);
        newTodo ? setTodoList([...todoList, newTodo]) : '';
        setNewTodo('');
    }, [newTodo])

    return (
        <div className="app">
            <h1>todos</h1>
            <NewTodo
                newText={newTodo}
                setNewTodo={setNewTodo}
            />
            <TodoList
                todoList={todoList}
            />
        </div>
    );
}

export default Main;