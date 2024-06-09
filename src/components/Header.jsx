import React, { useState } from 'react';

const Header = ({ addTodo }) => {
  const [text, setText] = useState('');

  // 제출 함수 (할 일 추가 및 입력창 초기화)
  const submit = (e) => {
    e.preventDefault();
    if (text.trim().length > 0) {
      addClear(text, setText);
    }
  };

  // 할 일 추가 & 입력창 초기화 함수
  const addClear = (text, setText) => {
    addTodo(text);
    setText('');
  };

  return (
    <header>
      <h1>todos</h1>
      <form onSubmit={submit}>
        <input
          type="text"
          placeholder="할 일을 입력하시오"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <button type="submit">추가</button>
      </form>
    </header>
  );
};

export default Header;
