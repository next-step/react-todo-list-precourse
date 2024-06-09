import React from 'react';
import './styles.css';

// TodoItem 컴포넌트: 개별 할 일을 렌더링하는 컴포넌트
function TodoItem({ todo, deleteTodo, toggleComplete, filter }) {
    const getVisibilityClass = () => {
      if (filter === 'all') return '';
      if (filter === 'active' && todo.completed) return 'hidden';
      if (filter === 'completed' && !todo.completed) return 'hidden';
      return '';
    }; 

    return (
        <li className={`${getVisibilityClass()} ${todo.completed ? 'completed' : ''}`}>
      {/* 완료 상태를 토글하는 버튼 */}
      <button
        className={`complete-btn ${todo.completed ? 'completed' : ''}`}
        onClick={toggleComplete}
        style={{ marginRight: '10px' }}
      ></button>
      {/* 완료 상태에 따라 스타일 변경 */}
      <span>{todo.text}</span>
      {/* 삭제 버튼 */}
      <button className="delete-btn" onClick={deleteTodo} style={{ marginLeft: '10px' }}> x </button>
    </li>
  );
}

export default TodoItem;