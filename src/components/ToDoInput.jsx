import React, { useState } from 'react';

const ToDoInput = ({ addTodo }) => {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleAddClick = () => {
    if (inputValue.trim() !== '') {
      addTodo(inputValue);
      setInputValue('');
    }
  };

  return (
    <div>
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        placeholder="What needs to be done?"
      />
      <button onClick={handleAddClick}>Add</button>
    </div>
  );
};

export default ToDoInput;
