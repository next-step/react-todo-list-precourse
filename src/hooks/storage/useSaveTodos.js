// 로컬 스토리지에 할 일 목록을 저장하는 훅
import { useEffect } from "react";

const useSaveTodos = (allTodos) => {
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(allTodos));
  }, [allTodos]);
};

export default useSaveTodos;
