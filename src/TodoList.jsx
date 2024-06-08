import React from 'react';

const TodoList = ({ todos, deleteTodo, toggleTodo }) => {
  return (
    <ul>
      {todos.map(todo => (
        // todo.id => Data 객체이므로 거의 unique. => 렌더링 최적화
        <li key={todo.id} style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
          <div onClick={() => toggleTodo(todo.id)} style={{ backgroundColor: todo.complete ? 'black' : 'white'}} ></div>
          <span onClick={() => toggleTodo(todo.id)}>{todo.text}</span>
          <button onClick={() => deleteTodo(todo.id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
