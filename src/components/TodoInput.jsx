import React, { useState } from 'react';

function TodoInput({ onAdd }) {
  const [text, setText] = useState('');

  const handleChange = (e) => setText(e.target.value);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!text.trim()) return; // 빈 문자열 추가 방지
    onAdd(text);
    setText('');
  };

  return (
    <form onSubmit={handleSubmit} className="input-container">
      <input
        type="text"
        value={text}
        onChange={handleChange}
        placeholder="무엇을 해야 합니까?"
        className="input-field"
      />
      <button type="submit" className="add-button">추가</button>
    </form>
  );
}

export default TodoInput;
