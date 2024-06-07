import React from 'react';
import '../styles/TodoForm.css';
function TodoForm({value,setValue}) {
  const handleChange = (e) => {
    setValue(e.target.value);
  }
  return (
    <div className = "form-container">
      <form>
        <input type = "text" 
        name = "value" 
        placeholder="해야 할 일을 입력하세요."
        value = {value}
        onChange = {handleChange}
        />
        <button type ="submit">입력</button>
      </form>
    </div>
  )
}

export default TodoForm