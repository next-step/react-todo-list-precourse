import React, { useState } from 'react'
import '../styles/List.css'

export default function List({ todo, index, remove, complete }) {

    const [isClicked, setIsClicked] = useState(false);
    
    //체크박스 클릭시 상태전환 함수 호출
    const handleBoxClick = () => {
        complete(index);
        setIsClicked(!isClicked);
      };

  return (
    <div>
      <div className='list-container'>
        <label class='container'>
            <input type='checkbox' checked={isClicked} onClick={handleBoxClick}/>
            <div class='checkmark'></div>
        </label>
            <div style={{ textDecoration: todo.completed ? 'line-through' : '' }}>{todo.value}</div>
            <button className='removeBtn' onClick={() => remove(index)}>X</button>
      </div>
    </div>
  )
}
