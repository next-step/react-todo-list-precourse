import React from 'react';
import '../styles/TodoList.css';

const getStyle = (completed) => ({
  padding: "10px",
  textDecoration: completed? "line-through" : "none"
});

function TodoList({data, setTodoData}) {

  const handleCompleteChange = (id) => {
    setTodoData((prev) =>
    prev.map((todo) =>
      todo.id === id ? {...todo, completed: !todo.completed} : todo
    ))
  }

  const handleClick = (id) => {
    setTodoData((prev) => prev.filter((data) => data.id !== id))
  }

  return (
    <div className="todoList" style = {getStyle(data.completed)} key = {data.id}>
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