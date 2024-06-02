import React, { useState } from 'react';
import TodoItem from './TodoItem';
import './TodoInput.css';
import { handleAddTodo as handleAddTodoUtil, handleKeyPress as handleKeyPressUtil } from '../utils/inputUtils';

// 입력 컴포넌트 
const TodoInput = ({ todos, addTodo, toggleTodo, deleteTodo }) => {
  const [input, setInput] = useState(''); // 초기 입력값 선언
  const handleAddTodo = () => handleAddTodoUtil(input, addTodo, setInput);
  const handleKeyPress = (e) => handleKeyPressUtil(e, handleAddTodo);
  return (
    <div className='todo-list'>
      <div className='input-group'>
        <input className='input' type='text' value={input} onChange={(e) => setInput(e.target.value)} onKeyPress={handleKeyPress} placeholder='당신의 할 일을 입력하세요.'/>
        <button className='material-icons btn btn-add' onClick={handleAddTodo}>add</button>
      </div>
      <ul>
        {todos.map((todo, index) => (<TodoItem key={index} todo={todo} toggleTodo={() => toggleTodo(index)} deleteTodo={() => deleteTodo(index)} />))}
      </ul>
    </div>);};

export default TodoInput;
