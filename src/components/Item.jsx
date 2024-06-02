import React from 'react'

export default function Item({item, onDelete}) {
  
  const handleCheck = () => {
    item.checked =!item.checked;
  }
  // console.log(item.id , item.checked, item.text)
  
  return (
    <div className='item'>
      <input type='checkbox' onChange={handleCheck}></input>
      <span>{item.text}</span>
      <button onClick={() => onDelete(item.id)}>삭제</button>
    </div>
    )
}
