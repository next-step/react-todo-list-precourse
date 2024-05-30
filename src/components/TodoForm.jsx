import React, { useState } from 'react'

const TodoForm = ({ addTodo }) => {
  const [value, setValue] = useState('')

  const handleSubmit = e => {
    e.preventDefault()

    if (value.trim()) {
      addTodo(value)
      setValue('')
    }
  }

  return (
    <form className="TodoForm" onSubmit={handleSubmit}>
      <input
        type="text"
        className="todo-input"
        value={value}
        onChange={e => setValue(e.target.value)}
        placeholder="오늘 할 일을 추가하세요!"
      />
      <button type="submit" className="todo-btn">
        ADD
      </button>
    </form>
  )
}

export default TodoForm
