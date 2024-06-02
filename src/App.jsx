import './App.css';
import React, { useState } from 'react';
import TodoInput from './components/TodoInput';
import TodoFilters from './components/TodoFilters';
import useLocalStorage from './utils/useLocalStorage';
import { toggleTodo, addTodo, deleteTodo, deleteCompleted, filteredTodos } from './utils/todoUtils';

const App = () => {
  const [todos, setTodos] = useLocalStorage('todos', []);
  const [filter, setFilter] = useState('all');
  return (
    <div className='app'>
      <h1>THINGS TO DO</h1>
      <TodoInput todos={filteredTodos(todos, filter)} addTodo={(text) => addTodo(todos, setTodos, text)} toggleTodo={(index) => toggleTodo(todos, setTodos, index)}
        deleteTodo={(index) => deleteTodo(todos, setTodos, index)}/>
      <TodoFilters filter={filter} setFilter={setFilter} deleteCompleted={() => deleteCompleted(todos, setTodos)} />
      <div className='Total'>남은 할 일: {todos.length}</div>
    </div>
  );
};

export default App;

