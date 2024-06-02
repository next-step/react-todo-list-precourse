import React, { useState } from 'react'

export default function AddTodo({ addTodo }) {
   const [value, setValue] = useState('')

   const handleSubmit = (e) => {
      e.preventDefault()
      if (!value.trim()) {
         alert('내용을 입력해 주세요.')
         return
      }
      addTodo(value)
      setValue('')
   }

   return (
      <form onSubmit={handleSubmit}>
         <input
            type="text"
            value={value}
            onChange={(e) => setValue(e.target.value)}
            placeholder="What needs to be done?"
         />
         <button type="submit">+</button>
      </form>
   )
}
