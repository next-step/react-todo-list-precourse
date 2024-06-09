import React from 'react';
import TodoItem from './TodoItem';

// TodoList 컴포넌트: 할 일 목록을 렌더링하는 컴포넌트
function TodoList({ todos, deleteTodo, toggleComplete }) {
  return (
    <ul>
      {todos.map((todo, index) => (
        <TodoItem
          key={index}
          todo={todo}
          deleteTodo={() => deleteTodo(index)}
          toggleComplete={() => toggleComplete(index)}
        />
      ))}
    </ul>
  );
}

export default TodoList;