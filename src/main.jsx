import React, { useState, useEffect } from "react";
import NewTodo from "./components/newTodo/NewTodo";

const Main = () => {
    const [newTodo, setNewTodo] = useState('');
    useEffect(() => { console.log(newTodo) }, [newTodo])

    return (
        <div className="app">
            <h1>todos</h1>
            <NewTodo
                newText={newTodo}
                setNewTodo={setNewTodo}
            />
        </div>
    );
}

export default Main;