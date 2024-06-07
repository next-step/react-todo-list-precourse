import React, { useEffect, useState } from "react"
import "./TodoThing.css"
const TodoThing = ({todo, onRemove, checkpush}) => {
const [isChecked, setIsChecked] = useState(todo.isdone);
const removeHandler = () => {
    onRemove(todo.id)
}

useEffect(() => {
    setIsChecked(todo.isdone)
},[todo.isdone])

const checkHandler = () => {
    checkpush(todo.id, todo.content)
    setIsChecked(!isChecked)
}

    return (
        <div className="TodoThing">
        <label>
        <input type="checkbox" checked={isChecked} onChange={checkHandler} ></input>
        <span className="item">{todo.content}</span>
        </label>
       <button className="deletebtn"onClick={removeHandler}>삭제</button>
        </div>
    )
}
export default TodoThing