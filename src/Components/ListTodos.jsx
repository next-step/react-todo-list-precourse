import React from "react";
import TodoItem from "./TodoItem";
import "../Styles/TodoTemplate.css";

// TodoItem들을 리스트로 만드는 컴포넌트
// 이름을 TodoList가 아니라 ListTodos로 만든 이유는, Todo들을 Listing 해주는 컴포넌트라는 의도.
const TodoList = ({ todos, handleDelete, handleComplete }) => {
  return (
    <div className="lists">
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          handleDelete={handleDelete}
          handleComplete={handleComplete}
      />
    ))}
    </div>
  )
}

export default TodoList;