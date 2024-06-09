import React, { useState, useEffect } from 'react';
import Header from './Header';
import TodoList from './TodoList';
import Footer from './Footer';

// 초기 할 일 List 가져오는 함수
const InitTodo = () => {
  return JSON.parse(localStorage.getItem('todos')) || [];
};

// 할 일 완료 업데이트 함수
const updateTodo = (todos, index) => {
  return todos.map((todo, i) =>
    i === index ? { ...todo, completed: !todo.completed } : todo
  );
};

// 할 일 Filtered 목록 가져오는 함수
const filteredTodo = (todos, filter) => {
  return todos.filter(todo =>
    filter === 'all' ? true : filter === 'completed' ? todo.completed : !todo.completed
  );
};

const App = () => {
  const [todos, setTodos] = useState(InitTodo()); // 초기 할 일 List 설정
  const [filter, setFilter] = useState('all'); // 필터 설정

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos)); // 할 일 목록이 변경될 때마다 로컬에 저장
  }, [todos]);
};

export default App;
