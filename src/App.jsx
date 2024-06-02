import React, { useState } from 'react';
import './App.css';
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";

function App() {
  const [todos, setTodos] = useState([]);

  const addTodo = (newTodo) => {
    if (!newTodo) {
      alert('할 일을 입력해주세요!');
      return;
    }
    setTodos([...todos, {id:Date.now(), text:newTodo, completed:false }]);
  }
  return (
    <div>
      <header>todos</header>
      <div className="app-container">
        <TodoInput onAddTodo={addTodo}/>
        <TodoList todos={todos}/>
        <div className="footer">
          {/* Filters and counts */}
        </div>
      </div>
    </div>


  );
}

export default App;
