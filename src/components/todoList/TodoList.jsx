import React, { useState, useEffect } from "react";
import './todoList.styles.css';
import { toggleDone } from "./ToggleDone";
import { onDeleteButtonHandler } from "./DeleteButton";

const TodoList = ({ todoList, setTodoList }) => {
    const [doneStatus, setDoneStatus] = useState(Array(todoList.length).fill(false));

    useEffect(() => {
        setDoneStatus(Array(todoList.length).fill(false));
    }, [todoList]);

    return (
        <div className="todolist">
            {todoList ? todoList.map((todo, idx) => (
                <div className={`todolist-boxs${doneStatus[idx] ? '-done' : ''}`} key={idx}>
                    {todo}
                    <button onClick={() => toggleDone(doneStatus, setDoneStatus, idx)}>✓</button>
                    <button onClick={() => onDeleteButtonHandler(todoList, setTodoList, idx)}>X</button>
                </div>
            )) : <></>}
        </div>
    );
}

export default TodoList;