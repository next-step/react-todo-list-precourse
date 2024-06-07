import React from 'react';
import '../styles/TodoList.css';

function TodoList() {
  return (
    <div className="todoList">
      <div className="todo-item-wrapper">
        <input type="checkbox" checked={false} />
        <label className="todo-item">할일 내용 1</label>
        <button>X</button>
      </div>

      {/* 줄바꿈 추가 */}
      <div className="todo-item-wrapper">
        <input type="checkbox" checked={false} />
        <label className="todo-item">할일 내용 2</label>
        <button>X</button>
      </div>
    </div>
  );
}

export default TodoList;