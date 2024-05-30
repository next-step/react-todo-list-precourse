import React, { useState } from "react";
import TodoForm from "./TodoForm";
import TodoItem from "./TodoItem";
import EditTodoForm from "./EditTodoForm";

const TodoContainer = () => {
  const [todos, setTodos] = useState([
    {
      id: 0,
      task: "default",
      completed: false,
      isEditing: false,
    },
  ]);

  const [nextId, setNextId] = useState(1);

  const addTodo = (todo) => {
    setTodos([...todos, { id: nextId, task: todo, completed: false, isEditing: false }]);
    setNextId(nextId + 1);
    console.log(todos);
  };

  const toggleComplete = (id) => {
    setTodos(
      todos.map((todo) => (todo.id === id ? { ...todo, completed: !todo.completed } : todo))
    );
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const editTodo = (id) => {
    setTodos(
      todos.map((todo) => (todo.id === id ? { ...todo, isEditing: !todo.isEditing } : todo))
    );
  };

  const editTask = (task, id) => {
    setTodos(
      todos.map((todo) => (todo.id === id ? { ...todo, task, isEditing: !todo.isEditing } : todo))
    );
  };

  return (
    <div className="TodoContainer">
      <h1>Todo-List</h1>
      <TodoForm addTodo={addTodo} />
      {todos.map((todo, index) =>
        todo.isEditing ? (
          <EditTodoForm editTodo={editTask} task={todo} />
        ) : (
          <TodoItem
            task={todo}
            key={index}
            toggleComplete={toggleComplete}
            deleteTodo={deleteTodo}
            editTodo={editTodo}
          />
        )
      )}
    </div>
  );
};

export default TodoContainer;
