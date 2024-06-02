import React from 'react';
import './item.css';

export default function Item({ item, updateItem, onDelete, updateNumber }) {
  const handleCheck = () => {
    const updatedItem = { ...item, checked: !item.checked }; // 체크 상태를 토글
    updateItem(updatedItem); // 업데이트된 아이템 전달
    updateNumber(); // 남은 아이템 개수 업데이트
  };

  return (
    <div className='item'>
      <input className='check-box' type='checkbox' checked={item.checked} onChange={handleCheck} />
      <span className={`${item.checked ? 'checked' : 'unchecked'}`}>{item.text}</span>
      <button className='btnDelete' onClick={() => onDelete(item.id)}>삭제</button>
    </div>
  );
}

