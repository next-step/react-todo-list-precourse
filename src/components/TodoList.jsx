import React from 'react';
import '../styles/TodoList.css';

function TodoList({data, setTodoData}) {
  const handleCompleteChange = (id) => {


  }

  const handleClick = (id) => {
    setTodoData((prev) => prev.filter((data) => data.id !== id))


  }
  return (
    <div className="todoList" key = {data.id}>
      <div className="todo-item-wrapper">
        <input type="checkbox"
         checked={data.completed} 
         onChange = {() => handleCompleteChange(data.id)}
         />
         {data.title}
        <button
          onClick = {() => handleClick(data.id)}>
          X</button>
      </div>
    </div>
  );
}

export default TodoList;