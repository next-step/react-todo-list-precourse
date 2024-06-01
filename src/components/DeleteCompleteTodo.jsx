import React from 'react'

const DeleteCompleteTodo = ({ clearTodos, todos, setTodos, remainCount }) => {
  return (
    <div className='delete-complete-btn'>
      <div className='remain-todos-cnt'>{remainCount(todos)} items left!</div>
      <div className='clear-btn' onClick={() => clearTodos(todos, setTodos)}>
        Delete Completed Todos
      </div>
    </div>
  )
}

export default DeleteCompleteTodo
