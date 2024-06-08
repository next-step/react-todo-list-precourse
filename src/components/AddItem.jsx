import React, { useState } from 'react';

function AddItem({ onAddItem }) {
  const [inputValue, setInputValue] = useState('');

  const addItem = () => {
    if (inputValue.trim() === '') {
      return;
    }
    const newItem = { id: Date.now(), text: inputValue, completed: false };
    onAddItem(newItem);
    setInputValue('');
  };

  return (
    <div>
      <input
        value={inputValue}
        type="text"
        onChange={event => setInputValue(event.target.value)}
      />
      <button onClick={addItem}>추가</button>
    </div>
  );
}

export default AddItem;