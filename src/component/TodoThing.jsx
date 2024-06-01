import React, { useCallback } from "react"
import "./TodoThing.css"
const TodoThing = ({todo, onRemove}) => {
const removeHandler = () => {
    onRemove(todo.id)
}

    return (
        <div className="TodoThing">
        <input type="checkbox" ></input>
        <div className="item">{todo.content}</div>
        <button onClick={removeHandler}>삭제</button>
        </div>
    )
}
export default TodoThing