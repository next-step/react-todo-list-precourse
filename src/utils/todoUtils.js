export const addTodo = (todos, setTodos, text) => { // 투두 추가
  if (!text.trim()) return; // 내용물 없으면 추가 방지
  setTodos([...todos, { text, completed: false }]);
};