import React, { useState } from 'react';
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';

export default function App() {
  const [todos, setTodos] = useState([]);

  return createApp(todos, setTodos);
}

/* 할 일 추가 */
function addTodo(todo, todos, setTodos) {
  if (todo.trim().length === 0) return;
  setTodos([...todos, { id: Date.now(), text: todo, completed: false }]);
}

/* 할 일 삭제 */
function deleteTodo(id, todos, setTodos) {
  setTodos(todos.filter(todo => todo.id !== id));
}

/* 완료 상태 전환 */
function toggleComplete(id, todos, setTodos) {
  setTodos(todos.map(todo => 
    todo.id ===id ? { ...todo, completed: !todo.completed } : todo
  ));
}

function createApp(todos, setTodos) {
  return React.createElement(
    'div',
    null,
    React.createElement('h1', null, 'Todo List'),
    React.createElement(TodoInput, {
      addTodo: todo => addTodo(todo, todos, setTodos)
    }),
    React.createElement(TodoList, {
      todos,
      deleteTodo: id => deleteTodo(id, todos, setTodos),
      toggleComplete: id => toggleComplete(id, todos, setTodos)
    }),
  );
}