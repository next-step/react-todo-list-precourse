import React from "react"
import TodoListItem from "./TodoListItem"

const List = ({ todos, onRemove, onTouched }) => {
  return (
    <ul className="TodoList">
      {todos.map((todo) => (
        <TodoListItem todo={todo} key={todo.id} onRemove={onRemove} onTouched={onTouched} />
      ))}
    </ul>
  )
}

export default List
