import React, { useEffect, useState } from 'react';
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';
import FilterButtons from './components/FilterButtons';
import TodoCount from './components/TodoCount';
import './main.css';

export default function App() {
  const [todos, setTodos] = useState(() => {
    const savedTodos = localStorage.getItem('todos');
    return savedTodos ? JSON.parse(savedTodos) : [];
  });

  // 진행 중: active, 완료: completed, 모두: all
  const [filter, setFilter] = useState('active');

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  return createApp(todos, setTodos, filter, setFilter);
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

/* 필터링 */
function getFilteredTodos(todos, filter) {
  if (filter === 'active')
    return todos.filter(todo => !todo.completed);
  else if (filter === 'completed')
    return todos.filter(todo => todo.completed);
  else return todos;
}

function createApp(todos, setTodos, filter, setFilter) {
  return React.createElement('div', null,
    React.createElement('h1', null, 'Todo List'),
    createTodoInput(todos, setTodos),
    createFilterButtons(setFilter, filter),
    createTodoList(todos, filter, setTodos),
    createTodoCount(todos)
  );
}

/* 입력란 생성 */
function createTodoInput(todos, setTodos) {
  return React.createElement(TodoInput, {
    addTodo: todo => addTodo(todo, todos, setTodos)
  });
}

/* 필터 버튼 생성 */
function createFilterButtons(setFilter, filter) {
  return React.createElement(FilterButtons, {
    setFilter: newFilter => setFilter(newFilter),
    currentFilter: filter
  });
}

/* todo-list 생성 */
function createTodoList(todos, filter, setTodos) {
  return React.createElement(TodoList, {
    todos: getFilteredTodos(todos, filter),
    deleteTodo: id => deleteTodo(id, todos, setTodos),
    toggleComplete: id => toggleComplete(id, todos, setTodos)
  });
}

/* 해야할 일 생성 */
function createTodoCount(todos) {
  return React.createElement(TodoCount, {
    count: todos.filter(todo => !todo.completed).length
  });
}