import React from 'react';

// 할 일 목록 렌더링
const TodoList = ({ todos, toTodo, deleteTodo }) => (
  <ul>
    {todos.map((todo, index) => (
      <TodoItem
        key={index}
        todo={todo}
        index={index}
        toTodo={toTodo}
        deleteTodo={deleteTodo}
      />
    ))}
  </ul>
);

// 할 일 항목 컴포넌트
const TodoItem = ({ todo, index, toTodo, deleteTodo }) => (
  <li className={`todo-item ${todo.completed ? 'completed' : ''}`}>
    <input type="checkbox" checked={todo.completed} onChange={() => toTodo(index)} />
    <span onClick={() => toTodo(index)}>{todo.text}</span>
    <button onClick={() => deleteTodo(index)}>삭제</button>
  </li>
);

export default TodoList;
