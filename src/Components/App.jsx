import React, { useState, useEffect } from 'react';
import Header from './Header';
import Footer from './Footer';

const App = () => {
  const [todos, setTodos] = useState([]);
  const [filter, setFilter] = useState('all');
  
  const addTodo = (text) => {
    const newTodo = { text, completed: false, id: Date.now() };
    console.log('Adding todo:', newTodo);
    setTodos([...todos, newTodo]);
  };

  return (
    <div>
      <Header />
      <Footer />
    </div>
  );
};

export default App;