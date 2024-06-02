import React, { useState } from 'react';
import './index.css';

function App() {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState('');

  const handleNewTodoChange = (e) => {
    setNewTodo(e.target.value);
  };

  const handleNewTodoKeyPress = (e) => {
    if (e.key === 'Enter') {
      addTodo();
    }
  };

  const addTodo = () => {
    if (newTodo.trim() === '') {
      return;
    }
    const newTodoItem = createTodo(newTodo);
    setTodos([...todos, newTodoItem]);
    setNewTodo('');
  };

  const createTodo = (text) => {
    return {
      id: Date.now(),
      text: text,
      completed: false,
    };
  };

  const toggleTodoCompletion = (id) => {
    setTodos(todos.map(todo =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ));
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  const handleToggleAll = () => {
    const allCompleted = todos.every(todo => todo.completed);
    setTodos(todos.map(todo => ({ ...todo, completed: !allCompleted })));
  };

  return (
    <div className="todoapp">
      <header className="header">
        <h1>todos</h1>
        <div className="input-container">
          <div className="toggle-all" onClick={handleToggleAll}>
            &#8744;
          </div>
          <input
            className="new-todo"
            placeholder="What needs to be done?"
            value={newTodo}
            onChange={handleNewTodoChange}
            onKeyPress={handleNewTodoKeyPress}
          />
        </div>
      </header>
      <section className="main">
        <ul className="todo-list">
          {todos.map(todo => (
            <TodoItem 
              key={todo.id} 
              todo={todo} 
              toggleTodoCompletion={toggleTodoCompletion} 
              deleteTodo={deleteTodo} 
            />
          ))}
        </ul>
      </section>
    </div>
  );
}

const TodoItem = ({ todo, toggleTodoCompletion, deleteTodo }) => {
  return (
    <li className={todo.completed ? 'todo completed' : 'todo'}>
      <div className="checkbox" onClick={() => toggleTodoCompletion(todo.id)}>
        {todo.completed ? '✔' : ''}
      </div>
      <label>{todo.text}</label>
      <button className="destroy" onClick={() => deleteTodo(todo.id)}>×</button>
    </li>
  );
};

export default App;
