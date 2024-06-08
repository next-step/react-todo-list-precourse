import React from 'react'
import '../styles/TodoForm.css'
import handleInputChange from '../utils/handleInputChange';

function TodoForm({handleSubmit, value, setValue}) {
    const handleChange = (e) => handleInputChange(e,setValue);

  return (
    <div className = "form-container">
      <form onSubmit = {handleSubmit}>
        <input type = "text" className = "input-text" name = "value" placeholder="What needs to be done?" value = {value} onChange = {handleChange}/>
        <button type ="submit">입력</button>
      </form>
    </div>
  )
}

export default TodoForm