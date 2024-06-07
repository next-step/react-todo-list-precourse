// Body.jsx
import React, { useState } from 'react';
import TodoForm from './TodoForm';
import TodoList from './TodoList';

function Body() {
  const [todos, setTodos] = useState([]);

  const addTodo = (text) => {
    if (text === "") {
      alert('할 일을 입력하세요.');
    } else {
      const newTodo = { text, completed: false };
      setTodos([...todos, newTodo]);
    }
  };

  const toggleComplete = (index) => {
    const newTodos = [...todos];
    newTodos[index].completed = !newTodos[index].completed;
    setTodos(newTodos);
  };

  const deleteTodo = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  return (
    <section className="main">
      <TodoForm addTodo={addTodo} />
      <TodoList todos={todos} toggleComplete={toggleComplete} deleteTodo={deleteTodo} />
    </section>
  );
}

export default Body;
