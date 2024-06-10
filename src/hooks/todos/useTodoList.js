// 할 일 목록 상태를 관리하는 훅
import { useState } from "react";

const useTodoList = () => {
  const [todos, setTodos] = useState([]);

  return {
    todos,
    setTodos,
  };
};

export default useTodoList;
