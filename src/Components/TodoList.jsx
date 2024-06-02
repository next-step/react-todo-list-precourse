import React from 'react';

const TodoList = ({ todos, toggleTodo, deleteTodo }) => {
  return (
    <ul className='toDoList'>
      {todos.map((todo) => (
        <li key={todo.id}>
          <span 
            onClick={() => toggleTodo(todo.id)} 
            className='material-icons'
            style={{ color: todo.completed ? 'green' : 'lightgray' }}>
            check_circle
          </span>
          <span 
            onClick={() => toggleTodo(todo.id)} 
            style={{ textDecoration: todo.completed ? 'line-through' : 'none'
            }}
          >
            {todo.text}
          </span>
          <button onClick={() => deleteTodo(todo.id)} id='listBtn'>
            <span className="material-icons">close</span>
          </button>
        </li>
      ))}
    </ul>
  );
};

export default TodoList;