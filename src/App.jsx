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

  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  return (
    <div className="todoapp">
      <header className="header">
        <h1>todos</h1>
        <div className="input-container">
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
              deleteTodo={deleteTodo} 
            />
          ))}
        </ul>
      </section>
    </div>
  );
}

const TodoItem = ({ todo, deleteTodo }) => {
  return (
    <li className="todo">
      <label>{todo.text}</label>
      <button className="destroy" onClick={() => deleteTodo(todo.id)}>×</button>
    </li>
  );
};

export default App;
