import React from 'react'
import TodoList from './TodoList.jsx'

const TodoLists = ({todoData, setTodoData}) => (
    <div>
      {todoData.map(data => (
        <TodoList 
        key = {data.id}
        data = {data}
        setTodoData = {setTodoData}
        />
      ))}
    </div>
);

export default TodoLists