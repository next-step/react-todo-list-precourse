import React, { useState } from 'react';
import './index.css';
import { handleNewTodoChange, handleNewTodoKeyPress, addTodo, toggleTodoCompletion, deleteTodo, clearCompletedTodos, handleToggleAll, filterTodos } from './todoFunctions';
import TodoItem from './TodoItem';
import Filters from './Filters';

function App() {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState('');
  const [filter, setFilter] = useState('all');

  const filteredTodos = todos.filter(todo => filterTodos(todo, filter));

  return (
    <div className="todoapp">
      <header className="header">
        <h1>todos</h1>
        <div className="input-container">
          <div className="toggle-all" onClick={() => handleToggleAll(todos, setTodos)}>
            &#8744;
          </div>
          <input
            className="new-todo"
            placeholder="What needs to be done?"
            value={newTodo}
            onChange={(e) => handleNewTodoChange(e, setNewTodo)}
            onKeyPress={(e) => handleNewTodoKeyPress(e, addTodo, newTodo, todos, setTodos, setNewTodo)}
          />
        </div>
      </header>
      <section className="main">
        <ul className="todo-list">
          {filteredTodos.map(todo => (
            <TodoItem 
              key={todo.id} 
              todo={todo} 
              toggleTodoCompletion={toggleTodoCompletion} 
              deleteTodo={deleteTodo} 
              setTodos={setTodos}
              todos={todos}
            />
          ))}
        </ul>
      </section>
      <footer className="footer">
        <span className="todo-count">
          {todos.filter(todo => !todo.completed).length} items left
        </span>
        <Filters setFilter={setFilter} filter={filter} />
        <button className="clear-completed" onClick={() => clearCompletedTodos(todos, setTodos)}>
          Clear completed
        </button>
      </footer>
    </div>
  );
}

export default App;
