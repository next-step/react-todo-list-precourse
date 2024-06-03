import React, { useState } from 'react'
import './TodoItem.css'

const TodoItem = ({ todo, toggleTodo, deleteTodo, editTodo }) => {

  const [isEdit, setIsEdit] = useState(false)
  const [newText, setNewText] = useState(todo.text)

  const handleDoubleClick = () => {
    setIsEdit(true)
  }

  const handleChange = (e) => {
    setNewText(e.target.value)
  }

  const handleBlur = () => {
    setIsEdit(false);
    editTodo(todo.id, newText)
  }

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      setIsEdit(false);
      editTodo(todo.id, newText)
    }
  }

  return (
    <div className='todoItem'>
        <span className={`material-symbols-outlined toggleIcon ${todo.checked ? 'iconFalse' : 'iconTrue'}`} onClick={() => toggleTodo(todo.id)}>{todo.checked ? 'check_circle' : 'circle'}</span>
        {isEdit ? (
          <input value={newText} onChange={handleChange} onBlur={handleBlur} onKeyDown={handleKeyDown} autoFocus className='todoEdit' />
        ) : (
          <li className={`todoText ${todo.checked ? 'checkedFalse' : 'checkedTrue'}`} onDoubleClick={handleDoubleClick}>{todo.text}</li>
        )}
        <span className='material-symbols-outlined delete' onClick={() => deleteTodo(todo.id)}>close</span>
    </div>
  )
}

export default TodoItem