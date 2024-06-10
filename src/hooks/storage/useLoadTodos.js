// 로컬 스토리지에서 할 일 목록을 불러오는 훅
import { useEffect } from "react";

const useLoadTodos = (setTodos) => {
  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem("todos")) || [];
    setTodos(storedTodos);
  }, [setTodos]);
};

export default useLoadTodos;
