import React from 'react';

// TodoItem 컴포넌트: 개별 할 일을 렌더링하는 컴포넌트
function TodoItem({ todo, deleteTodo, toggleComplete }) {
  return (
    <li>
      {/* 완료 상태를 토글하는 버튼 */}
      <button onClick={toggleComplete} style={{ marginRight: '10px' }}>
        {todo.completed ? 'Undo' : 'Complete'}
      </button>
      {/* 완료 상태에 따라 스타일 변경 */}
      <span style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
        {todo.text}
      </span>
      {/* 삭제 버튼 */}
      <button onClick={deleteTodo} style={{ marginLeft: '10px' }}>Delete</button>
    </li>
  );
}

export default TodoItem;