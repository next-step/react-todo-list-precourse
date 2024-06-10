import React from "react";
import TodoList from "../todoList/todoList";

// 할 일 목록 컨테이너 컴포넌트: 할 일 목록을 표시하고 완료 토글 및 삭제 기능을 제공하는 컴포넌트
const TodoListContainer = ({ useTodos }) => {
  const { todos, handleToggleComplete, handleDeleteTodo } = useTodos();

  return (
    <TodoList
      todos={todos}
      toggleComplete={handleToggleComplete}
      deleteTodo={handleDeleteTodo}
    />
  );
};

export default TodoListContainer;
