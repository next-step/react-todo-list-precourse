import React from 'react'
import '../styles/TodoList.css'
import handleCompleteChange from '../utils/handleCompleteChange';
import handleClick from '../utils/hadleClick';

function TodoList({data, setTodoData}) {
  const handleComplete = () => handleCompleteChange(setTodoData, data.id);
  const handleDelete = () => handleClick(setTodoData, data.id);
  
  return (
    <div className="todoList" style = {{padding: "10px", textDecoration: data.completed ? "line-through" : "none"}} key = {data.id}>
      <div className="todo-item-wrapper">
        <input type="checkbox" checked={data.completed} onChange = {handleComplete}/>
         {data.title}
        <button onClick = {handleDelete}>X</button>
      </div>
    </div>
  )
}

export default TodoList;