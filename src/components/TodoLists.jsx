import React from 'react'
import TodoList from './TodoList.jsx'

function TodoLists({todoData, setTodoData}) {
  return (
    <div>
      {todoData.map((data) => (
        <TodoList 
        key = {data.id}
        data = {data}
        setTodoData = {setTodoData}
        />
      ))}
    </div>
  )
}

export default TodoLists