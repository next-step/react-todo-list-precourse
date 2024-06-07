import React from 'react'
import '../styles/TodoForm.css'
import handleInputChange from '../utils/handleInputChange';

function TodoForm({handleSubmit, value, setValue}) {
    const handleChange = (e) => handleInputChange(e,setValue);

  return (
    <div className = "form-container">
      <form onSubmit = {handleSubmit}>
        <input type = "text" name = "value" placeholder="해야 할 일을 입력하세요." value = {value} onChange = {handleChange}/>
        <button type ="submit">입력</button>
      </form>
    </div>
  )
}

export default TodoForm