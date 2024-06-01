import React, { useCallback, useState } from "react"
import "./TodoThing.css"
const TodoThing = ({todo, onRemove, checkpush}) => {
const [isChecked, setIsChecked] = useState(false);
const removeHandler = () => {
    onRemove(todo.id)
}

const checkHandler = () => {
    checkpush(todo.id, todo.content)
    setIsChecked(!isChecked)
}

    return (
        <div className="TodoThing">
        <input type="checkbox" checked={isChecked} onChange={checkHandler} ></input>
        <div className="item">{todo.content}</div>
        <button onClick={removeHandler}>삭제</button>
        </div>
    )
}
export default TodoThing