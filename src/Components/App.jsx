import React, { useState, useEffect } from 'react';
import Header from './Header';
import Footer from './Footer';
import TodoForm from './TodoForm';


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

  return (
    <div>
      <Header />
      <div className='todoForm'>
        <TodoForm addTodo={addTodo} />
      </div>
      <Footer />
    </div>
  );
};

export default App;