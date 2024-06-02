import React, { useState, useEffect } from 'react';
import Header from './Header';
import Footer from './Footer';
import TodoForm from './TodoForm';
import TodoList from './TodoList';
import TodoFilter from './TodoFilter';




const App = () => {
  const [todos, setTodos] = useState([]);
  const [filter, setFilter] = useState('all');
  
  const addTodo = (text) => {
    const newTodo = { text, completed: false, id: Date.now() };
    console.log('Adding todo:', newTodo);
    setTodos([...todos, newTodo]);
  };
  
  const toggleTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  const filteredTodos = todos.filter((todo) => {
    if (filter === 'all') return true;
    if (filter === 'active') return !todo.completed;
    if (filter === 'completed') return todo.completed;
    return true;
  });

  const listNum = {
    all: todos.length,
    active: todos.filter(todo => !todo.completed).length,
    completed: todos.filter(todo => todo.completed).length
  };

  const clearCompleted = () => {
    setTodos([]);
  };

  return (
    <div>
      <Header />
      <div className='todoForm'>
        <TodoForm addTodo={addTodo} />
        <TodoList todos={filteredTodos} toggleTodo={toggleTodo} deleteTodo={deleteTodo} />
        <TodoFilter setFilter={setFilter} listNum={listNum} filter={filter} clearCompleted={clearCompleted} />
      </div>
      <Footer />
    </div>
  );
};

export default App;