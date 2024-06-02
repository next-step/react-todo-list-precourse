import React, {useState} from 'react'

export default function Item({item, onDelete, updateNumber}) {
  
  const [checked, setChecked] = useState(item.checked);

  const handleCheck = () => {
    setChecked(!checked);
    item.checked =!item.checked;
    updateNumber();
    // console.log(item.checked);
  }
  // console.log(item.id , item.checked, item.text)
  
  return (
    <div className='item'>
      <input type='checkbox' checked={checked} onChange={handleCheck}></input>
      <span>{item.text}</span>
      <button onClick={() => onDelete(item.id)}>삭제</button>
    </div>
    )
}
