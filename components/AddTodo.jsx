import React, { useState } from 'react';

function AddTodo({ addTodo }) {
  const [value, setValue] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!value.trim()) return; // 공백 입력 방지
    addTodo(value.trim()); // 공백 제거한 값 전달
    setValue(''); // 입력 필드 초기화
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="input-container">
        <input
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder="What needs to be done?"
        />
        <button type="submit">Add Todo</button>
      </div>
    </form>
  );
}

export default AddTodo;
