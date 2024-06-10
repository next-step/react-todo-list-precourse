import React from "react";
import TodoForm from "../todoForm/todoForm";

// 할 일 입력 폼 컨테이너 컴포넌트: 할 일 입력 폼을 표시하고 할 일 추가 기능을 제공하는 컴포넌트
const TodoFormContainer = ({ useTodos }) => {
  const { handleAddTodo } = useTodos();

  return <TodoForm addTodo={handleAddTodo} />;
};

export default TodoFormContainer;
