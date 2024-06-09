import React, {useState} from 'react'
import "../Styles/TodoTemplate.css"

// 유저의 개별 InputValue를 todo 리스트에 띄워주는 함수
const TodoItem = ({ todo, handleDelete, handleComplete}) => {
  return (
    <li className="item-container">
      <input className="checkCompleteness" type="checkbox" checked={todo.isCompleted} onChange={() => { handleComplete(todo.id)}} />
      <span className="todo-item" style= {{textDecoration: todo.isCompleted ? "line-through" : "none"}}>{todo.todoItem}</span>
      <button className="deleteItem" onClick={() => handleDelete(todo.id)}>X</button>
    </li>
  );
}

export default TodoItem;