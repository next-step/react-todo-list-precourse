import React from 'react'
import '../App.css'

const SelectAll = ({ allCheck, allUncheck, todos, setTodos }) => {
  return (
    <div className='select-all-btn'>
      <div className='select-btn1' onClick={() => allCheck(todos, setTodos)}>
        ✔️ Select All
      </div>
      <span>|</span>
      <div className='select-btn2' onClick={() => allUncheck(todos, setTodos)}>
        Clear All
      </div>
    </div>
  )
}

export default SelectAll
