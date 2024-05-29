import React from "react"
import TodoListItem from "./TodoListItem"

const Completed = ({ todos, onRemove, onTouched }) => {
  return (
    <ul className="TodoList">
      {todos.map((todo) =>
        todo.checked === true ? (
          <TodoListItem todo={todo} key={todo.id} onRemove={onRemove} onTouched={onTouched} />
        ) : null
      )}
    </ul>
  )
}

export default Completed
