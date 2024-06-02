import './App.css';
import React, { useState } from 'react';

const App = () => {
  const [todos, setTodos] = useLocalStorage('todos', []);
  const [filter, setFilter] = useState('all');
};

export default App;
