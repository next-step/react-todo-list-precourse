import React, { useState, useEffect } from "react";

const TodoList = ({ todoList }) => {
    const [doneStatus, setDoneStatus] = useState(Array(todoList.length).fill(false));
    useEffect(() => {
        setDoneStatus(Array(todoList.length).fill(false));
    }, [todoList]);
    const toggleDone = (idx) => {
        setDoneStatus(doneStatus.map((status, index) => idx === index ? !status : status));
    };
    return (
        <div className="todolist">
            {todoList ? todoList.map((todo, idx) => (
                <div className={`todolist-boxs-${idx}${doneStatus[idx] ? '-done' : ''}`}>
                    {todo}
                    <button onClick={() => toggleDone(idx)}>Done</button>
                </div>
            )) : <></>}
        </div>
    )
}

export default TodoList;