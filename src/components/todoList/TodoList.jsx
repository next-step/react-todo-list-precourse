import React, { useState, useEffect } from "react";
import './todoList.styles.css';

const TodoList = ({ todoList, setTodoList }) => {
    const [doneStatus, setDoneStatus] = useState(Array(todoList.length).fill(false));
    useEffect(() => {
        setDoneStatus(Array(todoList.length).fill(false));
    }, [todoList]);
    const toggleDone = (idx) => {
        setDoneStatus(doneStatus.map((status, index) => idx === index ? !status : status));
    };
    const onDeleteButtonHandler = (idx) => {
        setTodoList(todoList.filter((_, index) => index !== idx));
    }
    return (
        <div className="todolist">
            {todoList ? todoList.map((todo, idx) => (
                <div className={`todolist-boxs${doneStatus[idx] ? '-done' : ''}`}>
                    {todo}
                    <button onClick={() => toggleDone(idx)}>✓</button>
                    <button onClick={() => onDeleteButtonHandler(idx)}>X</button>
                </div>
            )) : <></>}
        </div>
    )
}

export default TodoList;