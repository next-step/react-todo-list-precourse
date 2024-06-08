import React from 'react';

const TodoList = ({ todos, deleteTodo }) => {
  return (
    <ul>
      {todos.map(todo => (
        // todo.id => Data 객체이므로 거의 unique. => 렌더링 최적화
        <li key={todo.id}>
          <span>{todo.text}</span>
          <button onClick={() => deleteTodo(todo.id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
