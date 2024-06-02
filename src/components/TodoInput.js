import React, { useState } from 'react';

export default function TodoInput({ addTodo }) {
  const [input, setInput] = useState('');

  const handleChange = (e) => setInput(e.target.value);
  
  const handleSubmit = (e) => {
    e.preventDefault();
    addTodo(input);
    setInput('');
  };

  return createTodoInput(input, handleChange, handleSubmit);
}

function createTodoInput(input, handleChange, handleSubmit) {
  return React.createElement(
    'form',
    { onSubmit: handleSubmit },
    React.createElement('input', {
      type: 'text',
      value: input,
      onChange: handleChange,
      placeholder: '할 일을 입력해 주세요 :)'
    }),
    React.createElement('button', { type: 'submit' }, '+')
  );
}