import React, { useState, useEffect } from 'react';
import TodoList from './TodoList';
import TodoCount from './TodoCount'; 
import './styles.css';

// App 컴포넌트: 전체 Todo 앱을 관리하는 컴포넌트
function App() {
    const [todos, setTodos] = useState(() => {
        // 로컬 스토리지에서 초기 할 일 목록 불러오기
        const savedTodos = localStorage.getItem('todos');
        return savedTodos ? JSON.parse(savedTodos) : [];
    });
  const [input, setInput] = useState('');
  const [filter, setFilter] = useState('all'); 

   // 할 일 목록이 변경될 때마다 로컬 스토리지에 저장
   useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  // 할 일 추가 함수
  const addTodo = () => {
    if (input.trim()) {
      setTodos([...todos, { text: input, completed: false }]);
      setInput('');
    }
  };

  // 입력 필드 변경 핸들러
  const handleInputChange = (e) => setInput(e.target.value);

  // 입력 필드에서 Enter 키 누를 때 호출
  const handleKeyPress = (e) => {
    if (e.key === 'Enter') addTodo();
  };

  // 할 일 삭제 함수
  const deleteTodo = (index) => {
    const newTodos = todos.filter((_, idx) => idx !== index);
    setTodos(newTodos);
  };

  // 할 일 완료 상태 토글 함수
  const toggleComplete = (index) => {
    setTodos(prevTodos => 
      prevTodos.map((todo, idx) => 
        idx === index ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  // 필터링된 할 일 목록 반환 함수
  const filterTodos = () => {
    switch (filter) {
      case 'completed':
        return todos.filter(todo => todo.completed);
      case 'active':
        return todos.filter(todo => !todo.completed);
      default:
        return todos;
    }
  };

  // 완료되지 않은 할 일의 개수 계산
  const activeTodoCount = todos.filter(todo => !todo.completed).length;

  return (
    <div className="App container">
      <h1>TODO LIST</h1>
      <input
        type="text"
        value={input}
        onChange={handleInputChange}
        onKeyPress={handleKeyPress}
        placeholder="What needs to be done?"
      />
      {/* 필터 버튼들 */}
      <div className="filters">
        <button className={`filter ${filter === 'all' ? 'active' : ''}`} onClick={() => setFilter('all')}>All</button>
        <button className={`filter ${filter === 'active' ? 'active' : ''}`} onClick={() => setFilter('active')}>Active</button>
        <button className={`filter ${filter === 'completed' ? 'active' : ''}`} onClick={() => setFilter('completed')}>Completed</button>
      </div>
      {/* TodoList 컴포넌트에 필터링된 할 일 목록, 삭제 함수, 완료 상태 토글 함수 전달 */}
      <TodoList todos={filterTodos()} deleteTodo={deleteTodo} toggleComplete={toggleComplete} />
      {/* TodoCount 컴포넌트에 완료되지 않은 할 일의 개수 전달 */}
      <TodoCount count={activeTodoCount} />
    </div>
    
  );
}

export default App;
