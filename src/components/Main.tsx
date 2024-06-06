import React from 'react';
import TodoList from './TodoList';
import { Todo } from '../interfaces/TodoListInterface';
import '../styles/Main.css';

interface MainProps {
  filteredTodos: Todo[];
  toggleAllTodos: () => void;
  toggleTodo: (id: number) => void;
  deleteTodo: (id: number) => void;
}

const Main: React.FC<MainProps> = ({
  filteredTodos,
  toggleAllTodos,
  toggleTodo,
  deleteTodo,
}) => (
  <div className="main">
    <div className="toggle-all-container">
      <input type="checkbox" className="toggle-all" onClick={toggleAllTodos} />
      <label className="toggle-all-label">Toggle All Input</label>
    </div>
    <TodoList
      todos={filteredTodos}
      toggleTodo={toggleTodo}
      deleteTodo={deleteTodo}
    />
  </div>
);

export default Main;
