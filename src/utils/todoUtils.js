// 투두 관리도구
export const toggleTodo = (todos, setTodos, index) => { //완료 여부 토글
  const newTodos = [...todos];
  newTodos[index].completed = !newTodos[index].completed;
  setTodos(newTodos);
};

export const addTodo = (todos, setTodos, text) => { // 투두 추가
  if (!text.trim()) return; // 내용물 없으면 추가 방지
  setTodos([...todos, { text, completed: false }]);
};