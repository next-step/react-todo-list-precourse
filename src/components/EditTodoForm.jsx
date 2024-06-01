import React, { useState } from 'react'

const EditTodoForm = ({ editTodo, task }) => {
  const [value, setValue] = useState('')

  const handleSubmit = e => {
    e.preventDefault()

    editTodo(value, task.id)
    setValue('')
  }

  return (
    <form className='TodoForm' onSubmit={handleSubmit}>
      <input
        type='text'
        className='todo-input'
        value={value}
        onChange={e => setValue(e.target.value)}
        placeholder='할 일을 편집하여 업데이트 해주세요!'
      />
      <button type='submit' className='todo-btn'>
        Edit
      </button>
    </form>
  )
}

export default EditTodoForm
