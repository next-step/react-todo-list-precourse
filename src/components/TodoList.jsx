import React from 'react'
import '../styles/TodoList.css'
import handleCompleteChange from '../utils/handleCompleteChange';
import handleClick from '../utils/hadleClick';

function TodoList({data, setTodoData}) {
  const handleComplete = () => handleCompleteChange(setTodoData, data.id);
  const handleDelete = () => handleClick(setTodoData, data.id);
  
  return (
    <div className="todoList" key = {data.id}>
      <div className="todo-item-wrapper">
        <input type="checkbox" checked={data.completed} onChange = {handleComplete}/>
         <span className = "todo-item" style={{textDecoration: data.completed ? "line-through" : "none"}}>{data.title}</span>
         <button onClick = {handleDelete}>X</button>
         </div>
    </div>
    
  )
}

export default TodoList;