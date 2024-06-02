import React from 'react';
import './TodoItem.css';

// 아이템 컴포넌트
const TodoItem = ({ todo, toggleTodo, deleteTodo }) => (
  <div className='inner'>
    <li className={`todo-item ${todo.completed ? 'completed' : ''}`}>
       <span style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
        {todo.text}
       </span>
      <div className='btn-group'>
        <button className='material-icons btn btn-finished' onClick={toggleTodo}>done_outline</button>
        <button className='material-icons btn btn-delete' onClick={deleteTodo}>delete</button>
      </div>
    </li>
  </div>
);

export default TodoItem;