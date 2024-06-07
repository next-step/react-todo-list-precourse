import React from 'react';
import '../styles/TodoList.css';

function TodoList({data, setTodoData}) {
  const handleCompleteChange = () => { setTodoData(prev => prev.map(todo =>
      todo.id === data.id ? {...todo, completed: !todo.completed} : todo ))}

  const handleClick = () => setTodoData(prev => prev.filter(todo => todo.id !== data.id));
  
  return (
    <div className="todoList" style = {{padding: "10px", textDecoration: data.completed ? "line-through" : "none"}} key = {data.id}>
      <div className="todo-item-wrapper">
        <input type="checkbox" checked={data.completed} onChange = {handleCompleteChange}/>
         {data.title}
        <button onClick = {handleClick}>X</button>
      </div>
    </div>
  );
}

export default TodoList;