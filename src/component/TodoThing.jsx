import React from "react"
import "./TodoThing.css"
const TodoThing = ({todo}) => {
    return (
        <div className="TodoThing">
        <input type="checkbox" ></input>
        <div className="item">{todo.content}</div>
        <button>삭제</button>
        </div>
    )
}
export default TodoThing